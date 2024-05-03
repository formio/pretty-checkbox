import { Components } from '@formio/js';
import prettify from './prettify';
const RadioComponent: any = Components.components.radio;
export default class PrettyRadioComponent extends RadioComponent {
    constructor(component, options, data) {
        super(component, options, data);
    }
}
prettify(PrettyRadioComponent, true);
