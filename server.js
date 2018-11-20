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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar React = _interopRequireWildcard(_react);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar About = function (_React$Component) {\n  _inherits(About, _React$Component);\n\n  function About() {\n    _classCallCheck(this, About);\n\n    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));\n  }\n\n  _createClass(About, [{\n    key: 'render',\n    value: function render() {\n\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'h1',\n          { className: 'yellowtail' },\n          React.createElement(\n            'u',\n            null,\n            'About'\n          )\n        ),\n        React.createElement(\n          'p',\n          { 'class': 'raleway' },\n          'My name is Charles Lee Jennings.',\n          React.createElement('br', null),\n          'I was born and raised in Birmingham, Alabama. I attended Shades Valley High School and graduated in 2013 with an Engineering Technical Diploma. After graduation, I attended summer classes at Lawson State Community College then transferrd to Auburn University in Montgomery. I stayed at AUM for one year then transferrd to Auburn. I graduated with a degree Software Engineering in the Fall of 2017. Now I develop website for clients and work for Apple as a Technial Advisor. Feel free to contact me if you have any questions or would like to have a website deployed.'\n        )\n      );\n    }\n  }]);\n\n  return About;\n}(React.Component);\n\nexports.default = About;\n\n//# sourceURL=webpack:///./src/client/components/About.js?");

/***/ }),

/***/ "./src/client/components/Banner.js":
/*!*****************************************!*\
  !*** ./src/client/components/Banner.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../static/css/Banner.scss */ \"./src/client/static/css/Banner.scss\");\n\nvar _animejs = __webpack_require__(/*! animejs */ \"animejs\");\n\nvar _animejs2 = _interopRequireDefault(_animejs);\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Banner = function (_React$Component) {\n  _inherits(Banner, _React$Component);\n\n  function Banner() {\n    _classCallCheck(this, Banner);\n\n    return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));\n  }\n\n  _createClass(Banner, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var name = (0, _animejs2.default)({\n\n        targets: '#nameTag',\n        opacity: 1,\n        delay: 7000,\n        easing: 'easeInOutSine'\n      });\n\n      var scroll = (0, _animejs2.default)({\n        targets: '#tag',\n        translateY: 50,\n        loop: true,\n        direction: 'alternate',\n        easing: 'easeInOutQuart',\n        duration: 500\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var windowHeight = screen.height + 200;\n      return _react2.default.createElement(\n        _reactstrap.Container,\n        { id: 'Hawaii', fluid: true, style: { height: windowHeight + 'px' } },\n        _react2.default.createElement(\n          _reactstrap.Container,\n          { fluid: true, id: 'nameTag' },\n          _react2.default.createElement('object', { type: 'image/svg+xml', data: './images/SVG/Software_Tag.svg' }),\n          _react2.default.createElement(\n            _reactstrap.Container,\n            { fluid: true },\n            _react2.default.createElement('img', { id: 'tag', src: './images/SVG/Scroll Tag.svg' })\n          )\n        )\n      );\n    }\n  }]);\n\n  return Banner;\n}(_react2.default.Component);\n\nexports.default = Banner;\n\n//# sourceURL=webpack:///./src/client/components/Banner.js?");

/***/ }),

/***/ "./src/client/components/Contact.js":
/*!******************************************!*\
  !*** ./src/client/components/Contact.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Questions = function Questions() {\n  return _react2.default.createElement(\n    _reactstrap.Col,\n    { lg: '6', xs: '12', sm: '6' },\n    _react2.default.createElement(\n      'h1',\n      null,\n      'Questions?'\n    ),\n    _react2.default.createElement(\n      'form',\n      { onSubmit: undefined.handleSubmit },\n      _react2.default.createElement(\n        _reactstrap.Row,\n        null,\n        _react2.default.createElement(\n          _reactstrap.Col,\n          { lg: 'auto', sm: '12', md: '12' },\n          _react2.default.createElement(\n            'div',\n            { id: 'name' },\n            _react2.default.createElement(\n              'label',\n              { className: 'raleway' },\n              'Name: '\n            ),\n            _react2.default.createElement('input', { placeholder: 'Your Name', type: 'text', name: 'name', value: undefined.state.name, onChange: undefined.handleChange.bind(undefined) })\n          )\n        ),\n        _react2.default.createElement(\n          _reactstrap.Col,\n          { lg: 'auto', sm: '12', md: '12' },\n          _react2.default.createElement(\n            'label',\n            { className: 'raleway' },\n            'Comment: '\n          ),\n          _react2.default.createElement('input', { placeholder: 'Awesome Website!', id: 'comment', name: 'comment', type: 'text', value: undefined.state.comment, onChange: undefined.handleChange.bind(undefined) })\n        ),\n        _react2.default.createElement(\n          _reactstrap.Col,\n          null,\n          _react2.default.createElement('input', { type: 'submit' })\n        )\n      )\n    )\n  );\n};\n\nvar Social = function Social() {\n  return _react2.default.createElement(\n    _reactstrap.Row,\n    { id: 'Social' },\n    ' ',\n    _react2.default.createElement(\n      _reactstrap.Col,\n      null,\n      'Twitter'\n    ),\n    ' ',\n    _react2.default.createElement(\n      _reactstrap.Col,\n      null,\n      'Instagram'\n    ),\n    ' ',\n    _react2.default.createElement(\n      _reactstrap.Col,\n      null,\n      'LinkedIn'\n    ),\n    '  ',\n    _react2.default.createElement(\n      _reactstrap.Col,\n      null,\n      'Snapchat'\n    ),\n    ' '\n  );\n};\n\nvar Contact = function (_React$Component) {\n  _inherits(Contact, _React$Component);\n\n  function Contact(props) {\n    _classCallCheck(this, Contact);\n\n    var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));\n\n    _this.state = {\n      name: \"\",\n      comment: \"\"\n    };\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    return _this;\n  }\n\n  _createClass(Contact, [{\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n\n      event.preventDefault();\n    }\n  }, {\n    key: 'handleChange',\n    value: function handleChange(event) {\n\n      var value = event.target.value;\n      var name = event.target.name;\n\n      this.setState(_defineProperty({}, name, value));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactstrap.Row,\n          null,\n          _react2.default.createElement(\n            _reactstrap.Col,\n            { lg: '6', xs: '12', sm: '6' },\n            _react2.default.createElement(\n              'h1',\n              null,\n              'Contact:'\n            ),\n            _react2.default.createElement(\n              'div',\n              { id: 'ref' },\n              _react2.default.createElement(\n                'a',\n                { href: 'mailto:CharlesJenn39@gmail.com', className: 'raleway' },\n                'Email: CharlesJenn39@gmail.com '\n              ),\n              _react2.default.createElement(\n                'h3',\n                { className: 'raleway' },\n                ' Phone: (205)-914-5430 '\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Contact;\n}(_react2.default.Component);\n\nexports.default = Contact;\n\n//# sourceURL=webpack:///./src/client/components/Contact.js?");

/***/ }),

/***/ "./src/client/components/Education.js":
/*!********************************************!*\
  !*** ./src/client/components/Education.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Education = function (_React$Component) {\n  _inherits(Education, _React$Component);\n\n  function Education() {\n    _classCallCheck(this, Education);\n\n    return _possibleConstructorReturn(this, (Education.__proto__ || Object.getPrototypeOf(Education)).apply(this, arguments));\n  }\n\n  _createClass(Education, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          { className: ' yellowtail container-fluid' },\n          _react2.default.createElement(\n            'u',\n            null,\n            'Education'\n          )\n        ),\n        _react2.default.createElement(\n          _reactstrap.Row,\n          { className: 'justify-content-center', id: 'schools' },\n          _react2.default.createElement(\n            _reactstrap.Col,\n            { lg: 'auto', sm: 'auto', md: 'auto', xs: 'auto' },\n            _react2.default.createElement('img', { id: 'schoolImg', src: \"./images/PNG/Lawson emblem.png\" }),\n            _react2.default.createElement(\n              'h5',\n              { 'class': 'raleway' },\n              'Lawson State'\n            )\n          ),\n          _react2.default.createElement(\n            _reactstrap.Col,\n            { lg: 'auto', sm: 'auto', md: 'auto', xs: 'auto' },\n            _react2.default.createElement('img', { id: 'schoolImg', src: \"./images/PNG/Auburn mascot.png\" }),\n            _react2.default.createElement(\n              'h5',\n              { 'class': 'raleway' },\n              'Auburn University'\n            )\n          ),\n          _react2.default.createElement(\n            _reactstrap.Col,\n            { lg: 'auto', sm: 'auto', md: 'auto', xs: 'auto' },\n            _react2.default.createElement('img', { id: 'schoolImgAum', src: \"./images/PNG/AUM emblem.png\" }),\n            _react2.default.createElement(\n              'h5',\n              { 'class': 'raleway' },\n              'Auburn in Montgomery'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Education;\n}(_react2.default.Component);\n\nexports.default = Education;\n\n//# sourceURL=webpack:///./src/client/components/Education.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar React = _interopRequireWildcard(_react);\n\n__webpack_require__(/*! ../static/css/Body.css */ \"./src/client/static/css/Body.css\");\n\n__webpack_require__(/*! ../static/css/About.css */ \"./src/client/static/css/About.css\");\n\n__webpack_require__(/*! ../static/css/Education.css */ \"./src/client/static/css/Education.css\");\n\n__webpack_require__(/*! ../static/css/Contact.css */ \"./src/client/static/css/Contact.css\");\n\nvar _About = __webpack_require__(/*! ../components/About */ \"./src/client/components/About.js\");\n\nvar _About2 = _interopRequireDefault(_About);\n\nvar _Education = __webpack_require__(/*! ../components/Education */ \"./src/client/components/Education.js\");\n\nvar _Education2 = _interopRequireDefault(_Education);\n\nvar _Contact = __webpack_require__(/*! ../components/Contact */ \"./src/client/components/Contact.js\");\n\nvar _Contact2 = _interopRequireDefault(_Contact);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Foreground = function (_React$Component) {\n   _inherits(Foreground, _React$Component);\n\n   function Foreground() {\n      _classCallCheck(this, Foreground);\n\n      return _possibleConstructorReturn(this, (Foreground.__proto__ || Object.getPrototypeOf(Foreground)).apply(this, arguments));\n   }\n\n   _createClass(Foreground, [{\n      key: 'render',\n      value: function render() {\n         var windowHeight = screen.height;\n         return React.createElement(\n            'div',\n            null,\n            React.createElement(\n               'div',\n               { style: { top: windowHeight + 'px' }, className: 'container-fluid', id: 'aboutBg' },\n               React.createElement(_About2.default, null)\n            ),\n            React.createElement(\n               'div',\n               { className: 'container-fluid', id: 'educationBg' },\n               React.createElement(_Education2.default, null)\n            ),\n            React.createElement('div', { id: 'AL' }),\n            React.createElement(\n               'div',\n               { className: 'container-fluid', id: 'Contact' },\n               React.createElement(_Contact2.default, null)\n            )\n         );\n      }\n   }]);\n\n   return Foreground;\n}(React.Component);\n\nexports.default = Foreground;\n\n//# sourceURL=webpack:///./src/client/template/Foreground.js?");

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