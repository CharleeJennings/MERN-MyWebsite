/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-scroll-parallax/lib/components/Parallax.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/components/Parallax.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () {\n    function defineProperties(target, props) {\n        for (var i = 0; i < props.length; i++) {\n            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n        }\n    }return function (Constructor, protoProps, staticProps) {\n        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n    };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _propValidation = __webpack_require__(/*! ../utils/propValidation */ \"./node_modules/react-scroll-parallax/lib/utils/propValidation.js\");\n\nvar _ParallaxController = __webpack_require__(/*! ../libs/ParallaxController */ \"./node_modules/react-scroll-parallax/lib/libs/ParallaxController.js\");\n\nvar _ParallaxController2 = _interopRequireDefault(_ParallaxController);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n    if (!self) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Parallax = function (_Component) {\n    _inherits(Parallax, _Component);\n\n    function Parallax() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Parallax);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Parallax.__proto__ || Object.getPrototypeOf(Parallax)).call.apply(_ref, [this].concat(args))), _this), _this.mapRefOuter = function (ref) {\n            _this._outer = ref;\n        }, _this.mapRefInner = function (ref) {\n            _this._inner = ref;\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Parallax, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            // Make sure the provided controller is an instance of the Parallax Controller\n            var isInstance = this.controller instanceof _ParallaxController2.default;\n\n            // Throw if neither context or global is available\n            if (!this.controller && !isInstance) {\n                throw new Error(\"Must wrap your application's <Parallax /> components in a <ParallaxProvider />.\");\n            }\n\n            // Deprecation warning for <=1.0.0\n            // If no context is available but the window global is then warn\n            if (!this.context.parallaxController && window.ParallaxController) {\n                console.log('Calling ParallaxController.init() has been deprecated in favor of using the <ParallaxProvider /> component. For usage details see: https://github.com/jscottsmith/react-scroll-parallax/tree/v1.1.0#usage');\n            }\n\n            // create a new parallax element and save the reference\n            this.element = this.controller.createElement({\n                elInner: this._inner,\n                elOuter: this._outer,\n                props: {\n                    disabled: this.props.disabled,\n                    offsetXMax: this.props.offsetXMax,\n                    offsetXMin: this.props.offsetXMin,\n                    offsetYMax: this.props.offsetYMax,\n                    offsetYMin: this.props.offsetYMin,\n                    slowerScrollRate: this.props.slowerScrollRate\n                }\n            });\n        }\n    }, {\n        key: 'componentWillReceiveProps',\n        value: function componentWillReceiveProps(nextProps) {\n            // updates the elements props when relevant parallax props change\n            if (this.props.disabled !== nextProps.disabled || this.props.offsetXMax !== nextProps.offsetXMax || this.props.offsetXMin !== nextProps.offsetXMin || this.props.offsetYMax !== nextProps.offsetYMax || this.props.offsetYMin !== nextProps.offsetYMin || this.props.slowerScrollRate !== nextProps.slowerScrollRate) {\n                this.controller.updateElement(this.element, {\n                    props: {\n                        disabled: nextProps.disabled,\n                        offsetXMax: nextProps.offsetXMax,\n                        offsetXMin: nextProps.offsetXMin,\n                        offsetYMax: nextProps.offsetYMax,\n                        offsetYMin: nextProps.offsetYMin,\n                        slowerScrollRate: nextProps.slowerScrollRate\n                    }\n                });\n            }\n            // resets element styles when disabled\n            if (this.props.disabled !== nextProps.disabled && nextProps.disabled) {\n                this.controller.resetElementStyles(this.element);\n            }\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            this.controller.removeElement(this.element);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _props = this.props,\n                children = _props.children,\n                className = _props.className,\n                Tag = _props.tag,\n                styleOuter = _props.styleOuter,\n                styleInner = _props.styleInner;\n\n            var rootClass = 'parallax-outer' + (className ? ' ' + className : '');\n\n            return _react2.default.createElement(Tag, {\n                className: rootClass,\n                ref: this.mapRefOuter,\n                style: styleOuter\n            }, _react2.default.createElement('div', {\n                className: 'parallax-inner',\n                ref: this.mapRefInner,\n                style: styleInner\n            }, children));\n        }\n    }, {\n        key: 'controller',\n        get: function get() {\n            // Legacy versions may use the global, not context\n            return this.context.parallaxController || window.ParallaxController;\n        }\n\n        // refs\n\n    }]);\n\n    return Parallax;\n}(_react.Component);\n\nParallax.defaultProps = {\n    disabled: false,\n    offsetYMax: 0,\n    offsetYMin: 0,\n    offsetXMax: 0,\n    offsetXMin: 0,\n    slowerScrollRate: false, // determines whether scroll rate is faster or slower than standard scroll\n    tag: 'div'\n};\nParallax.propTypes = {\n    children: _propTypes2.default.node,\n    className: _propTypes2.default.string,\n    disabled: _propTypes2.default.bool.isRequired,\n    offsetXMax: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),\n    offsetXMin: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),\n    offsetYMax: _propValidation.offsetMax,\n    offsetYMin: _propValidation.offsetMin,\n    slowerScrollRate: _propTypes2.default.bool.isRequired,\n    styleOuter: _propTypes2.default.object,\n    styleInner: _propTypes2.default.object,\n    tag: _propTypes2.default.string.isRequired\n};\nParallax.contextTypes = {\n    parallaxController: _propTypes2.default.object // not required because this could be rendered on the server.\n};\nexports.default = Parallax;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/components/Parallax.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/components/ParallaxBanner.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/components/ParallaxBanner.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n        var source = arguments[i];for (var key in source) {\n            if (Object.prototype.hasOwnProperty.call(source, key)) {\n                target[key] = source[key];\n            }\n        }\n    }return target;\n};\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Parallax = __webpack_require__(/*! ./Parallax */ \"./node_modules/react-scroll-parallax/lib/components/Parallax.js\");\n\nvar _Parallax2 = _interopRequireDefault(_Parallax);\n\nvar _propValidation = __webpack_require__(/*! ../utils/propValidation */ \"./node_modules/react-scroll-parallax/lib/utils/propValidation.js\");\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar constainerStyle = {\n    position: 'relative',\n    overflow: 'hidden',\n    width: '100%',\n    height: '50vh'\n};\n\nvar absoluteStyle = {\n    position: 'absolute',\n    top: 0,\n    right: 0,\n    bottom: 0,\n    left: 0\n};\n\nvar ParallaxBanner = function ParallaxBanner(_ref) {\n    var children = _ref.children,\n        className = _ref.className,\n        layers = _ref.layers,\n        style = _ref.style,\n        disabled = _ref.disabled;\n\n    return _react2.default.createElement('div', {\n        style: _extends({}, constainerStyle, style),\n        className: 'parallax-banner' + (className ? ' ' + className : '')\n    }, layers.map(function (_ref2, i) {\n        var image = _ref2.image,\n            amount = _ref2.amount,\n            slowerScrollRate = _ref2.slowerScrollRate,\n            children = _ref2.children,\n            _ref2$expanded = _ref2.expanded,\n            expanded = _ref2$expanded === undefined ? true : _ref2$expanded;\n\n        // if this is an expanded layer overwrite the top/bottom styles with negative margins\n        var expandedStyle = expanded ? {\n            top: amount * 100 * -1 + '%',\n            bottom: amount * 100 * -1 + '%'\n        } : {};\n\n        return _react2.default.createElement(_Parallax2.default, {\n            key: 'layer-' + i,\n            offsetYMax: amount * 100 + '%',\n            offsetYMin: amount * -1 * 100 + '%',\n            slowerScrollRate: slowerScrollRate,\n            styleInner: absoluteStyle,\n            styleOuter: absoluteStyle,\n            disabled: disabled\n        }, image ? _react2.default.createElement('div', {\n            className: 'parallax-banner-layer-' + i,\n            style: _extends({\n                backgroundImage: 'url(' + image + ')',\n                backgroundPosition: 'center',\n                backgroundSize: 'cover'\n            }, absoluteStyle, expandedStyle)\n        }) : _react2.default.createElement('div', {\n            className: 'parallax-banner-layer-' + i,\n            style: _extends({}, absoluteStyle, expandedStyle)\n        }, children));\n    }), children);\n};\n\nParallaxBanner.defaultProps = {\n    disabled: false\n};\n\nParallaxBanner.propTypes = {\n    className: _propTypes2.default.string,\n    children: _propTypes2.default.node,\n    disabled: _propTypes2.default.bool.isRequired,\n    layers: _propTypes2.default.arrayOf(_propTypes2.default.shape({\n        amount: _propTypes2.default.number.isRequired,\n        children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),\n        expanded: _propTypes2.default.bool,\n        image: _propTypes2.default.string,\n        slowerScrollRate: _propTypes2.default.bool\n    })),\n    style: _propTypes2.default.object\n};\n\nexports.default = ParallaxBanner;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/components/ParallaxBanner.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/components/ParallaxProvider.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/components/ParallaxProvider.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () {\n    function defineProperties(target, props) {\n        for (var i = 0; i < props.length; i++) {\n            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n        }\n    }return function (Constructor, protoProps, staticProps) {\n        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n    };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _ParallaxController = __webpack_require__(/*! ../libs/ParallaxController */ \"./node_modules/react-scroll-parallax/lib/libs/ParallaxController.js\");\n\nvar _ParallaxController2 = _interopRequireDefault(_ParallaxController);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n    if (!self) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar ParallaxProvider = function (_Component) {\n    _inherits(ParallaxProvider, _Component);\n\n    function ParallaxProvider() {\n        _classCallCheck(this, ParallaxProvider);\n\n        return _possibleConstructorReturn(this, (ParallaxProvider.__proto__ || Object.getPrototypeOf(ParallaxProvider)).apply(this, arguments));\n    }\n\n    _createClass(ParallaxProvider, [{\n        key: 'getChildContext',\n        value: function getChildContext() {\n            // Passes down the reference to the controller\n            var parallaxController = this.parallaxController;\n\n            return { parallaxController: parallaxController };\n        }\n    }, {\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            // Don't initialize on the server\n            var isServer = typeof window === 'undefined';\n\n            if (!isServer) {\n                // Must not be the server so kick it off...\n                this.parallaxController = _ParallaxController2.default.init();\n            }\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            this.parallaxController = this.parallaxController.destroy();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var children = this.props.children;\n\n            return children;\n        }\n    }]);\n\n    return ParallaxProvider;\n}(_react.Component);\n\nParallaxProvider.propTypes = {\n    children: _propTypes2.default.node.isRequired\n};\nParallaxProvider.childContextTypes = {\n    parallaxController: _propTypes2.default.object\n};\nexports.default = ParallaxProvider;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/components/ParallaxProvider.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ParallaxController = exports.ParallaxBanner = exports.ParallaxProvider = exports.Parallax = undefined;\n\nvar _Parallax2 = __webpack_require__(/*! ./components/Parallax */ \"./node_modules/react-scroll-parallax/lib/components/Parallax.js\");\n\nvar _Parallax3 = _interopRequireDefault(_Parallax2);\n\nvar _ParallaxProvider2 = __webpack_require__(/*! ./components/ParallaxProvider */ \"./node_modules/react-scroll-parallax/lib/components/ParallaxProvider.js\");\n\nvar _ParallaxProvider3 = _interopRequireDefault(_ParallaxProvider2);\n\nvar _ParallaxBanner2 = __webpack_require__(/*! ./components/ParallaxBanner */ \"./node_modules/react-scroll-parallax/lib/components/ParallaxBanner.js\");\n\nvar _ParallaxBanner3 = _interopRequireDefault(_ParallaxBanner2);\n\nvar _ParallaxController2 = __webpack_require__(/*! ./libs/ParallaxController */ \"./node_modules/react-scroll-parallax/lib/libs/ParallaxController.js\");\n\nvar _ParallaxController3 = _interopRequireDefault(_ParallaxController2);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.Parallax = _Parallax3.default;\nexports.ParallaxProvider = _ParallaxProvider3.default;\nexports.ParallaxBanner = _ParallaxBanner3.default;\nexports.ParallaxController = _ParallaxController3.default;\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/index.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/libs/ParallaxController.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/libs/ParallaxController.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n        var source = arguments[i];for (var key in source) {\n            if (Object.prototype.hasOwnProperty.call(source, key)) {\n                target[key] = source[key];\n            }\n        }\n    }return target;\n};\n\nvar _index = __webpack_require__(/*! ../utils/index */ \"./node_modules/react-scroll-parallax/lib/utils/index.js\");\n\nfunction _toConsumableArray(arr) {\n    if (Array.isArray(arr)) {\n        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {\n            arr2[i] = arr[i];\n        }return arr2;\n    } else {\n        return Array.from(arr);\n    }\n}\n\n/**\n * -------------------------------------------------------\n * Parallax Controller\n * -------------------------------------------------------\n *\n * The global controller for setting up window scroll/resize\n * listeners, managing and caching parallax element positions,\n * determining which elements are inside the viewport based on\n * scroll position, and then updating parallax element styles\n * based on min/max offsets and current scroll position.\n *\n */\nfunction ParallaxController() {\n    // All parallax elements to be updated\n    var elements = [];\n\n    // Tracks current scroll y distance\n    var scrollY = 0;\n\n    // Window inner height\n    var windowHeight = 0;\n\n    // ID to increment for elements\n    var id = 0;\n\n    // Ticking\n    var ticking = false;\n\n    // Scroll direction\n    // let scrollDown = null;\n\n    // Passive support\n    var supportsPassive = (0, _index.testForPassiveScroll)();\n\n    function _addListeners() {\n        window.addEventListener('scroll', _handleScroll, supportsPassive ? { passive: true } : false);\n        window.addEventListener('resize', _handleResize, false);\n    }\n\n    function _removeListeners() {\n        window.removeEventListener('scroll', _handleScroll, supportsPassive ? { passive: true } : false);\n        window.removeEventListener('resize', _handleResize, false);\n    }\n\n    _addListeners();\n\n    /**\n     * Window scroll handler. Sets the 'scrollY'\n     * and then calls '_updateElementPositions()'.\n     */\n    function _handleScroll() {\n        // reference to prev scroll y\n        // const prevScrollY = scrollY;\n\n        // Save current scroll\n        scrollY = window.pageYOffset; // Supports IE 9 and up.\n\n        // direction\n        // scrollDown = scrollY > prevScrollY;\n\n        // Only called if the last animation request has been\n        // completed and there are parallax elements to update\n        if (!ticking && elements.length > 0) {\n            ticking = true;\n            window.requestAnimationFrame(_updateElementPositions);\n        }\n    }\n\n    /**\n     * Window resize handler. Sets the new window inner height\n     * then updates parallax element attributes and positions.\n     */\n    function _handleResize() {\n        _setWindowHeight();\n        _updateElementAttributes();\n        _updateElementPositions();\n    }\n\n    /**\n     * Creates a unique id to distinguish parallax elements.\n     * @return {Number}\n     */\n    function _createID() {\n        ++id;\n        return id;\n    }\n\n    /**\n     * Update element positions.\n     * Determines if the element is in view based on the cached\n     * attributes, if so set the elements parallax styles.\n     */\n    function _updateElementPositions() {\n        elements.forEach(function (element) {\n            if (element.props.disabled) return;\n\n            // check if the element is in view then\n            var isInView = (0, _index.isElementInView)(element, windowHeight, scrollY);\n\n            // set styles if it is\n            if (isInView) _setParallaxStyles(element);\n\n            // reset ticking so more animations can be called\n            ticking = false;\n        });\n    }\n\n    /**\n     * Update element attributes.\n     * Sets up the elements offsets based on the props passed from\n     * the component then caches the elements current position and\n     * other important attributes.\n     */\n    function _updateElementAttributes() {\n        elements.forEach(function (element) {\n            if (element.props.disabled) return;\n\n            _setupOffsets(element);\n\n            _cacheAttributes(element);\n        });\n    }\n\n    /**\n     * Remove parallax styles from all elements.\n     */\n    function _removeParallaxStyles() {\n        elements.forEach(function (element) {\n            _resetStyles(element);\n        });\n    }\n\n    /**\n     * Cache the window height.\n     */\n    function _setWindowHeight() {\n        var html = document.documentElement;\n        windowHeight = window.innerHeight || html.clientHeight;\n    }\n\n    /**\n     * Takes a parallax element and caches important values that\n     * cause layout reflow and paints. Stores the values as an\n     * attribute object accesible on the parallax element.\n     * @param {object} element\n     */\n    function _cacheAttributes(element) {\n        var _element$offsets = element.offsets,\n            yMin = _element$offsets.yMin,\n            yMax = _element$offsets.yMax,\n            xMax = _element$offsets.xMax,\n            xMin = _element$offsets.xMin;\n        var slowerScrollRate = element.props.slowerScrollRate;\n\n        // NOTE: Many of these cause layout and reflow so we're not\n        // calculating them on every frame -- instead these values\n        // are cached on the element to access later when determining\n        // the element's position and offset.\n\n        var el = element.elOuter;\n        var rect = el.getBoundingClientRect();\n        var elHeight = el.offsetHeight;\n        var elWidth = el.offsetWidth;\n        var scrollY = window.pageYOffset;\n\n        // NOTE: offsetYMax and offsetYMin are percents\n        // based of the height of the element. They must be\n        // calculated as px to correctly determine whether\n        // the element is in the viewport.\n        var yPercent = yMax.unit === '%' || yMin.unit === '%';\n        var xPercent = xMax.unit === '%' || xMin.unit === '%';\n\n        // X offsets\n        var yMinPx = yMin.value;\n        var yMaxPx = yMax.value;\n\n        if (yPercent) {\n            var h100 = elHeight / 100;\n            yMaxPx = yMax.value * h100;\n            yMinPx = yMin.value * h100; // negative value\n        }\n\n        // Y offsets\n        var xMinPx = xMax.value;\n        var xMaxPx = xMin.value;\n\n        if (xPercent) {\n            var w100 = elWidth / 100;\n            xMaxPx = xMax.value * w100;\n            xMinPx = xMin.value * w100; // negative value\n        }\n\n        // NOTE: must add the current scroll position when the\n        // element is checked so that we get its absolute position\n        // relative to the document and not the viewport then\n        // add the min/max offsets calculated above.\n        var top = 0;\n        var bottom = 0;\n\n        if (slowerScrollRate) {\n            top = rect.top + scrollY + yMinPx;\n            bottom = rect.bottom + scrollY + yMaxPx;\n        } else {\n            top = rect.top + scrollY + yMaxPx * -1;\n            bottom = rect.bottom + scrollY + yMinPx * -1;\n        }\n\n        // NOTE: Total distance the element will move from when\n        // the top enters the view to the bottom leaving\n        // accounting for elements height and max/min offsets.\n        var totalDist = windowHeight + (elHeight + Math.abs(yMinPx) + yMaxPx);\n\n        element.attributes = {\n            top: top,\n            bottom: bottom,\n            elHeight: elHeight,\n            elWidth: elWidth,\n            yMaxPx: yMaxPx,\n            yMinPx: yMinPx,\n            xMaxPx: xMaxPx,\n            xMinPx: xMinPx,\n            totalDist: totalDist\n        };\n    }\n\n    /**\n     * Takes a parallax element and parses the offset props to get the value\n     * and unit. Sets these values as offset object accessible on the element.\n     * @param {object} element\n     */\n    function _setupOffsets(element) {\n        var _element$props = element.props,\n            offsetYMin = _element$props.offsetYMin,\n            offsetYMax = _element$props.offsetYMax,\n            offsetXMax = _element$props.offsetXMax,\n            offsetXMin = _element$props.offsetXMin;\n\n        var yMin = (0, _index.parseValueAndUnit)(offsetYMin);\n        var yMax = (0, _index.parseValueAndUnit)(offsetYMax);\n        var xMin = (0, _index.parseValueAndUnit)(offsetXMax);\n        var xMax = (0, _index.parseValueAndUnit)(offsetXMin);\n\n        if (xMin.unit !== xMax.unit || yMin.unit !== yMax.unit) {\n            throw new Error('Must provide matching units for the min and max offset values of each axis.');\n        }\n\n        var xUnit = xMin.unit || '%';\n        var yUnit = yMin.unit || '%';\n\n        element.offsets = {\n            xUnit: xUnit,\n            yUnit: yUnit,\n            yMin: yMin,\n            yMax: yMax,\n            xMin: xMin,\n            xMax: xMax\n        };\n    }\n\n    /**\n     * Takes a parallax element and set the styles based on the\n     * offsets and percent the element has moved though the viewport.\n     * @param {object} element\n     */\n    function _setParallaxStyles(element) {\n        var top = element.attributes.top - scrollY;\n        var totalDist = element.attributes.totalDist;\n\n        // Percent the element has moved based on current and total distance to move\n\n        var percentMoved = (top * -1 + windowHeight) / totalDist * 100;\n\n        // Scale percentMoved to min/max percent determined by offset props\n        var slowerScrollRate = element.props.slowerScrollRate;\n\n        // Get the parallax X and Y offsets\n\n        var offsets = (0, _index.getParallaxOffsets)(element.offsets, percentMoved, slowerScrollRate);\n\n        // Apply styles\n        var el = element.elInner;\n\n        // prettier-ignore\n        el.style.transform = 'translate3d(' + offsets.x.value + offsets.x.unit + ', ' + offsets.y.value + offsets.y.unit + ', 0)';\n    }\n\n    /**\n     * Takes a parallax element and removes parallax offset styles.\n     * @param {object} element\n     */\n    function _resetStyles(element) {\n        var el = element.elInner;\n        el.style.transform = '';\n    }\n\n    /**\n     * -------------------------------------------------------\n     * Public methods\n     * -------------------------------------------------------\n     */\n\n    /**\n     * Gets the parallax elements in the controller\n     * @return {array} parallax elements\n     */\n    this.getElements = function () {\n        return elements;\n    };\n\n    /**\n     * Creates a new parallax element object with new id\n     * and options to store in the 'elements' array.\n     * @param {object} options\n     * @return {object} element\n     */\n    this.createElement = function (options) {\n        var id = _createID();\n        var newElement = _extends({\n            id: id\n        }, options);\n\n        var updatedElements = [].concat(_toConsumableArray(elements), [newElement]);\n        elements = updatedElements;\n        this.update();\n\n        return newElement;\n    };\n\n    /**\n     * Creates a new parallax element object with new id\n     * and options to store in the 'elements' array.\n     * @param {object} element\n     */\n    this.removeElement = function (element) {\n        var updatedElements = elements.filter(function (el) {\n            return el.id !== element.id;\n        });\n        elements = updatedElements;\n    };\n\n    /**\n     * Updates an existing parallax element object with new options.\n     * @param {object} element\n     * @param {object} options\n     */\n    this.updateElement = function (element, options) {\n        var updatedElements = elements.map(function (el) {\n            // create element with new options and replaces the old\n            if (el.id === element.id) {\n                // update props\n                el.props = options.props;\n            }\n            return el;\n        });\n\n        elements = updatedElements;\n\n        // call update to set attributes and positions based on the new options\n        this.update();\n    };\n\n    /**\n     * Remove element styles.\n     * @param {object} element\n     */\n    this.resetElementStyles = function (element) {\n        _resetStyles(element);\n    };\n\n    /**\n     * Updates all parallax element attributes and postitions.\n     */\n    this.update = function () {\n        _setWindowHeight();\n        _updateElementAttributes();\n        _updateElementPositions();\n    };\n\n    /**\n     * Removes listeners, reset all styles then nullifies the global ParallaxController.\n     */\n    this.destroy = function () {\n        _removeListeners();\n        _removeParallaxStyles();\n        window.ParallaxController = null;\n    };\n}\n\n/**\n * Static method to instantiate the ParallaxController.\n * Returns a new or existing instance of the ParallaxController.\n * @returns {Object} ParallaxController\n */\nParallaxController.init = function () {\n    var hasWindow = typeof window !== 'undefined';\n\n    if (!hasWindow) {\n        throw new Error('Looks like ParallaxController.init() was called on the server. This method must be called on the client.');\n    }\n\n    var controller = new ParallaxController();\n\n    // Keep global reference for legacy versions <= 1.1.0\n    if (hasWindow && !window.ParallaxController) {\n        window.ParallaxController = controller;\n    }\n\n    return controller;\n};\n\nexports.default = ParallaxController;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/libs/ParallaxController.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/utils/clamp.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/utils/clamp.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = clamp;\nfunction clamp(number, lower, upper) {\n    number = number <= upper ? number : upper;\n    number = number >= lower ? number : lower;\n    return number;\n}\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/utils/clamp.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/utils/getParallaxOffsets.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/utils/getParallaxOffsets.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = getParallaxOffsets;\n\nvar _index = __webpack_require__(/*! ./index */ \"./node_modules/react-scroll-parallax/lib/utils/index.js\");\n\n/**\n * Gets the parallax X and Y offsets to be applied to an element\n * based upon the percent the element has moved in the viewport\n * and the min/max offsets\n * @returns {Object}\n */\n\nfunction getParallaxOffsets(offsets, percentMoved, slowerScrollRate) {\n    var yMin = offsets.yMin,\n        yMax = offsets.yMax,\n        xMin = offsets.xMin,\n        xMax = offsets.xMax;\n\n    var yUnit = yMax.unit;\n    var xUnit = xMax.unit;\n\n    // sets parallax to faster or slower than the rate of scroll\n    var x = 0;\n    var y = 0;\n\n    if (slowerScrollRate) {\n        x = (0, _index.scaleBetween)(percentMoved, xMin.value, xMax.value, 0, 100);\n        y = (0, _index.scaleBetween)(percentMoved, yMin.value, yMax.value, 0, 100);\n    } else {\n        // flipped max/min\n        x = (0, _index.scaleBetween)(percentMoved, xMax.value, xMin.value, 0, 100);\n        y = (0, _index.scaleBetween)(percentMoved, yMax.value, yMin.value, 0, 100);\n    }\n\n    return {\n        x: {\n            value: x,\n            unit: xUnit\n        },\n        y: {\n            value: y,\n            unit: yUnit\n        }\n    };\n}\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/utils/getParallaxOffsets.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/utils/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/utils/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.testForPassiveScroll = exports.scaleBetween = exports.parseValueAndUnit = exports.isElementInView = exports.getParallaxOffsets = exports.clamp = undefined;\n\nvar _clamp2 = __webpack_require__(/*! ./clamp */ \"./node_modules/react-scroll-parallax/lib/utils/clamp.js\");\n\nvar _clamp3 = _interopRequireDefault(_clamp2);\n\nvar _getParallaxOffsets2 = __webpack_require__(/*! ./getParallaxOffsets */ \"./node_modules/react-scroll-parallax/lib/utils/getParallaxOffsets.js\");\n\nvar _getParallaxOffsets3 = _interopRequireDefault(_getParallaxOffsets2);\n\nvar _isElementInView2 = __webpack_require__(/*! ./isElementInView */ \"./node_modules/react-scroll-parallax/lib/utils/isElementInView.js\");\n\nvar _isElementInView3 = _interopRequireDefault(_isElementInView2);\n\nvar _parseValueAndUnit2 = __webpack_require__(/*! ./parseValueAndUnit */ \"./node_modules/react-scroll-parallax/lib/utils/parseValueAndUnit.js\");\n\nvar _parseValueAndUnit3 = _interopRequireDefault(_parseValueAndUnit2);\n\nvar _scaleBetween2 = __webpack_require__(/*! ./scaleBetween */ \"./node_modules/react-scroll-parallax/lib/utils/scaleBetween.js\");\n\nvar _scaleBetween3 = _interopRequireDefault(_scaleBetween2);\n\nvar _testForPassiveScroll2 = __webpack_require__(/*! ./testForPassiveScroll */ \"./node_modules/react-scroll-parallax/lib/utils/testForPassiveScroll.js\");\n\nvar _testForPassiveScroll3 = _interopRequireDefault(_testForPassiveScroll2);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.clamp = _clamp3.default;\nexports.getParallaxOffsets = _getParallaxOffsets3.default;\nexports.isElementInView = _isElementInView3.default;\nexports.parseValueAndUnit = _parseValueAndUnit3.default;\nexports.scaleBetween = _scaleBetween3.default;\nexports.testForPassiveScroll = _testForPassiveScroll3.default;\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/utils/index.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/utils/isElementInView.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/utils/isElementInView.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = isElementInView;\n/**\n * Takes a parallax element and returns whether the element\n * is in view based on the cached position of the element,\n * current scroll position and the window height.\n * @param {object} element\n * @return {boolean} isInView\n */\nfunction isElementInView(element, windowHeight, scrollY) {\n    var top = element.attributes.top - scrollY;\n    var bottom = element.attributes.bottom - scrollY;\n\n    var topInView = top >= 0 && top <= windowHeight;\n    var bottomInView = bottom >= 0 && bottom <= windowHeight;\n    var covering = top <= 0 && bottom >= windowHeight;\n\n    var isInView = topInView || bottomInView || covering;\n\n    return isInView;\n}\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/utils/isElementInView.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/utils/parseValueAndUnit.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/utils/parseValueAndUnit.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = parseValueAndUnit;\n/**\n * Determines the unit of a string and parses the value\n *\n * @param {string} str\n * @param {object} out\n * @return {object} The parsed value and the unit if any\n */\nfunction parseValueAndUnit(str) {\n    var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { value: 0, unit: 'px' };\n\n    var isValid = typeof str === 'number' || typeof str === 'string';\n\n    if (!isValid) {\n        throw new Error('Invalid value provided. Must provide a value as a string or number');\n    }\n\n    str = String(str);\n    out.value = parseFloat(str, 10);\n    out.unit = str.match(/[\\d.\\-\\+]*\\s*(.*)/)[1] || '%'; // default to percent\n\n    var validUnits = ['px', '%'];\n    var isValidUnit = validUnits.find(function (unit) {\n        return unit === out.unit;\n    });\n\n    if (!isValidUnit) {\n        throw new Error('Invalid unit provided. Must provide a unit of px in or %');\n    }\n\n    return out;\n}\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/utils/parseValueAndUnit.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/utils/propValidation.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/utils/propValidation.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.offsetMin = offsetMin;\nexports.offsetMax = offsetMax;\nfunction offsetMin(props, propName) {\n    var componentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ANONYMOUS';\n\n    var value = props[propName];\n    var isValid = typeof value === 'string' || typeof value === 'number';\n\n    if (!isValid) {\n        return new Error('[' + propName + '] in ' + componentName + ' must be a string with with \"%\"\" or \"px\" units or number.');\n    }\n\n    if (props[propName]) {\n        if (typeof value === 'string') {\n            value = parseInt(value, 10);\n        }\n        return value <= 0 ? null : new Error('[' + propName + '] in ' + componentName + ' is greater than zero. [' + propName + '] must be less than or equal to zero.');\n    }\n    return null;\n}\n\nfunction offsetMax(props, propName) {\n    var componentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ANONYMOUS';\n\n    var value = props[propName];\n    var isValid = typeof value === 'string' || typeof value === 'number';\n\n    if (!isValid) {\n        return new Error('[' + propName + '] in ' + componentName + ' must be a string with with \"%\"\" or \"px\" units or number.');\n    }\n\n    if (props[propName]) {\n        if (typeof value === 'string') {\n            value = parseInt(value, 10);\n        }\n        return value >= 0 ? null : new Error('[' + propName + '] in ' + componentName + ' is less than zero. [' + propName + '] must be greater than or equal to zero.');\n    }\n    return null;\n}\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/utils/propValidation.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/utils/scaleBetween.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/utils/scaleBetween.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = scaleBetween;\n// Scale between AKA normalize\nfunction scaleBetween(value, newMin, newMax, oldMin, oldMax) {\n    return (newMax - newMin) * (value - oldMin) / (oldMax - oldMin) + newMin;\n}\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/utils/scaleBetween.js?");

/***/ }),

/***/ "./node_modules/react-scroll-parallax/lib/utils/testForPassiveScroll.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/lib/utils/testForPassiveScroll.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = testForPassiveScroll;\nfunction testForPassiveScroll() {\n    var supportsPassiveOption = false;\n    try {\n        var opts = Object.defineProperty({}, 'passive', {\n            get: function get() {\n                supportsPassiveOption = true;\n            }\n        });\n        window.addEventListener('test', null, opts);\n        window.removeEventListener('test', null, opts);\n    } catch (e) {}\n    return supportsPassiveOption;\n}\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/react-scroll-parallax/lib/utils/testForPassiveScroll.js?");

/***/ }),

/***/ "./src/client/LandingPage.js":
/*!***********************************!*\
  !*** ./src/client/LandingPage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Background = __webpack_require__(/*! ./template/Background */ \"./src/client/template/Background.js\");\n\nvar _Background2 = _interopRequireDefault(_Background);\n\nvar _Foreground = __webpack_require__(/*! ./template/Foreground */ \"./src/client/template/Foreground.js\");\n\nvar _Foreground2 = _interopRequireDefault(_Foreground);\n\nvar _NavigationBar = __webpack_require__(/*! ./components/NavigationBar */ \"./src/client/components/NavigationBar.js\");\n\nvar _NavigationBar2 = _interopRequireDefault(_NavigationBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LandingPage = function (_React$Component) {\n\t_inherits(LandingPage, _React$Component);\n\n\tfunction LandingPage() {\n\t\t_classCallCheck(this, LandingPage);\n\n\t\treturn _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).apply(this, arguments));\n\t}\n\n\t_createClass(LandingPage, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(_NavigationBar2.default, null),\n\t\t\t\t_react2.default.createElement(_Background2.default, null),\n\t\t\t\t_react2.default.createElement(_Foreground2.default, null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn LandingPage;\n}(_react2.default.Component);\n\nexports.default = LandingPage;\n\n//# sourceURL=webpack:///./src/client/LandingPage.js?");

/***/ }),

/***/ "./src/client/Resume.js":
/*!******************************!*\
  !*** ./src/client/Resume.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Resume = function (_React$Component) {\n  _inherits(Resume, _React$Component);\n\n  function Resume() {\n    _classCallCheck(this, Resume);\n\n    return _possibleConstructorReturn(this, (Resume.__proto__ || Object.getPrototypeOf(Resume)).apply(this, arguments));\n  }\n\n  _createClass(Resume, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'h1',\n        null,\n        ' This is the resume page '\n      );\n    }\n  }]);\n\n  return Resume;\n}(_react2.default.Component);\n\nexports.default = Resume;\n\n//# sourceURL=webpack:///./src/client/Resume.js?");

/***/ }),

/***/ "./src/client/components/About.js":
/*!****************************************!*\
  !*** ./src/client/components/About.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar React = _interopRequireWildcard(_react);\n\n__webpack_require__(/*! ../static/css/About.css */ \"./src/client/static/css/About.css\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar About = function (_React$Component) {\n  _inherits(About, _React$Component);\n\n  function About(props) {\n    _classCallCheck(this, About);\n\n    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));\n\n    _this.state = { height: screen.height };\n    _this.updateHeight = _this.updateHeight.bind(_this);\n    return _this;\n  }\n\n  _createClass(About, [{\n    key: 'updateHeight',\n    value: function updateHeight() {\n      this.setState({ height: screen.height });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      window.addEventListener(\"resize\", this.updateHeight);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var windowHeight = screen.height;\n      return React.createElement(\n        'div',\n        { style: { top: this.state.height + 'px' }, className: 'container-fluid', id: 'aboutBg' },\n        React.createElement(\n          'h1',\n          { className: 'yellowtail' },\n          React.createElement(\n            'u',\n            null,\n            'About'\n          )\n        ),\n        React.createElement(\n          'p',\n          { className: 'raleway' },\n          'My name is Charles Lee Jennings.',\n          React.createElement('br', null),\n          'I was born and raised in Birmingham, Alabama. I attended Shades Valley High School and graduated in 2013 with an Engineering Technical Diploma. After graduation, I attended summer classes at Lawson State Community College then transferrd to Auburn University in Montgomery. I stayed at AUM for one year then transferrd to Auburn. I graduated with a degree Software Engineering in the Fall of 2017. Now I develop website for clients and work for Apple as a Technial Advisor. Feel free to contact me if you have any questions or would like to have a website deployed.'\n        )\n      );\n    }\n  }]);\n\n  return About;\n}(React.Component);\n\nexports.default = About;\n\n//# sourceURL=webpack:///./src/client/components/About.js?");

/***/ }),

/***/ "./src/client/components/Banner.js":
/*!*****************************************!*\
  !*** ./src/client/components/Banner.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../static/css/Banner.scss */ \"./src/client/static/css/Banner.scss\");\n\nvar _animejs = __webpack_require__(/*! animejs */ \"animejs\");\n\nvar _animejs2 = _interopRequireDefault(_animejs);\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n\nvar _reactScrollParallax = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/lib/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Banner = function (_React$Component) {\n  _inherits(Banner, _React$Component);\n\n  function Banner() {\n    _classCallCheck(this, Banner);\n\n    return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));\n  }\n\n  _createClass(Banner, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var name = (0, _animejs2.default)({\n\n        targets: '#nameTag',\n        opacity: 1,\n        delay: 7000,\n        easing: 'easeInOutSine'\n      });\n\n      var scroll = (0, _animejs2.default)({\n        targets: '#tag',\n        translateY: 50,\n        loop: true,\n        direction: 'alternate',\n        easing: 'easeInOutQuart',\n        duration: 500\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var windowHeight = screen.height + 200;\n      var windowWidth = screen.width;\n      return _react2.default.createElement(\n        _reactScrollParallax.ParallaxProvider,\n        null,\n        _react2.default.createElement(\n          _reactScrollParallax.Parallax,\n          {\n            offsetYMax: 20,\n            offsetYMin: -20,\n            slowerScrollRate: true,\n            tag: 'figure' },\n          _react2.default.createElement('img', { className: 'Hawaii', src: './images/JPG/DSC_0805.jpg', style: { height: windowHeight + 'px' } })\n        )\n      );\n    }\n  }]);\n\n  return Banner;\n}(_react2.default.Component);\n\nexports.default = Banner;\n\n//# sourceURL=webpack:///./src/client/components/Banner.js?");

/***/ }),

/***/ "./src/client/components/Contact.js":
/*!******************************************!*\
  !*** ./src/client/components/Contact.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Questions = function Questions() {\n  return _react2.default.createElement(\n    _reactstrap.Col,\n    { lg: '6', xs: '12', sm: '6' },\n    _react2.default.createElement(\n      'h1',\n      null,\n      'Questions?'\n    ),\n    _react2.default.createElement(\n      'form',\n      { onSubmit: undefined.handleSubmit },\n      _react2.default.createElement(\n        _reactstrap.Row,\n        null,\n        _react2.default.createElement(\n          _reactstrap.Col,\n          { lg: 'auto', sm: '12', md: '12' },\n          _react2.default.createElement(\n            'div',\n            { id: 'name' },\n            _react2.default.createElement(\n              'label',\n              { className: 'raleway' },\n              'Name: '\n            ),\n            _react2.default.createElement('input', { placeholder: 'Your Name', type: 'text', name: 'name', value: undefined.state.name, onChange: undefined.handleChange.bind(undefined) })\n          )\n        ),\n        _react2.default.createElement(\n          _reactstrap.Col,\n          { lg: 'auto', sm: '12', md: '12' },\n          _react2.default.createElement(\n            'label',\n            { className: 'raleway' },\n            'Comment: '\n          ),\n          _react2.default.createElement('input', { placeholder: 'Awesome Website!', id: 'comment', name: 'comment', type: 'text', value: undefined.state.comment, onChange: undefined.handleChange.bind(undefined) })\n        ),\n        _react2.default.createElement(\n          _reactstrap.Col,\n          null,\n          _react2.default.createElement('input', { type: 'submit' })\n        )\n      )\n    )\n  );\n};\n\nvar Social = function Social() {\n  return _react2.default.createElement(\n    'div',\n    { className: 'container-fluid' },\n    ' ',\n    _react2.default.createElement(\n      _reactstrap.Row,\n      { id: 'Social' },\n      ' ',\n      _react2.default.createElement(\n        _reactstrap.Col,\n        null,\n        'Twitter'\n      ),\n      ' ',\n      _react2.default.createElement(\n        _reactstrap.Col,\n        null,\n        'Instagram'\n      ),\n      ' ',\n      _react2.default.createElement(\n        _reactstrap.Col,\n        null,\n        'LinkedIn'\n      ),\n      '  ',\n      _react2.default.createElement(\n        _reactstrap.Col,\n        null,\n        'Snapchat'\n      ),\n      ' '\n    ),\n    ' '\n  );\n};\n\nvar Contact = function (_React$Component) {\n  _inherits(Contact, _React$Component);\n\n  function Contact(props) {\n    _classCallCheck(this, Contact);\n\n    var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));\n\n    _this.state = {\n      name: \"\",\n      comment: \"\"\n    };\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    return _this;\n  }\n\n  _createClass(Contact, [{\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n\n      event.preventDefault();\n    }\n  }, {\n    key: 'handleChange',\n    value: function handleChange(event) {\n\n      var value = event.target.value;\n      var name = event.target.name;\n\n      this.setState(_defineProperty({}, name, value));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { id: 'Footer' },\n        _react2.default.createElement(\n          'div',\n          { className: 'container-fluid', id: 'Contact' },\n          _react2.default.createElement(\n            _reactstrap.Row,\n            null,\n            _react2.default.createElement(\n              _reactstrap.Col,\n              { lg: '6', xs: '12', sm: '6' },\n              _react2.default.createElement(\n                'h1',\n                null,\n                'Contact:'\n              ),\n              _react2.default.createElement(\n                'div',\n                { id: 'ref' },\n                _react2.default.createElement(\n                  'a',\n                  { href: 'mailto:CharlesJenn39@gmail.com', className: 'raleway' },\n                  'Email: CharlesJenn39@gmail.com '\n                ),\n                _react2.default.createElement(\n                  'h3',\n                  { className: 'raleway' },\n                  ' Phone: (205)-914-5430 '\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(Social, null)\n      );\n    }\n  }]);\n\n  return Contact;\n}(_react2.default.Component);\n\nexports.default = Contact;\n\n//# sourceURL=webpack:///./src/client/components/Contact.js?");

/***/ }),

/***/ "./src/client/components/Education.js":
/*!********************************************!*\
  !*** ./src/client/components/Education.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Education = function (_React$Component) {\n  _inherits(Education, _React$Component);\n\n  function Education() {\n    _classCallCheck(this, Education);\n\n    return _possibleConstructorReturn(this, (Education.__proto__ || Object.getPrototypeOf(Education)).apply(this, arguments));\n  }\n\n  _createClass(Education, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'container-fluid', id: 'educationBg' },\n        _react2.default.createElement(\n          'h1',\n          { className: ' yellowtail container-fluid' },\n          _react2.default.createElement(\n            'u',\n            null,\n            'Education'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'container-fluid ' },\n          _react2.default.createElement(\n            _reactstrap.Row,\n            { id: 'schools', className: 'justify-content-center' },\n            _react2.default.createElement(\n              _reactstrap.Col,\n              { lg: 'auto', sm: 'auto', md: 'auto', xs: 'auto' },\n              _react2.default.createElement('img', { id: 'schoolImg', src: \"./images/PNG/Lawson emblem.png\" }),\n              _react2.default.createElement(\n                'h5',\n                { className: 'raleway' },\n                'Lawson State'\n              )\n            ),\n            _react2.default.createElement(\n              _reactstrap.Col,\n              { lg: 'auto', sm: 'auto', md: 'auto', xs: 'auto' },\n              _react2.default.createElement('img', { id: 'schoolImg', src: \"./images/PNG/Auburn mascot.png\" }),\n              _react2.default.createElement(\n                'h5',\n                { className: 'raleway' },\n                'Auburn University'\n              )\n            ),\n            _react2.default.createElement(\n              _reactstrap.Col,\n              { lg: 'auto', sm: 'auto', md: 'auto', xs: 'auto' },\n              _react2.default.createElement('img', { id: 'schoolImgAum', src: \"./images/PNG/AUM emblem.png\" }),\n              _react2.default.createElement(\n                'h5',\n                { className: 'raleway' },\n                'Auburn in Montgomery'\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Education;\n}(_react2.default.Component);\n\nexports.default = Education;\n\n//# sourceURL=webpack:///./src/client/components/Education.js?");

/***/ }),

/***/ "./src/client/components/NavigationBar.js":
/*!************************************************!*\
  !*** ./src/client/components/NavigationBar.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar React = _interopRequireWildcard(_react);\n\n__webpack_require__(/*! ../static/css/Font.css */ \"./src/client/static/css/Font.css\");\n\nvar _Splashpage = __webpack_require__(/*! ./Splashpage */ \"./src/client/components/Splashpage.js\");\n\nvar _Splashpage2 = _interopRequireDefault(_Splashpage);\n\n__webpack_require__(/*! ../static/css/splashpage.css */ \"./src/client/static/css/splashpage.css\");\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NavigationBar = function (_React$Component) {\n  _inherits(NavigationBar, _React$Component);\n\n  function NavigationBar(props) {\n    _classCallCheck(this, NavigationBar);\n\n    var _this = _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this, props));\n\n    _this.toggle = _this.toggle.bind(_this);\n    _this.state = {\n      isOpen: false\n    };\n    return _this;\n  }\n\n  _createClass(NavigationBar, [{\n    key: 'handleScroll',\n    value: function handleScroll() {}\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      window.addEventListener('scroll', this.handleScroll);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      window.removeEventListener('scroll', this.handleScroll);\n    }\n  }, {\n    key: 'toggle',\n    value: function toggle() {\n      this.setState({\n        isOpen: !this.state.isOpen\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        _reactstrap.Navbar,\n        { fixed: 'top', dark: true, expand: 'md' },\n        React.createElement(_reactstrap.NavbarBrand, { href: '/' }),\n        React.createElement(_reactstrap.NavbarToggler, { onClick: this.toggle }),\n        React.createElement(\n          _reactstrap.Collapse,\n          { isOpen: this.state.isOpen, navbar: true },\n          React.createElement(\n            _reactstrap.Nav,\n            { className: 'ml-auto', navbar: true },\n            React.createElement(\n              _reactstrap.NavItem,\n              null,\n              React.createElement(\n                _reactstrap.NavLink,\n                { href: '/Resume', id: 'navbarLinks' },\n                'Resume'\n              )\n            ),\n            React.createElement(\n              _reactstrap.NavItem,\n              null,\n              React.createElement(\n                _reactstrap.NavLink,\n                { href: '#Contact', id: 'navbarLinks' },\n                ' Contact '\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NavigationBar;\n}(React.Component);\n\nexports.default = NavigationBar;\n\n//# sourceURL=webpack:///./src/client/components/NavigationBar.js?");

/***/ }),

/***/ "./src/client/components/Splashpage.js":
/*!*********************************************!*\
  !*** ./src/client/components/Splashpage.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar React = _interopRequireWildcard(_react);\n\nvar _animejs = __webpack_require__(/*! animejs */ \"animejs\");\n\nvar _animejs2 = _interopRequireDefault(_animejs);\n\n__webpack_require__(/*! ../static/css/splashpage.css */ \"./src/client/static/css/splashpage.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Splashscreen = function (_React$Component) {\n  _inherits(Splashscreen, _React$Component);\n\n  function Splashscreen(props) {\n    _classCallCheck(this, Splashscreen);\n\n    return _possibleConstructorReturn(this, (Splashscreen.__proto__ || Object.getPrototypeOf(Splashscreen)).call(this, props));\n  }\n\n  _createClass(Splashscreen, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n\n      var basicTimeline = _animejs2.default.timeline();\n\n      basicTimeline.add({\n        targets: '#lineDrawing path',\n        strokeDashoffset: [_animejs2.default.setDashoffset, 0],\n        easing: 'easeInOutSine',\n        duration: 2000,\n        delay: function delay(el, i) {\n          return i * 800;\n        },\n        direction: \"forward\"\n      }).add({\n\n        targets: '#lineDrawing svg',\n        top: 0,\n        left: 0,\n        scale: .25,\n        delay: 0,\n        duration: 2000,\n        easing: 'easeInOutQuart'\n\n      }).add({\n\n        targets: '#background',\n        opacity: 0,\n        duration: 2000,\n        delay: 0\n\n      }).add({\n\n        targets: '#background',\n        top: -3000,\n        duration: 1\n\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n\n      return React.createElement(\n        'div',\n        null,\n        React.createElement('div', { id: 'background' }),\n        React.createElement(\n          'div',\n          { id: 'lineDrawing' },\n          React.createElement(\n            'svg',\n            { style: { left: '45%' }, width: '155', height: '191', xmlns: 'http://www.w3.org/2000/svg' },\n            React.createElement(\n              'g',\n              { stroke: '#FFF', 'class': 'lines', strokeWidth: '3', fill: 'none', fillRule: 'evenodd', 'stroke-linecap': 'square' },\n              React.createElement('path', { d: 'M2 44v118.147l65.857 26.167v-30.85l-41.721-16.517V96.173l41.721 14.393V68.265z' }),\n              React.createElement('path', { d: 'M68.665 188.073l9.46-4.113 5.648-2.456v-27.925L40 137.829v-36.467M68.302 110.273l15.754-6.977V63.224L23.2 40 2 43.503M27.5 140.5l13-2' }),\n              React.createElement('path', { d: 'M67.703 157.84l47.498-13.593V36.842l37.25 3.495V15.962L46.87 2.679v26.54l37.572 4.871v30.894M38.5 37.5l8-8' }),\n              React.createElement('path', { d: 'M67.472 55.636V43.808L36.317 38.85 37.7 7.16l7.565-4.265M115.814 48.578l30.647 2.748 6.006-9.852M67.5 44.5l15-9M68.5 68.5l14-5' })\n            )\n          ),\n          '  '\n        )\n      );\n    }\n  }]);\n\n  return Splashscreen;\n}(React.Component);\n\nexports.default = Splashscreen;\n\n//# sourceURL=webpack:///./src/client/components/Splashpage.js?");

/***/ }),

/***/ "./src/client/static/css/About.css":
/*!*****************************************!*\
  !*** ./src/client/static/css/About.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/static/css/About.css?");

/***/ }),

/***/ "./src/client/static/css/Banner.scss":
/*!*******************************************!*\
  !*** ./src/client/static/css/Banner.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/static/css/Banner.scss?");

/***/ }),

/***/ "./src/client/static/css/Body.css":
/*!****************************************!*\
  !*** ./src/client/static/css/Body.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/static/css/Body.css?");

/***/ }),

/***/ "./src/client/static/css/Contact.css":
/*!*******************************************!*\
  !*** ./src/client/static/css/Contact.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/static/css/Contact.css?");

/***/ }),

/***/ "./src/client/static/css/Education.css":
/*!*********************************************!*\
  !*** ./src/client/static/css/Education.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/static/css/Education.css?");

/***/ }),

/***/ "./src/client/static/css/Font.css":
/*!****************************************!*\
  !*** ./src/client/static/css/Font.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/static/css/Font.css?");

/***/ }),

/***/ "./src/client/static/css/splashpage.css":
/*!**********************************************!*\
  !*** ./src/client/static/css/splashpage.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/static/css/splashpage.css?");

/***/ }),

/***/ "./src/client/template/Background.js":
/*!*******************************************!*\
  !*** ./src/client/template/Background.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Banner = __webpack_require__(/*! ../components/Banner.js */ \"./src/client/components/Banner.js\");\n\nvar _Banner2 = _interopRequireDefault(_Banner);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Background = function (_React$Component) {\n\t_inherits(Background, _React$Component);\n\n\tfunction Background() {\n\t\t_classCallCheck(this, Background);\n\n\t\treturn _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).apply(this, arguments));\n\t}\n\n\t_createClass(Background, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(_Banner2.default, null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Background;\n}(_react2.default.Component);\n\nexports.default = Background;\n\n//# sourceURL=webpack:///./src/client/template/Background.js?");

/***/ }),

/***/ "./src/client/template/Foreground.js":
/*!*******************************************!*\
  !*** ./src/client/template/Foreground.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar React = _interopRequireWildcard(_react);\n\n__webpack_require__(/*! ../static/css/Body.css */ \"./src/client/static/css/Body.css\");\n\n__webpack_require__(/*! ../static/css/Education.css */ \"./src/client/static/css/Education.css\");\n\n__webpack_require__(/*! ../static/css/Contact.css */ \"./src/client/static/css/Contact.css\");\n\nvar _About = __webpack_require__(/*! ../components/About */ \"./src/client/components/About.js\");\n\nvar _About2 = _interopRequireDefault(_About);\n\nvar _Education = __webpack_require__(/*! ../components/Education */ \"./src/client/components/Education.js\");\n\nvar _Education2 = _interopRequireDefault(_Education);\n\nvar _Contact = __webpack_require__(/*! ../components/Contact */ \"./src/client/components/Contact.js\");\n\nvar _Contact2 = _interopRequireDefault(_Contact);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Foreground = function (_React$Component) {\n    _inherits(Foreground, _React$Component);\n\n    function Foreground() {\n        _classCallCheck(this, Foreground);\n\n        return _possibleConstructorReturn(this, (Foreground.__proto__ || Object.getPrototypeOf(Foreground)).apply(this, arguments));\n    }\n\n    _createClass(Foreground, [{\n        key: 'render',\n        value: function render() {\n            var windowHeight = window.height + 200;\n            return React.createElement(\n                'div',\n                null,\n                React.createElement(_About2.default, null),\n                React.createElement(_Education2.default, null),\n                React.createElement('div', { id: 'AL' }),\n                React.createElement(_Contact2.default, null)\n            );\n        }\n    }]);\n\n    return Foreground;\n}(React.Component);\n\nexports.default = Foreground;\n\n//# sourceURL=webpack:///./src/client/template/Foreground.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _routes = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _App = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res, next) {\n\n\tvar activeRoute = _routes2.default.find(function (route) {\n\t\treturn (0, _reactRouterDom.matchPath)(req.url, route);\n\t}) || {};\n\n\tvar markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouterDom.StaticRouter, { location: req.url, context: {} }));\n\n\tres.send('\\n\\t\\t<!DOCTYPE html>\\n\\t\\t<html>\\n\\t\\t\\t<head>\\n\\t\\t\\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\\n\\n\\t\\t\\t<title> Charles Lee Jennings </title>\\n\\t\\t\\t<link rel=\"stylesheet\" type=\"text/css\" href=\"/main.css\" />\\n\\t\\t\\t<script src = \\'/bundle.js\\' defer> </script>\\n\\t\\t\\t</head>\\n\\n\\t\\t\\t<body>\\n\\t\\t\\t\\t<div id = \\'app\\'></div>\\n\\n\\t\\t\\t</body>\\n\\t\\t</html>');\n});\n\napp.listen(process.env.PORT || 3000, function () {\n\treturn console.log('Listening to port 3000');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _routes2.default.map(function (_ref) {\n            var path = _ref.path,\n                exact = _ref.exact,\n                Component = _ref.component,\n                rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);\n\n            return _react2.default.createElement(_reactRouterDom.Route, { key: path, path: path, exact: exact, render: function render(props) {\n                return _react2.default.createElement(Component, _extends({}, props, rest));\n              } });\n          }),\n          _react2.default.createElement(_reactRouterDom.Route, { render: function render() {\n              return _react2.default.createElement(\n                'h1',\n                null,\n                ' Route not Found '\n              );\n            } })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/Login.js":
/*!*****************************!*\
  !*** ./src/shared/Login.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_React$Component) {\n\t_inherits(Login, _React$Component);\n\n\tfunction Login() {\n\t\t_classCallCheck(this, Login);\n\n\t\treturn _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));\n\t}\n\n\t_createClass(Login, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t' Hello from login '\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Login;\n}(_react2.default.Component);\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/shared/Login.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _LandingPage = __webpack_require__(/*! ../client/LandingPage */ \"./src/client/LandingPage.js\");\n\nvar _LandingPage2 = _interopRequireDefault(_LandingPage);\n\nvar _Login = __webpack_require__(/*! ./Login */ \"./src/shared/Login.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Resume = __webpack_require__(/*! ../client/Resume */ \"./src/client/Resume.js\");\n\nvar _Resume2 = _interopRequireDefault(_Resume);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _LandingPage2.default\n}, {\n  path: '/Login',\n  exact: true,\n  component: _Login2.default\n}, {\n  path: '/Resume',\n  exact: true,\n  component: _Resume2.default\n}];\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"animejs\");\n\n//# sourceURL=webpack:///external_%22animejs%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");\n\n//# sourceURL=webpack:///external_%22reactstrap%22?");

/***/ })

/******/ });