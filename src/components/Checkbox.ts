import { Components } from 'formiojs';
const CheckBoxComponent: any = Components.components.checkbox;
export default class PrettyCheckbox extends CheckBoxComponent {
  [x: string]: any;
  constructor(component, options, data) {
    super(component, options, data);
  }

  get checkboxClasses() {
    const options = this.checkboxOptions;
    return `pretty ${options.type} ${options.shape} ${options.thick}`;
  }

  get stateClasses() {
    const options = this.checkboxOptions;
    return `state ${options.state}`;
  }

  get checkboxOptions() {
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
      this.component.customClass.match(/p-([^\s]+)/g, (match, item) => {
        switch (item) {
          case 'switch':
            this._checkboxOptions.type = match;
            return '';
          case 'round':
          case 'curve':
            this._checkboxOptions.shape = match;
            return '';
          case 'fill':
          case 'thick':
            this._checkboxOptions.thick = match;
            return '';
          case 'none':
            this._checkboxOptions.state = '';
            return '';
          case 'primary':
          case 'warning':
          case 'success':
          case 'info':
          case 'danger':
            this._checkboxOptions.state = match;
            return '';
        }
        return match;
      });
    }
    return this._checkboxOptions;
  }
}
