import { Components } from '@formio/js';
import prettify from './prettify';
const CheckBoxComponent = Components.components.checkbox;
export default class PrettyCheckbox extends CheckBoxComponent {
    constructor(component, options, data) {
        super(component, options, data);
    }
}
prettify(PrettyCheckbox);
