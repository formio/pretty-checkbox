(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Formio"));
	else if(typeof define === 'function' && define.amd)
		define(["Formio"], factory);
	else if(typeof exports === 'object')
		exports["formio-pretty-checkboxes"] = factory(require("Formio"));
	else
		root["formio-pretty-checkboxes"] = factory(root["Formio"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_formiojs__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/module.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/components/Checkbox.js":
/*!************************************!*\
  !*** ./lib/components/Checkbox.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formiojs */ \"formiojs\");\n/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formiojs__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar CheckBoxComponent = formiojs__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].components.checkbox;\nvar PrettyCheckbox = /** @class */ (function (_super) {\n    __extends(PrettyCheckbox, _super);\n    function PrettyCheckbox(component, options, data) {\n        return _super.call(this, component, options, data) || this;\n    }\n    Object.defineProperty(PrettyCheckbox.prototype, \"checkboxClasses\", {\n        get: function () {\n            var options = this.checkboxOptions;\n            return \"pretty \" + options.type + \" \" + options.shape + \" \" + options.thick;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PrettyCheckbox.prototype, \"stateClasses\", {\n        get: function () {\n            var options = this.checkboxOptions;\n            return \"state \" + options.state;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PrettyCheckbox.prototype, \"checkboxOptions\", {\n        get: function () {\n            var _this = this;\n            if (this._checkboxOptions) {\n                return this._checkboxOptions;\n            }\n            this._checkboxOptions = {\n                type: 'p-default',\n                state: 'p-primary',\n                shape: '',\n                thick: ''\n            };\n            if (this.component.customClass) {\n                var matches = this.component.customClass.match(/p-([^\\s]+)/g);\n                if (matches && matches.length) {\n                    matches.forEach(function (match) {\n                        switch (match) {\n                            case 'p-switch':\n                                _this._checkboxOptions.type = match;\n                                return '';\n                            case 'p-round':\n                            case 'p-curve':\n                                _this._checkboxOptions.shape = match;\n                                return '';\n                            case 'p-fill':\n                            case 'p-thick':\n                                _this._checkboxOptions.thick = match;\n                                return '';\n                            case 'p-none':\n                                _this._checkboxOptions.state = '';\n                                return '';\n                            case 'p-primary':\n                            case 'p-warning':\n                            case 'p-success':\n                            case 'p-info':\n                            case 'p-danger':\n                                _this._checkboxOptions.state = match;\n                                return '';\n                        }\n                    });\n                }\n            }\n            return this._checkboxOptions;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return PrettyCheckbox;\n}(CheckBoxComponent));\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrettyCheckbox);\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/components/Checkbox.js?");

/***/ }),

/***/ "./lib/components/index.js":
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ \"./lib/components/Checkbox.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    checkbox: _Checkbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/components/index.js?");

/***/ }),

/***/ "./lib/module.js":
/*!***********************!*\
  !*** ./lib/module.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_formio_pretty_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/formio-pretty-checkbox.scss */ \"./lib/sass/formio-pretty-checkbox.scss\");\n/* harmony import */ var _sass_formio_pretty_checkbox_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_formio_pretty_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./lib/components/index.js\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ \"./lib/templates/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    components: _components__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    templates: _templates__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n});\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/module.js?");

/***/ }),

/***/ "./lib/sass/formio-pretty-checkbox.scss":
/*!**********************************************!*\
  !*** ./lib/sass/formio-pretty-checkbox.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/sass/formio-pretty-checkbox.scss?");

/***/ }),

/***/ "./lib/templates/bootstrap/checkbox/form.ejs.js":
/*!******************************************************!*\
  !*** ./lib/templates/bootstrap/checkbox/form.ejs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default=function(ctx) {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n__p += '<div class=\"' +\n((__t = ( ctx.instance.checkboxClasses )) == null ? '' : __t) +\n'\">\\n    <' +\n((__t = (ctx.input.type)) == null ? '' : __t) +\n' ref=\"input\"\\n    ';\n for (var attr in ctx.input.attr) { ;\n__p += '\\n    ' +\n((__t = (attr)) == null ? '' : __t) +\n'=\"' +\n((__t = (ctx.input.attr[attr])) == null ? '' : __t) +\n'\"\\n    ';\n } ;\n__p += '\\n    ';\n if (ctx.checked) { ;\n__p += 'checked=true';\n } ;\n__p += '\\n    ></' +\n((__t = (ctx.input.type)) == null ? '' : __t) +\n'>\\n    <div class=\"' +\n((__t = ( ctx.instance.stateClasses )) == null ? '' : __t) +\n'\">\\n        <label class=\"control-label form-check-label\"></label>\\n    </div>\\n</div>\\n';\nreturn __p\n}\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/templates/bootstrap/checkbox/form.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/checkbox/index.js":
/*!***************************************************!*\
  !*** ./lib/templates/bootstrap/checkbox/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.ejs */ \"./lib/templates/bootstrap/checkbox/form.ejs.js\");\n/* harmony import */ var _form_ejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_ejs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ form: _form_ejs__WEBPACK_IMPORTED_MODULE_0___default.a });\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/templates/bootstrap/checkbox/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/index.js":
/*!******************************************!*\
  !*** ./lib/templates/bootstrap/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox */ \"./lib/templates/bootstrap/checkbox/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    checkbox: _checkbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/templates/bootstrap/index.js?");

/***/ }),

/***/ "./lib/templates/index.js":
/*!********************************!*\
  !*** ./lib/templates/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ \"./lib/templates/bootstrap/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    bootstrap: _bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n});\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/templates/index.js?");

/***/ }),

/***/ "formiojs":
/*!*************************!*\
  !*** external "Formio" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_formiojs__;\n\n//# sourceURL=webpack://formio-pretty-checkboxes/external_%22Formio%22?");

/***/ })

/******/ })["default"];
});