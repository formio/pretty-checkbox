import { Components } from '@formio/js';
import prettify from './prettify';
const SelectBoxesComponent = Components.components.selectboxes;
export default class PrettySelectBoxesComponent extends SelectBoxesComponent {
    constructor(component, options, data) {
        super(component, options, data);
    }
}
prettify(SelectBoxesComponent);
