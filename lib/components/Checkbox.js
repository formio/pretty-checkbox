var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Components } from 'formiojs';
var CheckBoxComponent = Components.components.checkbox;
var PrettyCheckbox = /** @class */ (function (_super) {
    __extends(PrettyCheckbox, _super);
    function PrettyCheckbox(component, options, data) {
        return _super.call(this, component, options, data) || this;
    }
    Object.defineProperty(PrettyCheckbox.prototype, "checkboxClasses", {
        get: function () {
            var options = this.checkboxOptions;
            return "pretty " + options.type + " " + options.shape + " " + options.thick;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrettyCheckbox.prototype, "stateClasses", {
        get: function () {
            var options = this.checkboxOptions;
            return "state " + options.state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrettyCheckbox.prototype, "checkboxOptions", {
        get: function () {
            var _this = this;
            if (this._checkboxOptions) {
                return this._checkboxOptions;
            }
            this._checkboxOptions = {
                type: 'p-default',
                state: 'p-primary',
                shape: '',
                thick: ''
            };
            if (this.component.customClass) {
                this.component.customClass.match(/p-([^\s]+)/g, function (match, item) {
                    switch (item) {
                        case 'switch':
                            _this._checkboxOptions.type = match;
                            return '';
                        case 'round':
                        case 'curve':
                            _this._checkboxOptions.shape = match;
                            return '';
                        case 'fill':
                        case 'thick':
                            _this._checkboxOptions.thick = match;
                            return '';
                        case 'none':
                            _this._checkboxOptions.state = '';
                            return '';
                        case 'primary':
                        case 'warning':
                        case 'success':
                        case 'info':
                        case 'danger':
                            _this._checkboxOptions.state = match;
                            return '';
                    }
                    return match;
                });
            }
            return this._checkboxOptions;
        },
        enumerable: false,
        configurable: true
    });
    return PrettyCheckbox;
}(CheckBoxComponent));
export default PrettyCheckbox;
