# nblessed
🖥✨ Creating CLI apps with great UI using JS.

A curses-like library with a high level terminal interface API for node.js.

[![Issues](https://img.shields.io/github/issues/abritinthebay/nblessed.svg)](https://github.com/abritinthebay/nblessed/issues)
![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)
![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)

![nblessed](https://raw.githubusercontent.com/abritinthebay/nblessed/master/img/v0.1.0-3.gif)

nblessed is an updated fork of `blessed`. The name is a reference to _ncurses_ the updated version of _curses_. It is over 16,000 lines of code & terminal goodness completely implemented in javascript. Its goals are:

1. Implement an easy to use widget API which is optimized for terminals.
2. Be compatible with _any_ terminal by, like ncurses, parsing and compiling `terminfo` and `termcap`, and outputting universal escape sequences.


## Install
``` bash
$ npm install nblessed
```

## How It Works
The nblessed renderer makes use of the change-scroll-region (CSR) feature of terminals as well as back-color-erase (BCE). It draws the screen using the painter's algorithm and a screen damange buffer and smart cursor movements. This means rendering will be extremely efficient: nblessed only draws the changes.

nblessed should be as accurate as ncurses, but even more optimized in some
ways. The widget library gives you an API which is reminiscent of the DOM.
Anyone is able to make an awesome terminal application with nblessed.

## Example
This will render a box with line borders containing the text `'Hello world!'`,
perfectly centered horizontally and vertically.

__NOTE__: It is recommend you use either `smartCSR` or `fastCSR` as a
`nblessed.screen` option. This will enable CSR when scrolling text in elements
or when manipulating lines.

``` js
import nblessed from "nblessed";

// Create a screen object.
const screen = nblessed.screen({
  // Recommend to use either `smartCSR` or `fastCSR` as it
  // will make scrolling text in elements much cleaner.
  smartCSR: true
});

screen.title = 'My Amazing CLI App';

// Create a box perfectly centered horizontally and vertically.
const box = nblessed.box({
  top: "center",
  left: "center",
  width: "50%",
  height: "50%",
  content: "Hello {bold}world{/bold}!",
  tags: true,
  border: {
    type: "line"
  },
  style: {
    fg: "white",
    bg: "magenta",
    border: {
      fg: "#f0f0f0"
    },
    hover: {
      bg: "green"
    }
  }
});

// Append our box to the screen.
screen.append(box);

// Add a png icon to the box
const icon = nblessed.image({
  parent: box,
  top: 0,
  left: 0,
  type: 'overlay',
  width: 'shrink',
  height: 'shrink',
  file: __dirname + '/my-program-icon.png',
  search: false
});

// If our box is clicked, change the content.
box.on('click', function(data) {
  box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
  screen.render();
});

// If box is focused, handle `enter`/`return` and give us some more content.
box.key('enter', function(ch, key) {
  box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
  box.setLine(1, 'bar');
  box.insertLine(1, 'foo');
  screen.render();
});

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
box.focus();

// Render the screen.
screen.render();
```

### Known Issues

 * Currently there is no `mouse` or `resize` event support on Windows.

#### Testing

Tests are contained in the `./test/` directory are interactive. If you intend to sumbit a PR please write tests! See CONTRIBUTING.md for more info.

#### Examples

Examples can be found in `./examples/`.

## License

Licenced under the MIT License. See the LICENSE file for more info.

[slap]: https://github.com/slap-editor/slap
[contrib]: https://github.com/yaronn/nblessed-contrib
[termui]: https://github.com/gizak/termui
[curses]: https://en.wikipedia.org/wiki/Curses_(programming_library)
[ncurses]: https://en.wikipedia.org/wiki/Ncurses
[urwid]: http://urwid.org/reference/index.html
[curses-ui]: http://search.cpan.org/~mdxi/Curses-UI-0.9609/lib/Curses/UI.pm
[termbox]: https://github.com/nsf/termbox-go
[ttystudio]: https://github.com/chjj/ttystudio#choosing-a-new-font-for-your-terminal-recording
