'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generate = exports.mix = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator3 = require('babel-runtime/core-js/symbol/iterator');

var _iterator4 = _interopRequireDefault(_iterator3);

var _sets = require('./sets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The following function will progressively iterate over all iterable and non-
 * iterable objects in the argument list, generating all possible combinations.
 */
var mix = _regenerator2.default.mark(function mix() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var item, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, j;

    return _regenerator2.default.wrap(function mix$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    item = args.shift();

                    if (item) {
                        _context.next = 3;
                        break;
                    }

                    return _context.abrupt('return');

                case 3:

                    if (typeof item[_iterator4.default] !== 'function') {
                        if (typeof item === 'function') {
                            item = item();
                        } else if (Array.isArray(item)) {
                            item = item.entries();
                        } else {
                            item = [item].entries();
                        }
                    }

                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context.prev = 7;
                    _iterator = (0, _getIterator3.default)(item);

                case 9:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _context.next = 45;
                        break;
                    }

                    i = _step.value;

                    if (!args.length) {
                        _context.next = 40;
                        break;
                    }

                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context.prev = 15;
                    _iterator2 = (0, _getIterator3.default)(mix.apply(undefined, args));

                case 17:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        _context.next = 24;
                        break;
                    }

                    j = _step2.value;
                    _context.next = 21;
                    return [i].concat((0, _toConsumableArray3.default)(j));

                case 21:
                    _iteratorNormalCompletion2 = true;
                    _context.next = 17;
                    break;

                case 24:
                    _context.next = 30;
                    break;

                case 26:
                    _context.prev = 26;
                    _context.t0 = _context['catch'](15);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context.t0;

                case 30:
                    _context.prev = 30;
                    _context.prev = 31;

                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }

                case 33:
                    _context.prev = 33;

                    if (!_didIteratorError2) {
                        _context.next = 36;
                        break;
                    }

                    throw _iteratorError2;

                case 36:
                    return _context.finish(33);

                case 37:
                    return _context.finish(30);

                case 38:
                    _context.next = 42;
                    break;

                case 40:
                    _context.next = 42;
                    return [i];

                case 42:
                    _iteratorNormalCompletion = true;
                    _context.next = 9;
                    break;

                case 45:
                    _context.next = 51;
                    break;

                case 47:
                    _context.prev = 47;
                    _context.t1 = _context['catch'](7);
                    _didIteratorError = true;
                    _iteratorError = _context.t1;

                case 51:
                    _context.prev = 51;
                    _context.prev = 52;

                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }

                case 54:
                    _context.prev = 54;

                    if (!_didIteratorError) {
                        _context.next = 57;
                        break;
                    }

                    throw _iteratorError;

                case 57:
                    return _context.finish(54);

                case 58:
                    return _context.finish(51);

                case 59:
                case 'end':
                    return _context.stop();
            }
        }
    }, mix, this, [[7, 47, 51, 59], [15, 26, 30, 38], [31,, 33, 37], [52,, 54, 58]]);
});

/**
 * The following function will progressively generate all possible combinations
 * of the provided character set between the min and max lengths.
 */
var generate = _regenerator2.default.mark(function generate() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _options$min, min, _options$max, max, _options$characters, characters, i;

    return _regenerator2.default.wrap(function generate$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _options$min = options.min, min = _options$min === undefined ? 5 : _options$min, _options$max = options.max, max = _options$max === undefined ? 8 : _options$max, _options$characters = options.characters, characters = _options$characters === undefined ? _sets.lowers : _options$characters;

                    if (!(min > max)) {
                        _context2.next = 5;
                        break;
                    }

                    throw new Error('min cannot be higher than max');

                case 5:
                    if (!(min < max)) {
                        _context2.next = 14;
                        break;
                    }

                    i = min;

                case 7:
                    if (!(i <= max)) {
                        _context2.next = 12;
                        break;
                    }

                    return _context2.delegateYield(generate((0, _extends3.default)({}, options, { min: i, max: i })), 't0', 9);

                case 9:
                    i++;
                    _context2.next = 7;
                    break;

                case 12:
                    _context2.next = 15;
                    break;

                case 14:
                    return _context2.delegateYield(mix.apply(undefined, (0, _toConsumableArray3.default)(Array(max).fill(characters))), 't1', 15);

                case 15:
                case 'end':
                    return _context2.stop();
            }
        }
    }, generate, this);
});

exports.mix = mix;
exports.generate = generate;