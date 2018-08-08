/*
 * Box element for blessed
 */

/*
 * Modules
 */

var Node = require('./node');
var Element = require('./element');

/*
 * Box
 */

function Box(options) {
  if (!(this instanceof Node)) {
    return new Box(options);
  }
  options = options || {};
  Element.call(this, options);
}

Box.prototype.__proto__ = Element.prototype;

Box.prototype.type = 'box';

/*
 * Expose
 */

module.exports = Box;
