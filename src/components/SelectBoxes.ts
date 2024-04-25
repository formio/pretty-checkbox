import { Components } from '@formio/js';
import prettify from './prettify';
const SelectBoxesComponent: any = Components.components.selectboxes;
export default class PrettySelectBoxesComponent extends SelectBoxesComponent {}
prettify(SelectBoxesComponent);
