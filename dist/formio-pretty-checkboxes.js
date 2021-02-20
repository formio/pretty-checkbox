/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Formio"));
	else if(typeof define === 'function' && define.amd)
		define(["Formio"], factory);
	else if(typeof exports === 'object')
		exports["formio-pretty-checkboxes"] = factory(require("Formio"));
	else
		root["formio-pretty-checkboxes"] = factory(root["Formio"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_formiojs__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/components/Checkbox.js":
/*!************************************!*\
  !*** ./lib/components/Checkbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formiojs */ \"formiojs\");\n/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formiojs__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar CheckBoxComponent = formiojs__WEBPACK_IMPORTED_MODULE_0__.Components.components.checkbox;\nvar PrettyCheckbox = /** @class */ (function (_super) {\n    __extends(PrettyCheckbox, _super);\n    function PrettyCheckbox(component, options, data) {\n        return _super.call(this, component, options, data) || this;\n    }\n    Object.defineProperty(PrettyCheckbox.prototype, \"checkboxClasses\", {\n        get: function () {\n            var options = this.checkboxOptions;\n            return \"pretty \" + options.type + \" \" + options.shape + \" \" + options.thick;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PrettyCheckbox.prototype, \"stateClasses\", {\n        get: function () {\n            var options = this.checkboxOptions;\n            return \"state \" + options.state;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PrettyCheckbox.prototype, \"isIcon\", {\n        get: function () {\n            var options = this.checkboxOptions;\n            return !!options.icon;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PrettyCheckbox.prototype, \"iconClasses\", {\n        get: function () {\n            var options = this.checkboxOptions;\n            return \"icon fa fa-\" + options.icon;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PrettyCheckbox.prototype, \"checkboxOptions\", {\n        get: function () {\n            var _this = this;\n            if (this._checkboxOptions) {\n                return this._checkboxOptions;\n            }\n            this._checkboxOptions = {\n                type: 'p-default',\n                state: 'p-primary',\n                shape: '',\n                thick: '',\n                icon: '',\n            };\n            var iconPrefix = 'icon-';\n            if (this.component.customClass) {\n                var matches = this.component.customClass.match(/p-([^\\s]+)/g);\n                if (matches && matches.length) {\n                    matches.forEach(function (match) {\n                        switch (match) {\n                            case 'p-switch':\n                                _this._checkboxOptions.type = match;\n                                return '';\n                            case 'p-round':\n                            case 'p-curve':\n                                _this._checkboxOptions.shape = match;\n                                return '';\n                            case 'p-fill':\n                            case 'p-thick':\n                                _this._checkboxOptions.thick = match;\n                                return '';\n                            case 'p-none':\n                                _this._checkboxOptions.state = '';\n                                return '';\n                            case 'p-primary':\n                            case 'p-warning':\n                            case 'p-success':\n                            case 'p-info':\n                            case 'p-danger':\n                                _this._checkboxOptions.state = match;\n                                return '';\n                        }\n                    });\n                }\n                var classes = this.component.customClass.split(' ');\n                var icon = classes.find(function (cls) { return cls.startsWith(iconPrefix); });\n                if (icon) {\n                    var iconClass = icon.substring(iconPrefix.length);\n                    if (iconClass) {\n                        this._checkboxOptions.type = 'p-icon';\n                        this._checkboxOptions.icon = iconClass;\n                    }\n                }\n            }\n            return this._checkboxOptions;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return PrettyCheckbox;\n}(CheckBoxComponent));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrettyCheckbox);\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/components/Checkbox.js?");

/***/ }),

/***/ "./lib/components/index.js":
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ \"./lib/components/Checkbox.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    checkbox: _Checkbox__WEBPACK_IMPORTED_MODULE_0__.default\n});\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/components/index.js?");

/***/ }),

/***/ "./lib/module.js":
/*!***********************!*\
  !*** ./lib/module.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sass_formio_pretty_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/formio-pretty-checkbox.scss */ \"./lib/sass/formio-pretty-checkbox.scss\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./lib/components/index.js\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ \"./lib/templates/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: _components__WEBPACK_IMPORTED_MODULE_1__.default,\n    templates: _templates__WEBPACK_IMPORTED_MODULE_2__.default,\n});\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/module.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/checkbox/form.ejs.js":
/*!******************************************************!*\
  !*** ./lib/templates/bootstrap/checkbox/form.ejs.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("Object.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default=function(ctx) {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n__p += '<div class=\"' +\n((__t = ( ctx.instance.checkboxClasses )) == null ? '' : __t) +\n'\">\\n    <' +\n((__t = (ctx.input.type)) == null ? '' : __t) +\n' ref=\"input\"\\n    ';\n for (var attr in ctx.input.attr) { ;\n__p += '\\n    ' +\n((__t = (attr)) == null ? '' : __t) +\n'=\"' +\n((__t = (ctx.input.attr[attr])) == null ? '' : __t) +\n'\"\\n    ';\n } ;\n__p += '\\n    ';\n if (ctx.checked) { ;\n__p += 'checked=true';\n } ;\n__p += '\\n    ></' +\n((__t = (ctx.input.type)) == null ? '' : __t) +\n'>\\n\\n    <div class=\"' +\n((__t = ( ctx.instance.stateClasses )) == null ? '' : __t) +\n'\">\\n        ';\n if (ctx.instance.isIcon) { ;\n__p += '\\n            <i class=\"' +\n((__t = ( ctx.instance.iconClasses )) == null ? '' : __t) +\n'\"></i>\\n        ';\n } ;\n__p += '\\n        <label class=\"control-label form-check-label\"></label>\\n    </div>\\n</div>\\n';\nreturn __p\n}\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/templates/bootstrap/checkbox/form.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/checkbox/index.js":
/*!***************************************************!*\
  !*** ./lib/templates/bootstrap/checkbox/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _form_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.ejs */ \"./lib/templates/bootstrap/checkbox/form.ejs.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ form: _form_ejs__WEBPACK_IMPORTED_MODULE_0__.default });\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/templates/bootstrap/checkbox/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/index.js":
/*!******************************************!*\
  !*** ./lib/templates/bootstrap/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox */ \"./lib/templates/bootstrap/checkbox/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    checkbox: _checkbox__WEBPACK_IMPORTED_MODULE_0__.default\n});\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/templates/bootstrap/index.js?");

/***/ }),

/***/ "./lib/templates/index.js":
/*!********************************!*\
  !*** ./lib/templates/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ \"./lib/templates/bootstrap/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    bootstrap: _bootstrap__WEBPACK_IMPORTED_MODULE_0__.default,\n});\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/templates/index.js?");

/***/ }),

/***/ "./lib/sass/formio-pretty-checkbox.scss":
/*!**********************************************!*\
  !*** ./lib/sass/formio-pretty-checkbox.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://formio-pretty-checkboxes/./lib/sass/formio-pretty-checkbox.scss?");

/***/ }),

/***/ "formiojs":
/*!*************************!*\
  !*** external "Formio" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_formiojs__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/module.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});