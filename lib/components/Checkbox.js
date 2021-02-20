var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
    Object.defineProperty(PrettyCheckbox.prototype, "isIcon", {
        get: function () {
            var options = this.checkboxOptions;
            return !!options.icon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrettyCheckbox.prototype, "iconClasses", {
        get: function () {
            var options = this.checkboxOptions;
            return "icon fa fa-" + options.icon;
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
                thick: '',
                icon: '',
            };
            var iconPrefix = 'icon-';
            if (this.component.customClass) {
                var matches = this.component.customClass.match(/p-([^\s]+)/g);
                if (matches && matches.length) {
                    matches.forEach(function (match) {
                        switch (match) {
                            case 'p-switch':
                                _this._checkboxOptions.type = match;
                                return '';
                            case 'p-round':
                            case 'p-curve':
                                _this._checkboxOptions.shape = match;
                                return '';
                            case 'p-fill':
                            case 'p-thick':
                                _this._checkboxOptions.thick = match;
                                return '';
                            case 'p-none':
                                _this._checkboxOptions.state = '';
                                return '';
                            case 'p-primary':
                            case 'p-warning':
                            case 'p-success':
                            case 'p-info':
                            case 'p-danger':
                                _this._checkboxOptions.state = match;
                                return '';
                        }
                    });
                }
                var classes = this.component.customClass.split(' ');
                var icon = classes.find(function (cls) { return cls.startsWith(iconPrefix); });
                if (icon) {
                    var iconClass = icon.substring(iconPrefix.length);
                    if (iconClass) {
                        this._checkboxOptions.type = 'p-icon';
                        this._checkboxOptions.icon = iconClass;
                    }
                }
            }
            return this._checkboxOptions;
        },
        enumerable: false,
        configurable: true
    });
    return PrettyCheckbox;
}(CheckBoxComponent));
export default PrettyCheckbox;
