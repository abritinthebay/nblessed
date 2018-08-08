/*
 * input.js - abstract input element for blessed
 */

/*
 * Modules
 */

var Node = require('./node');
var Box = require('./box');

/*
 * Input
 */

function Input(options) {
  if (!(this instanceof Node)) {
    return new Input(options);
  }
  options = options || {};
  Box.call(this, options);
}

Input.prototype.__proto__ = Box.prototype;

Input.prototype.type = 'input';

/*
 * Expose
 */

module.exports = Input;
