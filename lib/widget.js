/*
 * High-level interface for blessed
 */

var widget = exports;

widget.classes = [
	"Node",
	"Screen",
	"Element",
	"Box",
	"Text",
	"Line",
	"ScrollableBox",
	"ScrollableText",
	"BigText",
	"List",
	"Form",
	"Input",
	"Textarea",
	"Textbox",
	"Button",
	"ProgressBar",
	"FileManager",
	"Checkbox",
	"RadioSet",
	"RadioButton",
	"Prompt",
	"Question",
	"Message",
	"Loading",
	"Listbar",
	"Log",
	"Table",
	"ListTable",
	"Terminal",
	"Image",
	"ANSIImage",
	"OverlayImage",
	"Video",
	"Layout"
];

widget.classes.forEach(function(name) {
	var file = name.toLowerCase();
	widget[name] = widget[file] = require("./widgets/" + file);
});

widget.aliases = {
	"ListBar": "Listbar",
	"PNG": "ANSIImage"
};

Object.keys(widget.aliases).forEach(function(key) {
	var name = widget.aliases[key];
	widget[key] = widget[name];
	widget[key.toLowerCase()] = widget[name];
});
