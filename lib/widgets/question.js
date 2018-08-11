/*
 * question.js - question element for blessed
 */

/*
 * Modules
 */

var Node = require('./node');
var Box = require('./box');
var Button = require('./button');

/*
 * Question
 */

function Question(options) {
  if (!(this instanceof Node)) {
    return new Question(options);
  }

  options = options || {};
  options.hidden = true;
  options.okay = options.okay || {};
  options.okay.styles = options.okay.styles || {};
  options.cancel = options.cancel || {};
  options.cancel.styles = options.cancel.styles || {};

  Box.call(this, options);

  this._.okay = new Button({
    screen: this.screen,
    parent: this,
    top: 2,
    height: 1,
    left: 2,
    width: 6,
    content: this.options.okay.content || 'Okay',
    align: this.options.okay.styles.align || 'center',
    bg: this.options.okay.styles.bg || 'black',
    hoverBg: this.options.okay.styles.hoverBg || 'blue',
    autoFocus: this.options.okay.autoFocus || false,
    mouse: true
  });

  this._.cancel = new Button({
    screen: this.screen,
    parent: this,
    top: 2,
    height: 1,
    shrink: true,
    left: 10,
    width: 8,
    content: this.options.cancel.content || 'Cancel',
    align: this.options.cancel.styles.align || 'center',
    bg: this.options.cancel.styles.bg || 'black',
    hoverBg: this.options.cancel.styles.hoverBg || 'blue',
    autoFocus: this.options.cancel.autoFocus || false,
    mouse: true
  });
}

Question.prototype.__proto__ = Box.prototype;

Question.prototype.type = 'question';

Question.prototype.ask = function(text, callback) {
  var self = this;
  var press, okay, cancel;

  // Keep above:
  // var parent = this.parent;
  // this.detach();
  // parent.append(this);

  this.show();
  this.setContent(' ' + text);

  this.onScreenEvent('keypress', press = function(ch, key) {
    if (key.name === 'mouse') return;
    if (key.name !== 'enter'
        && key.name !== 'escape'
        && key.name !== 'q'
        && key.name !== 'y'
        && key.name !== 'n') {
      return;
    }
    done(null, key.name === 'enter' || key.name === 'y');
  });

  this._.okay.on('press', okay = function() {
    done(null, true);
  });

  this._.cancel.on('press', cancel = function() {
    done(null, false);
  });

  this.screen.saveFocus();
  this.focus();

  function done(err, data) {
    self.hide();
    self.screen.restoreFocus();
    self.removeScreenEvent('keypress', press);
    self._.okay.removeListener('press', okay);
    self._.cancel.removeListener('press', cancel);
    return callback(err, data);
  }

  this.screen.render();
};

/*
 * Expose
 */

module.exports = Question;
