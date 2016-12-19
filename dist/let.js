"use strict";

var buttons = document.querySelectorAll('button');

var _loop = function _loop(i) {
	button = buttons[i];


	button.innerText = i;

	button.onclick = function () {
		console.log(i);
	};
};

for (var i = 0; i < buttons.length; i++) {
	var button;

	_loop(i);
}

var options = {
	width: 150,
	title: "Меню"
};

var _options$width = options.width;
var w = _options$width === undefined ? 100 : _options$width;
var _options$height = options.height;
var h = _options$height === undefined ? 200 : _options$height;
var title = options.title;


console.log(title);
console.log(w);