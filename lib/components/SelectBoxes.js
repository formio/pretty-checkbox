import { Components } from '@formio/js';
import prettify from './prettify';
const SelectBoxesComponent = Components.components.selectboxes;
export default class PrettySelectBoxesComponent extends SelectBoxesComponent {
}
prettify(SelectBoxesComponent);
