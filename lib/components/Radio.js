import { Components } from '@formio/js';
import prettify from './prettify';
const RadioComponent = Components.components.radio;
export default class PrettyRadioComponent extends RadioComponent {
}
prettify(PrettyRadioComponent, true);
