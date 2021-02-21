import { Components } from 'formiojs';
import prettify from './prettify';
const SelectBoxesComponent: any = Components.components.selectboxes;
export default class PrettySelectBoxesComponent extends SelectBoxesComponent {
    constructor(component, options, data) {
        super(component, options, data);
    }
}
prettify(SelectBoxesComponent);
