import React, { useState, useEffect, useRef } from 'react';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var TYPE_NOTIFICATION = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESSFULL: 'successful'
};
var SIZE_CONTROL = {
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  XS: 'xs'
};
var STYLE_CONTROL = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var STYLE_STATUS_CONTROL = {
  DISABLED: 'disabled',
  READ_ONLY: 'readOnly',
  REQUIRED: 'required'
};
var ACTION_ICONS = ['search', 'home', 'account_circle', 'settings', 'done', 'info', 'check_circle', 'delete', 'logout', 'description', 'lock', 'help', 'manage_accounts', 'filter_alt', 'event', 'login', 'list', 'lightbulb', 'autorenew', 'print', 'tab', 'zoom_in', 'zoom_out'];
var ALERT_ICONS = ['add_alert', 'error', 'notification_important', 'warning'];
var AUDIO_AND_VIDEO_ICONS = ['play_arrow', 'videocam', 'mic', 'volume_up', 'pause', 'volume_off', 'replay', 'skip_next', 'stop', 'movie', 'skip_previous', 'loop', 'fast_forward', 'mic_off', 'video_call', 'repeat', 'volume_mute', 'fast_rewind', 'volume_down', 'repeat_one'];
var COMMUNICATION_ICONS = ['email', 'location_on', 'call', 'chat', 'list_alt', 'alternate_email', 'qr_code_2', 'message', 'sentiment_satisfied_alt', 'comment', 'live_help', 'rss_feed', 'import_export', 'mark_email_read', 'stay_current_portrait', 'duo', 'key', 'desktop_access_disabled'];
var CONTENT_ICONS = ['add', 'send', 'content_copy', 'clear', 'mail', 'save', 'filter_list', 'remove', 'sort', 'inventory', 'create', 'flag', 'reply', 'push_pin', 'block', 'calculate', 'report', 'archive', 'select_all', 'content_paste_go'];
var DIVICE_ICONS = ['password', 'quiz', 'storage', 'pin', 'bluetooth', 'access_time', 'sd_storage', 'restart_alt'];
var EDITOR_ICONS = ['attach_money', 'mode_edit', 'format_list_bulleted', 'attach_file', 'edit_note', 'checklist', 'format_list_numbered', 'insert_photo', 'format_bold', 'insert_emoticon', 'table_rows', 'format_italic', 'format_align_left', 'format_underlined', 'format_align_center', 'format_align_right', 'format_align_justify'];
var FILE_ICONS = ['file_download', 'file_upload', 'folder', 'grid_view', 'upload_file', 'cloud_upload', 'cloud_download', 'folder_open', 'cloud', 'create_new_folder'];
var HARDWARE_ICONS = ['keyboard_arrow_down', 'smartphone', 'phone_iphone', 'keyboard_arrow_right', 'computer', 'desktop_windows', 'phone_android', 'keyboard_backspace', 'keyboard_arrow_up', 'keyboard_arrow_left', 'keyboard', 'headphones', 'tv', 'keyboard_return', 'headset_mic', 'mouse', 'keyboard_voice', 'tablet_mac', 'watch', 'keyboard_double_arrow_left', 'keyboard_double_arrow_right'];
var IMAGE_ICONS = ['photo_camera', 'image', 'timer', 'camera', 'crop', 'broken_image', 'flip_camera_ios', 'movie_filter', 'crop_rotate'];
var NAVIGATION_ICONS = ['close', 'menu', 'expand_more', 'expand_less', 'arrow_back', 'arrow_forward', 'chevron_right', 'chevron_left', 'arrow_drop_down', 'arrow_drop_up', 'first_page', 'last_page', 'campaign', 'apps', 'refresh', 'unfold_more', 'unfold_less', 'fullscreen_exit', 'fullscreen', 'more_vert', 'more_horiz'];
var NOTIFICATION_ICONS = ['support_agent', 'wifi', 'sync', 'event_available', 'priority_high', 'event_note', 'sync_problem', 'vpn_lock', 'do_disturb', 'voice_chat'];
var SOCIAL_ICONS = ['person', 'notifications', 'groups', 'group', 'share', 'person_add', 'public', 'notifications_active', 'whatsapp', 'woman', 'man', 'recycling', 'telegram', 'adobe', 'snapchat', 'apple', 'thumb_up_alt', 'thumb_down_alt', 'notifications_paused', 'tiktok'];
var ICONS = ACTION_ICONS.concat(ALERT_ICONS).concat(AUDIO_AND_VIDEO_ICONS).concat(COMMUNICATION_ICONS).concat(CONTENT_ICONS).concat(DIVICE_ICONS).concat(EDITOR_ICONS).concat(FILE_ICONS).concat(HARDWARE_ICONS).concat(IMAGE_ICONS).concat(NAVIGATION_ICONS).concat(NOTIFICATION_ICONS).concat(SOCIAL_ICONS);
var CONSTANT = {
  TYPE_NOTIFICATION: TYPE_NOTIFICATION,
  SIZE_CONTROL: SIZE_CONTROL,
  STYLE_CONTROL: STYLE_CONTROL,
  STYLE_STATUS_CONTROL: STYLE_STATUS_CONTROL,
  ICONS: ICONS,
  ACTION_ICONS: ACTION_ICONS,
  ALERT_ICONS: ALERT_ICONS,
  AUDIO_AND_VIDEO_ICONS: AUDIO_AND_VIDEO_ICONS,
  COMMUNICATION_ICONS: COMMUNICATION_ICONS,
  CONTENT_ICONS: CONTENT_ICONS,
  DIVICE_ICONS: DIVICE_ICONS,
  EDITOR_ICONS: EDITOR_ICONS,
  FILE_ICONS: FILE_ICONS,
  HARDWARE_ICONS: HARDWARE_ICONS,
  IMAGE_ICONS: IMAGE_ICONS,
  NAVIGATION_ICONS: NAVIGATION_ICONS,
  NOTIFICATION_ICONS: NOTIFICATION_ICONS,
  SOCIAL_ICONS: SOCIAL_ICONS
};

var jsonToArray = function jsonToArray(json) {
  var result = [];

  for (var i in json) {
    result.push(json[i]);
  }

  return result;
};
var getOptionsSelector = function getOptionsSelector(json) {
  var result = [];

  for (var i in json) {
    result.push({
      key: json[i],
      value: json[i]
    });
  }

  return result;
};
var getValueInput = function getValueInput(e) {
  if (e && e.target) {
    if (e.target.tagName.toLowerCase() === 'input') {
      if (e.target.type.toLowerCase() === 'checkbox') {
        return {
          key: e.target.name,
          value: e.target.checked
        };
      } else if (e.target.type.toLowerCase() === 'radio') {
        return {
          key: e.target.name,
          value: e.target.id
        };
      } else {
        return {
          key: e.target.name,
          value: e.target.value
        };
      }
    } else if (e.target.tagName.toLowerCase() === 'button') {
      return {
        key: e.target.id,
        value: ''
      };
    } else if (e.target.tagName.toLowerCase() === 'textarea' || e.target.tagName.toLowerCase() === 'select') {
      return {
        key: e.target.id,
        value: e.target.value
      };
    }
  } else if (e) {
    return {
      key: e.id,
      value: e.value
    };
  } else {
    return null;
  }
};
var getInitialValue = function getInitialValue(newValue, initialValue) {
  if (newValue === undefined || newValue === null) {
    return initialValue;
  } else {
    return newValue;
  }
};
var ternaryOperation = function ternaryOperation(condicion, valorVerdadero, valorFalso) {
  if (condicion) {
    return valorVerdadero;
  } else {
    return valorFalso;
  }
};
var onlyNumber = function onlyNumber(value) {
  return getInitialValue(value, '').replace(/[^0-9]/g, '');
};
var onlyAlphanumericWithSpace = function onlyAlphanumericWithSpace(value) {
  return getInitialValue(value, '').replace(/[^\wñÑáÁéÉíÍóÓúÚ\s]/g, '');
};
var onlyAlphanumericWithoutSpace = function onlyAlphanumericWithoutSpace(value) {
  return getInitialValue(value, '').replace(/[\W]/g, '');
};
var lowerCaseText = function lowerCaseText(value) {
  return getInitialValue(value, '').toLowerCase();
};
var upperCaseText = function upperCaseText(value) {
  return getInitialValue(value, '').toUpperCase();
};
var capitalText = function capitalText(value) {
  return getInitialValue(value, '').replace(/\w\S*/g, function (w) {
    return w.replace(/^\w/, function (c) {
      return c.toUpperCase();
    });
  });
};
var funtions = {
  jsonToArray: jsonToArray,
  getOptionsSelector: getOptionsSelector,
  getValueInput: getValueInput,
  getInitialValue: getInitialValue,
  ternaryOperation: ternaryOperation,
  onlyNumber: onlyNumber,
  onlyAlphanumericWithSpace: onlyAlphanumericWithSpace,
  onlyAlphanumericWithoutSpace: onlyAlphanumericWithoutSpace,
  lowerCaseText: lowerCaseText,
  upperCaseText: upperCaseText,
  capitalText: capitalText
};

var Button = function Button(_ref) {
  var id = _ref.id,
      title = _ref.title,
      disabled = _ref.disabled,
      _onClick = _ref.onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? STYLE_CONTROL.PRIMARY : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE_CONTROL.MD : _ref$size;
  return /*#__PURE__*/React.createElement("button", {
    id: id,
    className: type + " " + size,
    type: ternaryOperation(_onClick, 'button', 'submit'),
    onClick: function onClick(e) {
      if (_onClick) _onClick(e);
    },
    disabled: disabled
  }, title);
};

Button.propTypes = {
  id: propTypes.string,
  title: propTypes.string.isRequired,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  type: propTypes.oneOf(jsonToArray(STYLE_CONTROL)),
  size: propTypes.oneOf(jsonToArray(SIZE_CONTROL))
};

var CheckButton = function CheckButton(_ref) {
  var id = _ref.id,
      label = _ref.label,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      checked = _ref.checked,
      eventChange = _ref.eventChange,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;

  var style = function style() {
    if (disabled) {
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !checked) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "checkbutton " + style()
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: id,
    name: id,
    required: !disabled && required && !checked,
    disabled: disabled,
    checked: checked,
    onChange: function onChange(e) {
      if (!readOnly) {
        eventChange(e);
      }
    },
    ref: ref
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label));
};

CheckButton.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  disabled: propTypes.bool,
  required: propTypes.bool,
  readOnly: propTypes.bool,
  checked: propTypes.bool.isRequired,
  eventChange: propTypes.func.isRequired,
  ref: propTypes.object
};

var RadioButton = function RadioButton(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      disabled = _ref.disabled,
      required = _ref.required,
      readOnly = _ref.readOnly,
      value = _ref.value,
      eventChange = _ref.eventChange,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;

  var style = function style() {
    if (disabled) {
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !value) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "radiobutton " + style()
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: id,
    name: name,
    required: !disabled && required && !value,
    disabled: disabled,
    value: value,
    checked: id === value,
    onChange: function onChange(e) {
      if (!readOnly) {
        eventChange(e);
      }
    },
    ref: ref
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label));
};

RadioButton.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string,
  disabled: propTypes.bool,
  required: propTypes.bool,
  readOnly: propTypes.bool,
  value: propTypes.string,
  eventChange: propTypes.func.isRequired,
  ref: propTypes.object
};

var Selector = function Selector(_ref) {
  var id = _ref.id,
      titleTop = _ref.titleTop,
      titleBottom = _ref.titleBottom,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      eventChange = _ref.eventChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;

  var _onChange = function onChange(e) {
    if (eventChange && !disabled) {
      eventChange(e);
    }
  };

  var style = function style() {
    if (disabled) {
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !value) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: 'control-container '
  }, /*#__PURE__*/React.createElement("div", {
    className: style()
  }, /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, titleTop), /*#__PURE__*/React.createElement("select", {
    id: id,
    name: id,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e);
    },
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, options.map(function (element, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: getInitialValue(element.key, element.value)
    }, element.value);
  })), /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, titleBottom)));
};

Selector.propTypes = {
  id: propTypes.string.isRequired,
  titleTop: propTypes.string,
  titleBottom: propTypes.string,
  value: propTypes.any.isRequired,
  eventChange: propTypes.func.isRequired,
  disabled: propTypes.bool,
  required: propTypes.bool,
  readOnly: propTypes.bool,
  options: propTypes.arrayOf(propTypes.shape({
    value: propTypes.any,
    key: propTypes.string
  })),
  ref: propTypes.object
};

var Spinner = function Spinner() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container-load"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loading"
  }));
};

var TextBox = function TextBox(_ref) {
  var id = _ref.id,
      titleTop = _ref.titleTop,
      placeholder = _ref.placeholder,
      titleBottom = _ref.titleBottom,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      noPaste = _ref.noPaste,
      noCopy = _ref.noCopy,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 200 : _ref$size,
      eventChange = _ref.eventChange,
      eventFocus = _ref.eventFocus,
      eventBlur = _ref.eventBlur,
      eventKeyDown = _ref.eventKeyDown,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;

  var _onChange = function onChange(e) {
    if (eventChange && !disabled) eventChange(e);
  };

  var _onFocus = function onFocus(e) {
    if (eventFocus && !disabled && !readOnly) eventFocus(e);
  };

  var _onBlur = function onBlur(e) {
    if (eventBlur && !disabled && !readOnly) eventBlur(e);
  };

  var _onKeyDown = function onKeyDown(e) {
    if (e.key === 'Enter') e.preventDefault();else if (eventKeyDown && !disabled && !readOnly) eventKeyDown(e);
  };

  var style = function style() {
    if (disabled) {
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !value) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: 'control-container '
  }, /*#__PURE__*/React.createElement("div", {
    className: style()
  }, /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, titleTop), /*#__PURE__*/React.createElement("input", {
    type: "search",
    id: id,
    name: id,
    value: value,
    placeholder: placeholder,
    onKeyDown: function onKeyDown(e) {
      return _onKeyDown(e);
    },
    onChange: function onChange(e) {
      return _onChange(e);
    },
    onFocus: function onFocus(e) {
      return _onFocus(e);
    },
    onBlur: function onBlur(e) {
      return _onBlur(e);
    },
    readOnly: readOnly,
    onPaste: function onPaste(e) {
      if (noPaste) e.preventDefault();
    },
    onCopy: function onCopy(e) {
      if (noCopy) e.preventDefault();
    },
    maxLength: size,
    size: size,
    autoComplete: "off",
    disabled: disabled,
    required: required,
    ref: ref
  }), /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, titleBottom)));
};

TextBox.propTypes = {
  id: propTypes.string.isRequired,
  titleTop: propTypes.string,
  titleBottom: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  disabled: propTypes.bool,
  required: propTypes.bool,
  eventChange: propTypes.func.isRequired,
  eventFocus: propTypes.func,
  eventBlur: propTypes.func,
  eventKeyDown: propTypes.func,
  readOnly: propTypes.bool,
  noCopy: propTypes.bool,
  noPaste: propTypes.bool,
  size: propTypes.number,
  ref: propTypes.object
};

var Title = function Title(_ref) {
  var label = _ref.label,
      secundary = _ref.secundary;
  var component;

  if (secundary) {
    component = /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold"
    }, label), /*#__PURE__*/React.createElement("div", {
      className: "line"
    }));
  } else {
    component = /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "font-bold"
    }, label), /*#__PURE__*/React.createElement("div", {
      className: "line"
    }));
  }

  return component;
};

Title.propTypes = {
  label: propTypes.string.isRequired,
  secundary: propTypes.bool
};

var TextButton = function TextButton(_ref) {
  var id = _ref.id,
      text = _ref.text,
      disabled = _ref.disabled,
      _onClick = _ref.onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? STYLE_CONTROL.PRIMARY : _ref$type;

  var style = function style() {
    return "textButton " + type + " " + ternaryOperation(disabled, STYLE_STATUS_CONTROL.DISABLED, '');
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: style(),
    id: id,
    type: ternaryOperation(_onClick, 'button', 'submit'),
    name: id,
    disabled: disabled,
    onClick: function onClick(e) {
      if (!disabled) {
        _onClick(e);
      }
    }
  }, text));
};

TextButton.propTypes = {
  id: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  type: propTypes.oneOf(jsonToArray(STYLE_CONTROL))
};

var TextArea = function TextArea(_ref) {
  var id = _ref.id,
      title = _ref.title,
      placeholder = _ref.placeholder,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      noPaste = _ref.noPaste,
      noCopy = _ref.noCopy,
      eventChange = _ref.eventChange,
      eventFocus = _ref.eventFocus,
      eventBlur = _ref.eventBlur,
      eventKeyDown = _ref.eventKeyDown,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 2 : _ref$rows;

  var _onChange = function onChange(e) {
    if (eventChange && !disabled) eventChange(e);
  };

  var _onFocus = function onFocus(e) {
    if (eventFocus && !disabled && !readOnly) eventFocus(e);
  };

  var _onBlur = function onBlur(e) {
    if (eventBlur && !disabled && !readOnly) eventBlur(e);
  };

  var _onKeyDown = function onKeyDown(e) {
    if (e.key === 'Enter') e.preventDefault();else if (eventKeyDown && !disabled && !readOnly) eventKeyDown(e);
  };

  var style = function style() {
    if (disabled) {
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !value) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: 'control-container '
  }, /*#__PURE__*/React.createElement("div", {
    className: style()
  }, /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, title), /*#__PURE__*/React.createElement("textarea", {
    id: id,
    name: id,
    value: value,
    placeholder: placeholder,
    onKeyDown: function onKeyDown(e) {
      return _onKeyDown(e);
    },
    onChange: function onChange(e) {
      return _onChange(e);
    },
    onFocus: function onFocus(e) {
      return _onFocus(e);
    },
    onBlur: function onBlur(e) {
      return _onBlur(e);
    },
    readOnly: readOnly,
    onPaste: function onPaste(e) {
      if (noPaste) e.preventDefault();
    },
    onCopy: function onCopy(e) {
      if (noCopy) e.preventDefault();
    },
    disabled: disabled,
    required: required,
    ref: ref,
    rows: rows
  })));
};

TextArea.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
  disabled: propTypes.bool,
  required: propTypes.bool,
  eventChange: propTypes.func,
  eventFocus: propTypes.func,
  eventBlur: propTypes.func,
  eventKeyDown: propTypes.func,
  readOnly: propTypes.bool,
  noCopy: propTypes.bool,
  noPaste: propTypes.bool,
  rows: propTypes.number,
  ref: propTypes.object
};

var NavBar = function NavBar(_ref) {
  var leftOptions = _ref.leftOptions,
      rightOptions = _ref.rightOptions,
      correntPath = _ref.correntPath,
      getCurrentPath = _ref.getCurrentPath;

  var renderOption = function renderOption(index, path, name) {
    return /*#__PURE__*/React.createElement("label", {
      key: index,
      className: path === correntPath ? 'active' : '',
      onClick: function onClick() {
        return getCurrentPath(path);
      }
    }, name);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: " container-nav-bar-father "
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-nav-bar bg-primary-1"
  }, /*#__PURE__*/React.createElement("form", {
    className: "grid-primary padding-v-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topnav font-22"
  }, leftOptions.map(function (element, index) {
    return renderOption(index, element.path, element.name);
  }), /*#__PURE__*/React.createElement("div", {
    className: "topnav-right"
  }, rightOptions.map(function (element, index) {
    return renderOption(index, element.path, element.name);
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "nav-bar-margin-bootom "
  }));
};

NavBar.propTypes = {
  leftOptions: propTypes.arrayOf(propTypes.shape({
    path: propTypes.string.isRequired,
    name: propTypes.string.isRequired
  })),
  rightOptions: propTypes.arrayOf(propTypes.shape({
    path: propTypes.string.isRequired,
    name: propTypes.string.isRequired
  })),
  correntPath: propTypes.string.isRequired,
  getCurrentPath: propTypes.func.isRequired
};

var DatePicker = function DatePicker(_ref) {
  var id = _ref.id,
      title = _ref.title,
      value = _ref.value,
      eventChange = _ref.eventChange,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      required = _ref.required,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;
  var strDay = '';
  var strMonth = '';
  var strYear = '';

  if (Date.parse(value)) {
    var _value = new Date(value);

    strDay = _value.getDate().toString();
    strMonth = _value.getMonth().toString();
    strYear = _value.getFullYear().toString();
  }

  var _useState = useState(strDay),
      day = _useState[0],
      setDay = _useState[1];

  var _useState2 = useState(strMonth),
      month = _useState2[0],
      setMonth = _useState2[1];

  var _useState3 = useState(strYear),
      year = _useState3[0],
      setYear = _useState3[1];

  var _useState4 = useState([]),
      days = _useState4[0],
      setDays = _useState4[1];

  var dateformat = function dateformat(_month, _day, _year) {
    return _month + "/" + _day + "/" + _year;
  };

  var onChangeDay = function onChangeDay(e) {
    setDay(e.target.value);
    var strNewDate = dateformat(month, e.target.value, year);
    updateDate(strNewDate);
  };

  var onChangeMonth = function onChangeMonth(e) {
    setMonth(e.target.value);
    var strNewDate = dateformat(e.target.value, day, year);
    updateDate(strNewDate);
  };

  var onChangeYear = function onChangeYear(e) {
    setYear(e.target.value);
    var strNewDate = dateformat(month, day, e.target.value);
    updateDate(strNewDate);
  };

  var updateDate = function updateDate(strNewDate) {
    if (Date.parse(strNewDate) && !strNewDate.startsWith('/') && !strNewDate.endsWith('/') && !strNewDate.includes('//')) {
      eventChange({
        id: id,
        value: strNewDate
      });
    } else {
      eventChange({
        id: id,
        value: ''
      });
    }
  };

  var ID_DAY = "day_" + id;
  var ID_MONTH = "month_" + id;
  var ID_YEAR = "year_" + id;
  var titleDay = 'Día';
  var titleMonth = 'Mes';
  var titleYear = 'Año';
  var controlStyle = ternaryOperation(disabled, STYLE_STATUS_CONTROL.DISABLED, '');

  var style = function style(_value) {
    if (disabled) {
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !_value) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  var values = function values(min, max) {
    if (min === void 0) {
      min = 1;
    }

    if (max === void 0) {
      max = 12;
    }

    var array = [];

    for (var i = min; i <= max; i++) {
      array.push(i.toString());
    }

    return array;
  };

  useEffect(function () {
    var isLeapYear = function isLeapYear(_year) {
      return ternaryOperation(_year % 400 === 0, true, ternaryOperation(_year % 100 === 0, false, _year % 4 === 0));
    };

    var endDay = 31;

    if (year && isLeapYear(parseInt(year)) && month === '2') {
      endDay = 29;
    } else if (month === '2') {
      endDay = 28;
    } else if (['4', '6', '9', '11'].includes(month)) {
      endDay = 30;
    }

    if (day && parseInt(day) > endDay) {
      setDay('');
    }

    setDays(values(1, endDay));
  }, [month, year, day]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'control-container  '
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-date "
  }, /*#__PURE__*/React.createElement("div", {
    className: "title " + controlStyle
  }, /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "day"
  }, /*#__PURE__*/React.createElement("div", {
    className: style(day)
  }, /*#__PURE__*/React.createElement("select", {
    id: ID_DAY,
    name: ID_DAY,
    value: day,
    onChange: function onChange(e) {
      return onChangeDay(e);
    },
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, /*#__PURE__*/React.createElement("option", {
    value: ''
  }, titleDay), days.map(function (element) {
    return /*#__PURE__*/React.createElement("option", {
      key: element,
      value: element
    }, element);
  })), /*#__PURE__*/React.createElement("span", {
    htmlFor: ID_DAY
  }, ternaryOperation(day !== '', titleDay, '')))), /*#__PURE__*/React.createElement("div", {
    className: "month"
  }, /*#__PURE__*/React.createElement("div", {
    className: style(month)
  }, /*#__PURE__*/React.createElement("select", {
    id: ID_MONTH,
    name: ID_MONTH,
    value: month,
    onChange: function onChange(e) {
      return onChangeMonth(e);
    },
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, /*#__PURE__*/React.createElement("option", {
    value: ''
  }, titleMonth), values(1, 12).map(function (element) {
    return /*#__PURE__*/React.createElement("option", {
      key: element,
      value: element
    }, element);
  })), /*#__PURE__*/React.createElement("span", {
    htmlFor: ID_MONTH
  }, ternaryOperation(month !== '', titleMonth, '')))), /*#__PURE__*/React.createElement("div", {
    className: "year"
  }, /*#__PURE__*/React.createElement("div", {
    className: style(year)
  }, /*#__PURE__*/React.createElement("select", {
    id: ID_YEAR,
    name: ID_YEAR,
    value: year,
    onChange: function onChange(e) {
      return onChangeYear(e);
    },
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, /*#__PURE__*/React.createElement("option", {
    value: ''
  }, titleYear), values(1900, 2100).map(function (element) {
    return /*#__PURE__*/React.createElement("option", {
      key: element,
      value: element
    }, element);
  })), /*#__PURE__*/React.createElement("span", {
    htmlFor: ID_YEAR
  }, ternaryOperation(year !== '', titleYear, ''))))));
};

DatePicker.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  eventChange: propTypes.func.isRequired,
  disabled: propTypes.bool,
  readOnly: propTypes.bool,
  required: propTypes.bool,
  title: propTypes.string,
  ref: propTypes.object
};

var Modal = function Modal(_ref) {
  var show = _ref.show,
      eventModal = _ref.eventModal,
      children = _ref.children;

  var _useState = useState(show),
      state = _useState[0],
      setState = _useState[1];

  var closeModal = function closeModal(e) {
    eventModal(e);
  };

  useEffect(function () {
    setState(show);
  }, [show]);

  var modalRender = function modalRender() {
    return /*#__PURE__*/React.createElement("div", {
      className: "modal"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "padding-v-20 padding-h-20 "
    }, /*#__PURE__*/React.createElement("h4", {
      className: "modal-close-button",
      onClick: closeModal
    }, "X"))), /*#__PURE__*/React.createElement("div", {
      className: "modal-body "
    }, children)));
  };

  return !state ? null : modalRender();
};

Modal.propTypes = {
  eventModal: propTypes.func.isRequired,
  show: propTypes.bool.isRequired,
  children: propTypes.node
};

var ModalNotifications = function ModalNotifications(_ref) {
  var title = _ref.title,
      message = _ref.message,
      details = _ref.details,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? TYPE_NOTIFICATION.INFO : _ref$type,
      eventContinue = _ref.eventContinue,
      showModal = _ref.showModal,
      _eventModal = _ref.eventModal;

  var getText = function getText() {
    switch (type) {
      case TYPE_NOTIFICATION.ERROR:
        return 'X';

      case TYPE_NOTIFICATION.WARNING:
        return '!';

      case TYPE_NOTIFICATION.INFO:
        return 'i';

      case TYPE_NOTIFICATION.SUCCESSFULL:
        return '✔';

      default:
        return '';
    }
  };

  return /*#__PURE__*/React.createElement(Modal, {
    show: showModal,
    eventModal: function eventModal(e) {
      return _eventModal(e);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "body-generic-notifications "
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12 "
  }, /*#__PURE__*/React.createElement(Title, {
    label: title,
    secundary: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "center start-1 size-12 padding-v-40  "
  }, /*#__PURE__*/React.createElement("div", {
    className: "circle " + type + " center"
  }, /*#__PURE__*/React.createElement("h1", null, getText()))), /*#__PURE__*/React.createElement("div", {
    className: "center start-1 size-12 padding-v-30  "
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-16"
  }, " ", message, " ")), /*#__PURE__*/React.createElement("div", {
    className: "center start-1 size-12 padding-v-30  "
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-14"
  }, " ", details, " ")), /*#__PURE__*/React.createElement("div", {
    className: "padding-v-20 start-9 size-4"
  }, /*#__PURE__*/React.createElement(Button, {
    title: "Continuar",
    type: "primary",
    onClick: function onClick(e) {
      return eventContinue(e);
    }
  })))));
};

ModalNotifications.propTypes = {
  showModal: propTypes.bool.isRequired,
  eventModal: propTypes.func,
  type: propTypes.oneOf(jsonToArray(TYPE_NOTIFICATION)),
  title: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
  details: propTypes.string,
  eventContinue: propTypes.func
};

var ModalHttpMessage = function ModalHttpMessage(_ref) {
  var showModal = _ref.showModal,
      _eventModal = _ref.eventModal,
      code = _ref.code,
      title = _ref.title,
      message = _ref.message,
      details = _ref.details;

  var style = function style(codeHttp) {
    switch (true) {
      case codeHttp < 200:
        return 'code-one-hundred';

      case codeHttp < 300:
        return 'code-two-hundred';

      case codeHttp < 400:
        return 'code-three-hundred';

      case codeHttp < 500:
        return 'code-four-hundred';

      case codeHttp < 600:
        return 'code-five-hundred';

      default:
        return '';
    }
  };

  return /*#__PURE__*/React.createElement(Modal, {
    show: showModal,
    eventModal: function eventModal(e) {
      return _eventModal(e);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "body-generic-http-message"
  }, /*#__PURE__*/React.createElement("div", {
    className: " grid-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12 "
  }, /*#__PURE__*/React.createElement(Title, {
    label: "Mensaje HTTP",
    secundary: true
  })), /*#__PURE__*/React.createElement("div", {
    className: " grid-secondary padding-v-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center start-1 size-20   "
  }, /*#__PURE__*/React.createElement("h1", {
    className: style(code)
  }, code, " ")), /*#__PURE__*/React.createElement("div", {
    className: "center start-1 size-20  padding-v-10  "
  }, /*#__PURE__*/React.createElement("h4", {
    className: style(code)
  }, title))), /*#__PURE__*/React.createElement("div", {
    className: " start-1 size-12 "
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-18"
  }, " Mensaje ")), /*#__PURE__*/React.createElement("div", {
    className: " start-1 size-12 padding-v-10  "
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-16"
  }, " ", message, " ")), /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12 padding-v-50  "
  }, /*#__PURE__*/React.createElement(TextArea, {
    rows: 6,
    id: "Detalles",
    value: details,
    title: "Detalles",
    readOnly: true
  })))));
};

ModalHttpMessage.propTypes = {
  showModal: propTypes.bool.isRequired,
  eventModal: propTypes.func,
  code: propTypes.number,
  title: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
  details: propTypes.string
};

var propTypes$1 = {
  showModal: propTypes.bool,
  eventModal: propTypes.func,
  pdf: propTypes.string.isRequired
};

var ModalViewerPDF = function ModalViewerPDF(_ref) {
  var pdf = _ref.pdf,
      showModal = _ref.showModal,
      _eventModal = _ref.eventModal;
  return /*#__PURE__*/React.createElement(Modal, {
    show: showModal,
    eventModal: function eventModal(e) {
      return _eventModal(e);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "body-viewer-pdf"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12 "
  }, /*#__PURE__*/React.createElement(Title, {
    label: "Visor de PDF",
    secundary: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12 padding-v-30"
  }, /*#__PURE__*/React.createElement("div", {
    className: " padding-v-30"
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Viewer PDF",
    src: pdf,
    frameBorder: "0"
  }))))));
};

ModalViewerPDF.propTypes = propTypes$1;

var Icon = function Icon(_ref) {
  var name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE_CONTROL.MD : _ref$size;
  return /*#__PURE__*/React.createElement("div", {
    className: "container-icon " + size
  }, /*#__PURE__*/React.createElement("div", {
    className: "material-icons"
  }, name));
};

Icon.propTypes = {
  name: propTypes.oneOf(ICONS).isRequired,
  size: propTypes.oneOf(jsonToArray(SIZE_CONTROL))
};

var Option = function Option(_ref) {
  var label = _ref.label,
      path = _ref.path,
      icon = _ref.icon,
      getCurrentPath = _ref.getCurrentPath;
  return /*#__PURE__*/React.createElement("div", {
    className: "container-option ",
    onClick: function onClick() {
      return getCurrentPath(path);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "material-icons"
  }, icon), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", null, " ", label, " "));
};

Option.propTypes = {
  label: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
  icon: propTypes.oneOf(ICONS).isRequired,
  getCurrentPath: propTypes.func.isRequired
};

var Menu = function Menu(_ref) {
  var options = _ref.options,
      _getCurrentPath = _ref.getCurrentPath;
  return /*#__PURE__*/React.createElement("div", {
    className: "container-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-primary"
  }, options.map(function (element, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: " size-3 padding-v-30 "
    }, /*#__PURE__*/React.createElement(Option, {
      label: element.name,
      path: element.path,
      icon: element.icon,
      getCurrentPath: function getCurrentPath(path) {
        return _getCurrentPath(path);
      }
    }));
  })));
};

Menu.propTypes = {
  options: propTypes.arrayOf(propTypes.shape({
    path: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
  })),
  getCurrentPath: propTypes.func.isRequired
};

var ImageButton = function ImageButton(_ref) {
  var id = _ref.id,
      text = _ref.text,
      icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE_CONTROL.MD : _ref$size,
      disabled = _ref.disabled,
      _onClick = _ref.onClick;

  var style = function style() {
    return "imageButton " + ternaryOperation(disabled, STYLE_STATUS_CONTROL.DISABLED, '');
  };

  return /*#__PURE__*/React.createElement("abbr", {
    title: text
  }, /*#__PURE__*/React.createElement("button", {
    className: style(),
    id: id,
    type: ternaryOperation(_onClick, 'button', 'submit'),
    name: id,
    disabled: disabled,
    onClick: function onClick(e) {
      if (!disabled) {
        _onClick(e);
      }
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size
  })));
};

ImageButton.propTypes = {
  id: propTypes.string.isRequired,
  text: propTypes.string,
  icon: propTypes.oneOf(ICONS).isRequired,
  size: propTypes.oneOf(jsonToArray(SIZE_CONTROL)),
  disabled: propTypes.bool,
  onClick: propTypes.func
};

var UI = {
  Button: Button,
  CheckButton: CheckButton,
  RadioButton: RadioButton,
  Selector: Selector,
  TextBox: TextBox,
  Title: Title,
  TextButton: TextButton,
  TextArea: TextArea,
  DatePicker: DatePicker,
  Modal: Modal,
  ModalNotifications: ModalNotifications,
  ModalHttpMessage: ModalHttpMessage,
  ModalViewerPDF: ModalViewerPDF,
  Icon: Icon,
  NavBar: NavBar,
  Option: Option,
  Menu: Menu,
  ImageButton: ImageButton,
  Spinner: Spinner
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

function useCamera() {
  var mediaRecorder = useRef();
  var mount = useRef(true);
  useEffect(function () {
    return function () {
      mount.current = false;
      console.log('un-mount');
    };
  }, []);

  var _useState = useState({
    mediaStream: null,
    mediaBlob: null,
    devices: [],
    log: []
  }),
      state = _useState[0],
      setstate = _useState[1];

  var getDevices = function getDevices(kind) {
    try {
      var _exit2 = false;

      var _temp3 = function _temp3(_result2) {
        return _exit2 ? _result2 : [];
      };

      var _temp4 = _catch(function () {
        if (state.devices.length <= 0) {
          return Promise.resolve(navigator.mediaDevices.enumerateDevices()).then(function (res) {
            if (mount.current) {
              setstate(_extends({}, state, {
                devices: res
              }));
              _exit2 = true;
              return res.filter(function (element) {
                return element.kind === kind;
              });
            }
          });
        } else {
          _exit2 = true;
          return state.devices.filter(function (element) {
            return element.kind === kind;
          });
        }
      }, function (err) {
        console.log(err);
      });

      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var outputFormatVideos = [{
    key: 'video/webm;codecs=vp8,opus',
    value: 'WebM (.webm)'
  }, {
    key: 'video/mp4',
    value: 'MPEG-4 (.mp4)'
  }];

  var getVideoSource = function getVideoSource() {
    return Promise.resolve(getDevices('videoinput'));
  };

  var getAudioInputSource = function getAudioInputSource() {
    return Promise.resolve(getDevices('audioinput'));
  };

  var getAudioOutputDestination = function getAudioOutputDestination() {
    return Promise.resolve(getDevices('audiooutput'));
  };

  var POWER_OFF = 'Power OFF\n';
  var POWER_ON = 'Power ON\n';
  var CAMERA_OFF = 'Camera OFF!\n';
  var CAMERA_ON = 'Camera ON!\n';
  var RECORDING = 'Recording!\n';
  var NOT_RECORDING = 'Not recording!\n';
  var START_RECORDING = 'Start recording\n';
  var STOP_RECORDING = 'Stop recording\n';
  var CLEAR_VIDEO = 'Clear video\n';

  var getLog = function getLog(text) {
    var d = new Date();
    var value = d.toTimeString().substr(0, 8) + " - " + text;
    return [value].concat(state.log);
  };

  var validateOnCamera = function validateOnCamera() {
    if (state.mediaStream) {
      if (mount.current) {
        setstate(_extends({}, state, {
          log: getLog(CAMERA_ON)
        }));
      }

      console.log(CAMERA_ON);
      return true;
    }

    return false;
  };

  var validateOffCamera = function validateOffCamera() {
    if (!state.mediaStream) {
      if (mount.current) {
        setstate(_extends({}, state, {
          log: getLog(CAMERA_OFF)
        }));
      }

      console.log(CAMERA_OFF);
      return true;
    }

    return false;
  };

  var validateOnRecording = function validateOnRecording() {
    if (mediaRecorder && mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
      return true;
    } else {
      if (mount.current) {
        setstate(_extends({}, state, {
          log: getLog(NOT_RECORDING)
        }));
      }

      console.log(NOT_RECORDING);
      return false;
    }
  };

  var validateOffRecording = function validateOffRecording() {
    if (mediaRecorder && (!mediaRecorder.current || mediaRecorder.current.state === 'inactive')) {
      return true;
    } else {
      if (mount.current) {
        setstate(_extends({}, state, {
          log: getLog(RECORDING)
        }));
      }

      console.log(RECORDING);
      return false;
    }
  };

  var onCamera = function onCamera(requestedMedia) {
    try {
      var _exit4 = false;
      var on = validateOnCamera();

      var _temp6 = function () {
        if (!on) {
          return _catch(function () {
            return Promise.resolve(navigator.mediaDevices.getUserMedia(requestedMedia)).then(function (stream) {
              if (mount.current) {
                setstate(_extends({}, state, {
                  mediaBlob: null,
                  mediaStream: stream,
                  log: getLog(POWER_ON)
                }));
              }

              console.log(POWER_ON);
              _exit4 = true;
              return true;
            });
          }, function (err) {
            console.log(err);
          });
        }
      }();

      return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function (_result4) {
        return _exit4 ? _result4 : false;
      }) : _exit4 ? _temp6 : false);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var offCamera = function offCamera() {
    var off = validateOffCamera();

    if (!off) {
      try {
        state.mediaStream.getTracks().forEach(function (track) {
          track.stop();
        });

        if (mount.current) {
          setstate(_extends({}, state, {
            mediaStream: null,
            log: getLog(POWER_OFF)
          }));
        }

        console.log(POWER_OFF);
        return true;
      } catch (err) {
        console.log(err);
      }
    }

    return false;
  };

  var startRecording = function startRecording() {
    var off = validateOffCamera();

    if (!off) {
      var record = validateOffRecording();

      if (record) {
        mediaRecorder.current = new MediaRecorder(state.mediaStream);

        mediaRecorder.current.onerror = function (e) {
          console.log('error', e);
        };

        mediaRecorder.current.start();

        if (mount.current) {
          setstate(_extends({}, state, {
            mediaBlob: null,
            log: getLog(START_RECORDING)
          }));
        }

        console.log(START_RECORDING);
        return true;
      }
    }

    return false;
  };

  var stopRecording = function stopRecording(outputFormat) {
    var off = validateOffCamera();

    if (!off) {
      var record = validateOnRecording();

      if (record) {
        if (mediaRecorder.current.state !== 'inactive') {
          mediaRecorder.current.stop();
          state.mediaStream.current && state.mediaStream.current.getTracks().forEach(function (track) {
            return track.stop();
          });
        }

        mediaRecorder.current.ondataavailable = function (e) {
          var outFile = outputFormat ? new Blob([e.data], {
            type: outputFormat
          }) : e.data;

          if (mount.current) {
            setstate(_extends({}, state, {
              mediaBlob: outFile,
              log: getLog(STOP_RECORDING)
            }));
          }
        };

        console.log(STOP_RECORDING);
        return true;
      }
    }

    return false;
  };

  var removeMediaBlob = function removeMediaBlob() {
    if (mount.current) {
      setstate(_extends({}, state, {
        mediaBlob: null,
        log: getLog(CLEAR_VIDEO)
      }));
    }

    console.log(CLEAR_VIDEO);
    return true;
  };

  return {
    mediaStream: state.mediaStream,
    startRecording: startRecording,
    stopRecording: stopRecording,
    onCamera: onCamera,
    offCamera: offCamera,
    removeMediaBlob: removeMediaBlob,
    mediaBlob: state.mediaBlob,
    getVideoSource: getVideoSource,
    getAudioInputSource: getAudioInputSource,
    getAudioOutputDestination: getAudioOutputDestination,
    log: state.log,
    outputFormatVideos: outputFormatVideos,
    mount: mount,
    validateOnCamera: validateOnCamera,
    validateOffCamera: validateOffCamera,
    validateOnRecording: validateOnRecording,
    validateOffRecording: validateOffRecording
  };
}

var Button$1 = UI.Button;
var CheckButton$1 = UI.CheckButton;
var RadioButton$1 = UI.RadioButton;
var Selector$1 = UI.Selector;
var Spinner$1 = UI.Spinner;
var TextBox$1 = UI.TextBox;
var Title$1 = UI.Title;
var TextButton$1 = UI.TextButton;
var TextArea$1 = UI.TextArea;
var NavBar$1 = UI.NavBar;
var DatePicker$1 = UI.DatePicker;
var Modal$1 = UI.Modal;
var ModalNotifications$1 = UI.ModalNotifications;
var ModalHttpMessage$1 = UI.ModalHttpMessage;
var ModalViewerPDF$1 = UI.ModalViewerPDF;
var Icon$1 = UI.Icon;
var Menu$1 = UI.Menu;
var Option$1 = UI.Option;
var ImageButton$1 = UI.ImageButton;

export default UI;
export { Button$1 as Button, CONSTANT, CheckButton$1 as CheckButton, DatePicker$1 as DatePicker, Icon$1 as Icon, ImageButton$1 as ImageButton, Menu$1 as Menu, Modal$1 as Modal, ModalHttpMessage$1 as ModalHttpMessage, ModalNotifications$1 as ModalNotifications, ModalViewerPDF$1 as ModalViewerPDF, NavBar$1 as NavBar, Option$1 as Option, RadioButton$1 as RadioButton, Selector$1 as Selector, Spinner$1 as Spinner, TextArea$1 as TextArea, TextBox$1 as TextBox, TextButton$1 as TextButton, Title$1 as Title, funtions as functions, useCamera };
//# sourceMappingURL=index.modern.js.map
