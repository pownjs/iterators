"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alphas = exports.uppers = exports.lowers = exports.numbers = exports.ASCII = undefined;

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASCII = [].concat((0, _toConsumableArray3.default)(Array(127).keys())).map(String.fromCharCode);

var numbers = ASCII.slice(48, 58);
var lowers = ASCII.slice(97, 123);
var uppers = ASCII.slice(65, 91);
var alphas = [].concat((0, _toConsumableArray3.default)(ASCII.slice(32, 48)), (0, _toConsumableArray3.default)(ASCII.slice(58, 65)), (0, _toConsumableArray3.default)(ASCII.slice(91, 97)), (0, _toConsumableArray3.default)(ASCII.slice(123, 127)));

exports.ASCII = ASCII;
exports.numbers = numbers;
exports.lowers = lowers;
exports.uppers = uppers;
exports.alphas = alphas;