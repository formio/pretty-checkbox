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
      const matches = this.component.customClass.match(/p-([^\s]+)/g);
      if (matches && matches.length) {
        matches.forEach((match) => {
          switch (match) {
            case 'p-switch':
              this._checkboxOptions.type = match;
              return '';
            case 'p-round':
            case 'p-curve':
              this._checkboxOptions.shape = match;
              return '';
            case 'p-fill':
            case 'p-thick':
              this._checkboxOptions.thick = match;
              return '';
            case 'p-none':
              this._checkboxOptions.state = '';
              return '';
            case 'p-primary':
            case 'p-warning':
            case 'p-success':
            case 'p-info':
            case 'p-danger':
              this._checkboxOptions.state = match;
              return '';
          }
        });
      }
    }
    return this._checkboxOptions;
  }
}
