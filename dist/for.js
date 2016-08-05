'use strict';

var browsers = ['Chrome', 'Mozilla', 'Edge', 'Safari'];

for (var index in browsers) {
	console.log(index);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = browsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var browser = _step.value;

		console.log(browser);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

browsers.forEach(function (key, value) {
	console.log(value);
	console.log(key);
});