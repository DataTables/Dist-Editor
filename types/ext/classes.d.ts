declare const _default: {
    /**
     * Action classes - these are added to the Editor base element ("wrapper")
     * and allows styling based on the type of form view that is being employed.
     *
     * @namespace
     */
    actions: {
        /**
         * Editor is in 'create' state
         */
        create: string;
        /**
         * Editor is in 'edit' state
         */
        edit: string;
        /**
         * Editor is in 'remove' state
         */
        remove: string;
    };
    /**
     * Display body classes
     *
     * @namespace
     */
    body: {
        /**
         * Liner for the body content
         */
        content: string;
        /**
         * Container for the body elements
         */
        wrapper: string;
    };
    /**
     * Bubble editing classes - these are used to display the bubble editor
     *
     * @namespace
     */
    bubble: {
        /**
         * Fixed background
         */
        bg: string;
        /**
         * Close button
         */
        close: string;
        /**
         * Bubble content liner
         */
        liner: string;
        /**
         * Pointer shown which node is being edited
         */
        pointer: string;
        /**
         * Bubble table display wrapper, so the buttons and form can be shown
         * as table cells (via css)
         */
        table: string;
        /**
         * Bubble container element
         */
        wrapper: string;
    };
    /**
     * Field classes
     *
     * @namespace
     */
    field: {
        /**
         * Field is disabled
         */
        disabled: string;
        /**
         * Field error state (added to the field.wrapper element when in error state
         */
        error: string;
        /**
         * Field input container
         */
        input: string;
        /**
         * Input elements wrapper
         */
        inputControl: string;
        /**
         * Field label
         */
        label: string;
        /**
         * Error information text
         */
        'msg-error': string;
        /**
         * General information text
         */
        'msg-info': string;
        /**
         * Label information text
         */
        'msg-label': string;
        /**
         * Live messaging (API) information text
         */
        'msg-message': string;
        /**
         * Multi-value information descriptive text
         */
        multiInfo: string;
        /**
         * Multi-value not editable (field.multiEditable)
         */
        multiNoEdit: string;
        /**
         * Multi-value information display
         */
        multiRestore: string;
        /**
         * Multi-value information display wrapper
         */
        multiValue: string;
        /**
         * Class prefix for the field name - field name is added to the end allowing
         * styling based on field name.
         */
        namePrefix: string;
        /**
         * Field's processing element
         */
        processing: string;
        /**
         * Class prefix for the field type - field type is added to the end allowing
         * styling based on field type.
         */
        typePrefix: string;
        /**
         * Container for each field
         */
        wrapper: string;
    };
    /**
     * Display footer classes
     *
     * @namespace
     */
    footer: {
        /**
         * Liner for the footer content
         */
        content: string;
        /**
         * Container for the footer elements
         */
        wrapper: string;
    };
    /**
     * Form classes
     *
     * @namespace
     */
    form: {
        /**
         * Button
         */
        button: string;
        buttonSubmit: string;
        /**
         * Button inside the form
         */
        buttonInternal: string;
        /**
         * Buttons container
         */
        buttons: string;
        /**
         * Liner for the form content
         */
        content: string;
        /**
         * Global error imformation
         */
        error: string;
        /**
         * Global form information
         */
        info: string;
        /**
         * Applied to the <form> tag
         */
        tag: string;
        /**
         * Container for the form elements
         */
        wrapper: string;
    };
    /**
     * Display header classes
     *
     * @namespace
     */
    header: {
        /**
         * Liner for the header content
         */
        content: string;
        /**
         * Title tag
         */
        title: {
            tag: any;
            class: string;
        };
        /**
         * Container for the header elements
         */
        wrapper: string;
    };
    /**
     * Inline editing classes - these are used to display the inline editor
     *
     * @namespace
     */
    inline: {
        buttons: string;
        liner: string;
        wrapper: string;
    };
    /**
     * Processing classes
     *
     * @namespace
     */
    processing: {
        /**
         * Added to the base element ("wrapper") when the form is "processing"
         */
        active: string;
        /**
         * Processing indicator element
         */
        indicator: string;
    };
    /**
     * Applied to the base DIV element that contains all other Editor elements
     */
    wrapper: string;
};
/**
 * Class names that are used by Editor for its various display components.
 * A copy of this object is taken when an Editor instance is initialised, thus
 * allowing different classes to be used in different instances if required.
 * Class name changes can be useful for easy integration with CSS frameworks,
 * for example Twitter Bootstrap.
 *
 * @namespace
 */
export default _default;
