declare const CheckBoxComponent: any;
export default class PrettyCheckbox extends CheckBoxComponent {
    [x: string]: any;
    constructor(component: any, options: any, data: any);
    get checkboxClasses(): string;
    get stateClasses(): string;
    get checkboxOptions(): any;
}
export {};
