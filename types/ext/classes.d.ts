declare const _default: {
    /**
     * Applied to the base DIV element that contains all other Editor elements
     */
    wrapper: string;
    /**
     * Processing classes
     *  @namespace
     */
    processing: {
        /**
         * Processing indicator element
         */
        indicator: string;
        /**
         * Added to the base element ("wrapper") when the form is "processing"
         */
        active: string;
    };
    /**
     * Display header classes
     *  @namespace
     */
    header: {
        /**
         * Container for the header elements
         */
        wrapper: string;
        /**
         * Liner for the header content
         */
        content: string;
    };
    /**
     * Display body classes
     *  @namespace
     */
    body: {
        /**
         * Container for the body elements
         */
        wrapper: string;
        /**
         * Liner for the body content
         */
        content: string;
    };
    /**
     * Display footer classes
     *  @namespace
     */
    footer: {
        /**
         * Container for the footer elements
         */
        wrapper: string;
        /**
         * Liner for the footer content
         */
        content: string;
    };
    /**
     * Form classes
     *  @namespace
     */
    form: {
        /**
         * Container for the form elements
         */
        wrapper: string;
        /**
         * Liner for the form content
         */
        content: string;
        /**
         * Applied to the <form> tag
         */
        tag: string;
        /**
         * Global form information
         */
        info: string;
        /**
         * Global error imformation
         */
        error: string;
        /**
         * Buttons container
         */
        buttons: string;
        /**
         * Button
         */
        button: string;
        /**
         * Button inside the form
         */
        buttonInternal: string;
    };
    /**
     * Field classes
     *  @namespace
     */
    field: {
        /**
         * Container for each field
         */
        wrapper: string;
        /**
         * Class prefix for the field type - field type is added to the end allowing
         * styling based on field type.
         */
        typePrefix: string;
        /**
         * Class prefix for the field name - field name is added to the end allowing
         * styling based on field name.
         */
        namePrefix: string;
        /**
         * Field label
         */
        label: string;
        /**
         * Field input container
         */
        input: string;
        /**
         * Input elements wrapper
         */
        inputControl: string;
        /**
         * Field error state (added to the field.wrapper element when in error state
         */
        error: string;
        /**
         * Label information text
         */
        "msg-label": string;
        /**
         * Error information text
         */
        "msg-error": string;
        /**
         * Live messaging (API) information text
         */
        "msg-message": string;
        /**
         * General information text
         */
        "msg-info": string;
        /**
         * Multi-value information display wrapper
         */
        multiValue: string;
        /**
         * Multi-value information descriptive text
         */
        multiInfo: string;
        /**
         * Multi-value information display
         */
        multiRestore: string;
        /**
         * Multi-value not editable (field.multiEditable)
         */
        multiNoEdit: string;
        /**
         * Field is disabled
         */
        disabled: string;
        /**
         * Field's processing element
         */
        processing: string;
    };
    /**
     * Action classes - these are added to the Editor base element ("wrapper")
     * and allows styling based on the type of form view that is being employed.
     *  @namespace
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
     * Inline editing classes - these are used to display the inline editor
     *  @namespace
     */
    inline: {
        wrapper: string;
        liner: string;
        buttons: string;
    };
    /**
     * Bubble editing classes - these are used to display the bubble editor
     *  @namespace
     */
    bubble: {
        /**
         * Bubble container element
         */
        wrapper: string;
        /**
         * Bubble content liner
         */
        liner: string;
        /**
         * Bubble table display wrapper, so the buttons and form can be shown
         * as table cells (via css)
         */
        table: string;
        /**
         * Close button
         */
        close: string;
        /**
         * Pointer shown which node is being edited
         */
        pointer: string;
        /**
         * Fixed background
         */
        bg: string;
    };
};
/**
 * Class names that are used by Editor for its various display components.
 * A copy of this object is taken when an Editor instance is initialised, thus
 * allowing different classes to be used in different instances if required.
 * Class name changes can be useful for easy integration with CSS frameworks,
 * for example Twitter Bootstrap.
 *  @namespace
 */
export default _default;
