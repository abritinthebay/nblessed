# Changelog
All notable changes of recent releases of this project will be documented here.

This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## v1.0.0
###### 2018-08-16 [release link](https://github.com/abritinthebay/nblessed/releases/tag/v1.0.0)
##### Added
   * Added better color conversion and color diffing algorithms
   * Added Contributor Agreement, Code of Conduct, and Contribution Guidelines
   * Added .clear() method to Log widget
   * Added customization options to buttons in Question widget
   * Added ability to hide dot files in FileManager
   * Added auto-focus on a widget if it is the only one on screen.
   * Added textTable flag to allow Tables to display in a minimal text-only style
   * Added limited column & row customization in Table & ListTable (columnStyles and rowStyles)
   * Added option to break text on element width rather than intelligent breaks.
   * Added getSelected method to Lists
   * Added ability to style loading widget
   * Added documentation for alwaysScroll
   * Added ability to have a custom censor character
   * Added mouse scrolling to the Scrollable Boxes test
   * Added selectorow event to ListTable
   * Added customizable scrollStep to List widget
   * Added variable opacity of 0-100% (transparent flag defaults to 50%)
   * Added CWD to Terminal options
   * Added env vars for Unicode
   * Added ESLint and autofixed some issues

##### Changed or Updated
   * Updated Documentation
   * Updated files with a eslint —fix pass
   * Updated urls in readme and documentation
   * Updated documentation format
   * Changed package to whitelist files for bundle & updated engine minimum to 6.4.0
   * Changed the debug code in the TNG image parser
   * Changed alphabetic sort to use localeCompare and handle dotfiles better
   * Changed package.json to modern format
   * Changed from pty.js to node-pty
   * Changed list bar so it doesn’t override the prefix if it already exists
   * Changed README to be clearer around fg/bg documentation
   * Updated comments and license info
   * Changed octal parseInt to use hex literal
   * Changed ListTable to be a lot more flexible and powerful
   * Changed Telnet example to use telnet2 lib

##### Fixed
   * Fixed issue with item list in List constructor being mutated.
   * Fixed bug in alphabetical sort where files are only compared by first letter
   * Fixed history in Log widget never being cleared
   * Fixed ListTable throwing error when applying a Label
   * Fixed existing key events not being removed on ListBar after setItem
   * Fixed scroll bar not showing on tables
   * Fixed issue where you could access an undefined index in BigText
   * Fixed several bugs caused by button auto-focus
   * Fixed poor performance when an element contains large amounts of content
   * Fixed broken code in README example
   * Fixed Listable scrolling off-by-one error
   * Fixed transparency removing the last content character
   * Fixed broken iTerm copy to clipboard
   * Fixed strict mode issues

##### Removed
   * Removed dead code
   

## v0.1.81
###### 2018-08-13 [release link](https://github.com/abritinthebay/nblessed/releases/tag/v0.1.81)

The last release of the original Blessed codebase & npm module.
