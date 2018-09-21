/* eslint no-bitwise: 0 */
/*
 * Color-related functions for blessed.
 */

var colorNames = {
	// Special
	default: -1,
	normal: -1,
	bg: -1,
	fg: -1,
	// Normal
	black: 0,
	red: 1,
	green: 2,
	yellow: 3,
	blue: 4,
	magenta: 5,
	cyan: 6,
	white: 7,
	// Light
	lightblack: 8,
	lightred: 9,
	lightgreen: 10,
	lightyellow: 11,
	lightblue: 12,
	lightmagenta: 13,
	lightcyan: 14,
	lightwhite: 15,
	// Bright
	brightblack: 8,
	brightred: 9,
	brightgreen: 10,
	brightyellow: 11,
	brightblue: 12,
	brightmagenta: 13,
	brightcyan: 14,
	brightwhite: 15,
	// Alternate spellings
	grey: 8,
	gray: 8,
	lightgrey: 7,
	lightgray: 7,
	brightgrey: 7,
	brightgray: 7
};

exports.colorNames = colorNames;

const colorConvert = require("./colorConvert");

/*
 * Does a diff between the colors
 */
function colorDistance(color1, color2) {
	return colorConvert.diffRGB(color1, color2);
}


exports.RGBToHex = function RGBToHex(rbg) {
	return colorConvert.rgb2hex(rbg);
};

exports.match = function match(red1, green1, blue1) {
	var ldiff = Infinity,
		li = -1,
		i = 0,
		c,
		r2,
		g2,
		b2,
		diff,
		hash;
	if (typeof red1 === "string") {
		if (red1[0] !== "#") {
			return -1;
		}
		[red1, green1, blue1] = exports.hexToRGB(red1);
	} else if (Array.isArray(red1)) {
		[red1, green1, blue1] = red1;
	}

	hash = red1 << 16 | green1 << 8 | blue1;

	if (exports._cache[hash] !== null) {
		return exports._cache[hash];
	}

	for (; i < exports.vcolors.length; i++) {
		c = exports.vcolors[i];
		r2 = c[0];
		g2 = c[1];
		b2 = c[2];

		diff = colorDistance([red1, green1, blue1], [r2, g2, b2]);

		if (diff === 0) {
			li = i;
			break;
		}

		if (diff < ldiff) {
			ldiff = diff;
			li = i;
		}
	}
	exports._cache[hash] = li;

	return exports._cache[hash];
};

exports.hexToRGB = function hexToRGB(hex) {
	return colorConvert.hex2rgb(hex);
};


/*
 * This might work well enough for a terminal's colors: treat RGB as XYZ in a
 * 3-dimensional space and go midway between the two points.
 */
exports.mixColors = function mixColors(c1, c2, alpha) {
	/*
	 * If (c1 === 0x1ff) return c1;
	 * If (c2 === 0x1ff) return c1;
	 */
	if (c1 === 0x1ff) {
		c1 = 0;
	}
	if (c2 === 0x1ff) {
		c2 = 0;
	}
	if (alpha == null) {
		alpha = 0.5;
	}

	c1 = exports.vcolors[c1];
	var red1 = c1[0];
	var green1 = c1[1];
	var blue1 = c1[2];

	c2 = exports.vcolors[c2];
	var r2 = c2[0];
	var g2 = c2[1];
	var b2 = c2[2];

	red1 += (r2 - red1) * alpha | 0;
	green1 += (g2 - green1) * alpha | 0;
	blue1 += (b2 - blue1) * alpha | 0;

	return exports.match([red1, green1, blue1]);
};

exports.blend = function blend(attr, attr2, alpha) {
	var name, i, c, nc;

	var bg = attr & 0x1ff;
	if (attr2 != null) {
		let bg2 = attr2 & 0x1ff;
		if (bg === 0x1ff) {
			bg = 0;
		}
		if (bg2 === 0x1ff) {
			bg2 = 0;
		}
		bg = exports.mixColors(bg, bg2, alpha);
	} else if (blend._cache[bg] != null) {
		bg = blend._cache[bg];
	} else if (bg >= 8 && bg <= 15) {
		bg -= 8;
	} else {
		name = exports.ncolors[bg];
		if (name) {
			for (i = 0; i < exports.ncolors.length; i++) {
				if (name === exports.ncolors[i] && i !== bg) {
					c = exports.vcolors[bg];
					nc = exports.vcolors[i];
					if (nc[0] + nc[1] + nc[2] < c[0] + c[1] + c[2]) {
						blend._cache[bg] = i;
						bg = i;
						break;
					}
				}
			}
		}
	}

	attr &= ~0x1ff;
	attr |= bg;

	var fg = attr >> 9 & 0x1ff;
	if (attr2 != null) {
		let fg2 = attr2 >> 9 & 0x1ff;
		// 0, 7, 188, 231, 251
		if (fg === 0x1ff) {
			// XXX workaround
			fg = 248;
		} else {
			if (fg === 0x1ff) {
				fg = 7;
			}
			if (fg2 === 0x1ff) {
				fg2 = 7;
			}
			fg = exports.mixColors(fg, fg2, alpha);
		}
	} else if (blend._cache[fg] != null) {
		fg = blend._cache[fg];
	} else if (fg >= 8 && fg <= 15) {
		fg -= 8;
	} else {
		name = exports.ncolors[fg];
		if (name) {
			for (i = 0; i < exports.ncolors.length; i++) {
				if (name === exports.ncolors[i] && i !== fg) {
					c = exports.vcolors[fg];
					nc = exports.vcolors[i];
					if (nc[0] + nc[1] + nc[2] < c[0] + c[1] + c[2]) {
						blend._cache[fg] = i;
						fg = i;
						break;
					}
				}
			}
		}
	}

	attr &= ~(0x1ff << 9);
	attr |= fg << 9;

	return attr;
};

exports.blend._cache = {};

exports._cache = {};

exports.reduce = function reduce(color, total) {
	if (color >= 16 && total <= 16) {
		color = exports.ccolors[color];
	} else if (color >= 8 && total <= 8) {
		color -= 8;
	} else if (color >= 2 && total <= 2) {
		color %= 2;
	}
	return color;
};

/*
 * XTerm Colors
 * These were actually tough to track down. The xterm source only uses color
 * keywords. The X11 source needed to be examined to find the actual values.
 * They then had to be mapped to rgb values and then converted to hex values.
 */
exports.xterm = [
	"#000000", // Black
	"#cd0000", // Red3
	"#00cd00", // Green3
	"#cdcd00", // Yellow3
	"#0000ee", // Blue2
	"#cd00cd", // Magenta3
	"#00cdcd", // Cyan3
	"#e5e5e5", // Gray90
	"#7f7f7f", // Gray50
	"#ff0000", // Red
	"#00ff00", // Green
	"#ffff00", // Yellow
	"#5c5cff", // Rgb:5c/5c/ff
	"#ff00ff", // Magenta
	"#00ffff", // Cyan
	"#ffffff" // White
];

/*
 * Seed all 256 colors. Assume xterm defaults.
 * Ported from the xterm color generation script.
 */
function push(cols, _cols, i, r, g, b) {
	cols[i] = "#" + colorConvert.dec2hex(r) + colorConvert.dec2hex(g) + colorConvert.dec2hex(b);
	_cols[i] = [r, g, b];
}

// Generates colors on load
exports.colors = (function colors() {
	exports.colors = [];
	exports.vcolors = [];
	var r;
	var g;
	var b;
	var i;
	var l;

	// 0 - 15
	exports.xterm.forEach((col, cidx) => {
		let newcol = parseInt(col.substring(1), 16);
		push(exports.colors, exports.vcolors, cidx, newcol >> 16 & 0xff, newcol >> 8 & 0xff, newcol & 0xff);
	});

	// 16 - 231
	for (r = 0; r < 6; r++) {
		for (g = 0; g < 6; g++) {
			for (b = 0; b < 6; b++) {
				i = 16 + r * 36 + g * 6 + b;
				push(exports.colors, exports.vcolors, i,
					r ? r * 40 + 55 : 0,
					g ? g * 40 + 55 : 0,
					b ? b * 40 + 55 : 0);
			}
		}
	}

	// 232 - 255 are grey.
	for (g = 0; g < 24; g++) {
		l = g * 10 + 8;
		i = 232 + g;
		push(exports.colors, exports.vcolors, i, l, l, l);
	}

	return exports.colors;
}());

/*
 * Map higher colors to the first 8 colors.
 * This allows translation of high colors to low colors on 8-color terminals.
 */
exports.ccolors = (function ccolors() {
	var _cols = exports.vcolors.slice(),
		cols = exports.colors.slice(),
		out;

	exports.vcolors = exports.vcolors.slice(0, 8);
	exports.colors = exports.colors.slice(0, 8);

	out = cols.map(exports.match);

	exports.colors = cols;
	exports.vcolors = _cols;
	exports.ccolors = out;

	return out;
}());

exports.convert = function convert(color) {
	let type = typeof color;
	let processed = color;

	switch (type) {
		case "number":
			break; // Do nothing!
		case "string":
			processed = color.replace(/[\- ]/g, "");
			if (colorNames[color] !== null) {
				processed = colorNames[color];
			} else {
				processed = exports.match(color);
			}
			break;
		case "object":
			processed = Array.isArray(color) ? exports.match(color) : -1;
			break;
		default:
			processed = -1;
			break;
	}

	return processed !== -1 ? processed : 0x1ff;
};

/*
 * Map higher colors to the first 8 colors.
 * This allows translation of high colors to low colors on 8-color terminals.
 * Why the hell did I do this by hand?
 */
exports.ccolors = {
	blue: [
		4,
		12,
		[17, 21],
		[24, 27],
		[31, 33],
		[38, 39],
		45,
		[54, 57],
		[60, 63],
		[67, 69],
		[74, 75],
		81,
		[91, 93],
		[97, 99],
		[103, 105],
		[110, 111],
		117,
		[128, 129],
		[134, 135],
		[140, 141],
		[146, 147],
		153,
		165,
		171,
		177,
		183,
		189
	],

	green: [
		2,
		10,
		22,
		[28, 29],
		[34, 36],
		[40, 43],
		[46, 50],
		[64, 65],
		[70, 72],
		[76, 79],
		[82, 86],
		[106, 108],
		[112, 115],
		[118, 122],
		[148, 151],
		[154, 158],
		[190, 194]
	],

	cyan: [
		6,
		14,
		23,
		30,
		37,
		44,
		51,
		66,
		73,
		80,
		87,
		109,
		116,
		123,
		152,
		159,
		195
	],

	red: [
		1,
		9,
		52,
		[88, 89],
		[94, 95],
		[124, 126],
		[130, 132],
		[136, 138],
		[160, 163],
		[166, 169],
		[172, 175],
		[178, 181],
		[196, 200],
		[202, 206],
		[208, 212],
		[214, 218],
		[220, 224]
	],

	magenta: [
		5,
		13,
		53,
		90,
		96,
		127,
		133,
		139,
		164,
		170,
		176,
		182,
		201,
		207,
		213,
		219,
		225
	],

	yellow: [
		3,
		11,
		58,
		[100, 101],
		[142, 144],
		[184, 187],
		[226, 230]
	],

	black: [
		0,
		8,
		16,
		59,
		102,
		[232, 243]
	],

	white: [
		7,
		15,
		145,
		188,
		231,
		[244, 255]
	]
};

exports.ncolors = [];

Object.keys(exports.ccolors)
	.forEach((name) => {
		exports.ccolors[name]
			.forEach((offset) => {
				if (typeof offset === "number") {
					exports.ncolors[offset] = name;
					exports.ccolors[offset] = exports.colorNames[name];
					return;
				}
				for (let idx = offset[0], length = offset[1]; idx <= length; idx++) {
					exports.ncolors[idx] = name;
					exports.ccolors[idx] = exports.colorNames[name];
				}
			});
		delete exports.ccolors[name];
	});
