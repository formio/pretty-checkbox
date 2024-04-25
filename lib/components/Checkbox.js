import { Components } from '@formio/js';
import prettify from './prettify';
const CheckBoxComponent = Components.components.checkbox;
export default class PrettyCheckbox extends CheckBoxComponent {
}
prettify(PrettyCheckbox);
