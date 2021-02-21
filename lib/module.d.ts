import './sass/formio-pretty-checkbox.scss';
declare const _default: {
    components: {
        checkbox: typeof import("./components/Checkbox").default;
        radio: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/field/field").Field>;
        selectboxes: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/field/field").Field>;
    };
    templates: {
        bootstrap: {
            checkbox: {
                form: string;
            };
            radio: {
                form: string;
            };
        };
    };
};
export default _default;
