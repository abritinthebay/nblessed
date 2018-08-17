/*
 * Radioset.js - radio set element for blessed
 */

/*
 * Modules
 */

var Node = require("./node");
var Box = require("./box");

/*
 * RadioSet
 */

function RadioSet(options) {
	if (!(this instanceof Node)) {
		return new RadioSet(options);
	}
	options = options || {};
	/*
   * Possibly inherit parent's style.
   * options.style = this.parent.style;
   */
	Box.call(this, options);
}

RadioSet.prototype.__proto__ = Box.prototype;

RadioSet.prototype.type = "radio-set";

/*
 * Expose
 */

module.exports = RadioSet;
