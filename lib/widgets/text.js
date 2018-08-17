/*
 * Text.js - text element for blessed
 */

/*
 * Modules
 */

var Node = require("./node");
var Element = require("./element");

/*
 * Text
 */

function Text(options) {
	if (!(this instanceof Node)) {
		return new Text(options);
	}
	options = options || {};
	options.shrink = true;
	Element.call(this, options);
}

Text.prototype.__proto__ = Element.prototype;

Text.prototype.type = "text";

/*
 * Expose
 */

module.exports = Text;
