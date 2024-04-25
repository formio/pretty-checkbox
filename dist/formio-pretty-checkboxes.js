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
		exports["FormioPrettyCheckboxes"] = factory(require("Formio"));
	else
		root["FormioPrettyCheckboxes"] = factory(root["Formio"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__formio_js__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/components/Checkbox.js":
/*!************************************!*\
  !*** ./lib/components/Checkbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PrettyCheckbox)\n/* harmony export */ });\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prettify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prettify */ \"./lib/components/prettify.js\");\n\n\nconst CheckBoxComponent = _formio_js__WEBPACK_IMPORTED_MODULE_0__.Components.components.checkbox;\nclass PrettyCheckbox extends CheckBoxComponent {\n}\n(0,_prettify__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PrettyCheckbox);\n\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/components/Checkbox.js?");

/***/ }),

/***/ "./lib/components/Radio.js":
/*!*********************************!*\
  !*** ./lib/components/Radio.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PrettyRadioComponent)\n/* harmony export */ });\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prettify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prettify */ \"./lib/components/prettify.js\");\n\n\nconst RadioComponent = _formio_js__WEBPACK_IMPORTED_MODULE_0__.Components.components.radio;\nclass PrettyRadioComponent extends RadioComponent {\n}\n(0,_prettify__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PrettyRadioComponent, true);\n\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/components/Radio.js?");

/***/ }),

/***/ "./lib/components/SelectBoxes.js":
/*!***************************************!*\
  !*** ./lib/components/SelectBoxes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PrettySelectBoxesComponent)\n/* harmony export */ });\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prettify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prettify */ \"./lib/components/prettify.js\");\n\n\nconst SelectBoxesComponent = _formio_js__WEBPACK_IMPORTED_MODULE_0__.Components.components.selectboxes;\nclass PrettySelectBoxesComponent extends SelectBoxesComponent {\n}\n(0,_prettify__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SelectBoxesComponent);\n\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/components/SelectBoxes.js?");

/***/ }),

/***/ "./lib/components/index.js":
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ \"./lib/components/Checkbox.js\");\n/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Radio */ \"./lib/components/Radio.js\");\n/* harmony import */ var _SelectBoxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectBoxes */ \"./lib/components/SelectBoxes.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    checkbox: _Checkbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    radio: _Radio__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    selectboxes: _SelectBoxes__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n});\n\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/components/index.js?");

/***/ }),

/***/ "./lib/components/prettify.js":
/*!************************************!*\
  !*** ./lib/components/prettify.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ prettify)\n/* harmony export */ });\nfunction prettify(Class, radio = false) {\n    Object.defineProperty(Class.prototype, 'checkboxClasses', {\n        get() {\n            const options = this.checkboxOptions;\n            return `pretty ${options.type} ${options.shape} ${options.thick}`;\n        },\n    });\n    Object.defineProperty(Class.prototype, 'stateClasses', {\n        get() {\n            const options = this.checkboxOptions;\n            return `state ${options.state}`;\n        },\n    });\n    Object.defineProperty(Class.prototype, 'isIcon', {\n        get() {\n            const options = this.checkboxOptions;\n            return !!options.icon;\n        },\n    });\n    Object.defineProperty(Class.prototype, 'iconClasses', {\n        get() {\n            const options = this.checkboxOptions;\n            return `icon fa fa-${options.icon}`;\n        },\n    });\n    Object.defineProperty(Class.prototype, 'checkboxOptions', {\n        get() {\n            if (this._checkboxOptions) {\n                return this._checkboxOptions;\n            }\n            this._checkboxOptions = {\n                type: 'p-default',\n                state: 'p-primary',\n                shape: radio ? 'p-round' : '',\n                thick: '',\n                icon: '',\n            };\n            const iconPrefix = 'icon-';\n            if (this.component.customClass) {\n                const matches = this.component.customClass.match(/p-([^\\s]+)/g);\n                if (matches && matches.length) {\n                    matches.forEach((match) => {\n                        switch (match) {\n                            case 'p-switch':\n                                this._checkboxOptions.type = match;\n                                return '';\n                            case 'p-round':\n                            case 'p-curve':\n                                this._checkboxOptions.shape = match;\n                                return '';\n                            case 'p-fill':\n                            case 'p-thick':\n                                this._checkboxOptions.thick = match;\n                                return '';\n                            case 'p-none':\n                                this._checkboxOptions.state = '';\n                                return '';\n                            case 'p-primary':\n                            case 'p-warning':\n                            case 'p-success':\n                            case 'p-info':\n                            case 'p-danger':\n                                this._checkboxOptions.state = match;\n                                return '';\n                        }\n                    });\n                }\n                const classes = this.component.customClass.split(' ');\n                const icon = classes.find((cls) => cls.startsWith(iconPrefix));\n                if (icon) {\n                    const iconClass = icon.substring(iconPrefix.length);\n                    if (iconClass) {\n                        this._checkboxOptions.type = 'p-icon';\n                        this._checkboxOptions.icon = iconClass;\n                    }\n                }\n            }\n            return this._checkboxOptions;\n        },\n    });\n}\n\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/components/prettify.js?");

/***/ }),

/***/ "./lib/module.js":
/*!***********************!*\
  !*** ./lib/module.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./lib/components/index.js\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ \"./lib/templates/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: _components__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    templates: _templates__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n});\n\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/module.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/checkbox/form.ejs.js":
/*!******************************************************!*\
  !*** ./lib/templates/bootstrap/checkbox/form.ejs.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("Object.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"]=function(ctx) {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n__p += '<div class=\"' +\n((__t = ( ctx.instance.checkboxClasses )) == null ? '' : __t) +\n'\">\\n    <' +\n((__t = (ctx.input.type)) == null ? '' : __t) +\n' ref=\"input\"\\n    ';\n for (var attr in ctx.input.attr) { ;\n__p += '\\n    ' +\n((__t = (attr)) == null ? '' : __t) +\n'=\"' +\n((__t = (ctx.input.attr[attr])) == null ? '' : __t) +\n'\"\\n    ';\n } ;\n__p += '\\n    ';\n if (ctx.checked) { ;\n__p += 'checked=true';\n } ;\n__p += '\\n    ></' +\n((__t = (ctx.input.type)) == null ? '' : __t) +\n'>\\n    <div class=\"' +\n((__t = ( ctx.instance.stateClasses )) == null ? '' : __t) +\n'\">\\n        ';\n if (ctx.instance.isIcon) { ;\n__p += '\\n            <i class=\"' +\n((__t = ( ctx.instance.iconClasses )) == null ? '' : __t) +\n'\"></i>\\n        ';\n } ;\n__p += '\\n        <label class=\"control-label form-check-label\">';\n if (!ctx.self.labelIsHidden()) { ;\n__p +=\n((__t = ( ctx.input.label )) == null ? '' : __t);\n } ;\n__p += '</label>\\n    </div>\\n</div>\\n';\nreturn __p\n}\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/templates/bootstrap/checkbox/form.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/checkbox/index.js":
/*!***************************************************!*\
  !*** ./lib/templates/bootstrap/checkbox/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _form_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.ejs */ \"./lib/templates/bootstrap/checkbox/form.ejs.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ form: _form_ejs__WEBPACK_IMPORTED_MODULE_0__[\"default\"] });\n\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/templates/bootstrap/checkbox/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/index.js":
/*!******************************************!*\
  !*** ./lib/templates/bootstrap/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox */ \"./lib/templates/bootstrap/checkbox/index.js\");\n/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio */ \"./lib/templates/bootstrap/radio/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    checkbox: _checkbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    radio: _radio__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n});\n\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/templates/bootstrap/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/radio/form.ejs.js":
/*!***************************************************!*\
  !*** ./lib/templates/bootstrap/radio/form.ejs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("Object.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"]=function(ctx) {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n__p += '<div class=\"form-radio radio\">\\n    ';\n ctx.values.forEach(function(item) { ;\n__p += '\\n    <div class=\"' +\n((__t = ( ctx.instance.checkboxClasses )) == null ? '' : __t) +\n'\"';\n if (!ctx.component.inline) { ;\n__p += ' style=\"margin-left: 0.5em;\"';\n } ;\n__p += '>\\n        <' +\n((__t = (ctx.input.type)) == null ? '' : __t) +\n'\\n          ref=\"input\"\\n          ';\n for (var attr in ctx.input.attr) { ;\n__p += '\\n          ' +\n((__t = (attr)) == null ? '' : __t) +\n'=\"' +\n((__t = (ctx.input.attr[attr])) == null ? '' : __t) +\n'\"\\n          ';\n } ;\n__p += '\\n          value=\"' +\n((__t = (item.value)) == null ? '' : __t) +\n'\"\\n          ';\n if (ctx.value && (ctx.value === item.value || (typeof ctx.value === 'object' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value]))) { ;\n__p += '\\n            checked=true\\n          ';\n } ;\n__p += '\\n          ';\n if (item.disabled) { ;\n__p += '\\n            disabled=true\\n          ';\n } ;\n__p += '\\n          id=\"' +\n((__t = (ctx.id)) == null ? '' : __t) +\n'' +\n((__t = (ctx.row)) == null ? '' : __t) +\n'-' +\n((__t = (item.value)) == null ? '' : __t) +\n'\"\\n        >\\n        <div class=\"' +\n((__t = ( ctx.instance.stateClasses )) == null ? '' : __t) +\n'\">\\n            ';\n if (ctx.instance.isIcon) { ;\n__p += '\\n                <i class=\"' +\n((__t = ( ctx.instance.iconClasses )) == null ? '' : __t) +\n'\"></i>\\n            ';\n } ;\n__p += '\\n            <label class=\"control-label form-check-label\">';\n if (!ctx.self.labelIsHidden()) { ;\n__p +=\n((__t = (ctx.t(item.label, { _userInput: true }))) == null ? '' : __t);\n } ;\n__p += '</label>\\n        </div>\\n    </div>\\n    ';\n if (!ctx.component.inline) { ;\n__p += '<div style=\"clear:both; margin-bottom: 0.5em;\"></div>';\n } ;\n__p += '\\n    ';\n }) ;\n__p += '\\n  </div>\\n';\nreturn __p\n}\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/templates/bootstrap/radio/form.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/radio/index.js":
/*!************************************************!*\
  !*** ./lib/templates/bootstrap/radio/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _form_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.ejs */ \"./lib/templates/bootstrap/radio/form.ejs.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ form: _form_ejs__WEBPACK_IMPORTED_MODULE_0__[\"default\"] });\n\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/templates/bootstrap/radio/index.js?");

/***/ }),

/***/ "./lib/templates/index.js":
/*!********************************!*\
  !*** ./lib/templates/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ \"./lib/templates/bootstrap/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    bootstrap: _bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n});\n\n\n//# sourceURL=webpack://FormioPrettyCheckboxes/./lib/templates/index.js?");

/***/ }),

/***/ "@formio/js":
/*!*************************!*\
  !*** external "Formio" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__formio_js__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});