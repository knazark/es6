'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var languages = ['JavaScript', 'PHP'];

var js = languages[0];
var php = languages[1];


var scores = [3, 4, 5, 6];
var low = scores[0];
var rest = scores.slice(1);


console.log(low, rest);

function compile(_ref) {
	var _ref2 = _slicedToArray(_ref, 2);

	var low = _ref2[0];
	var mid = _ref2[1];

	console.log(low, mid);
}

compile([3, 4]);