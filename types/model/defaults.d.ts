/// <reference types="jquery" />
import { Api } from 'datatables.net';
import { FieldConf } from '../ext/fieldTypes';
import { IFormOptions } from '../model/formOptions';
export interface IEditorOptions {
    /**
     * Parameter name to use to submit data to the server.
     */
    actionName: string;
    /**
     * Control how the Ajax call to update data on the server.
     *
     * This option matches the `dt-init ajax` option in that is can be provided
     * in one of three different ways:
     *
     * * string - As a string, the value given is used as the url to target
     * the Ajax request to, using the default Editor Ajax options. Note that
     * for backwards compatibility you can use the form "METHOD URL" - for
     * example: `"PUT api/users"`, although it is recommended you use the
     * object form described below.
     * * object - As an object, the `ajax` property has two forms:
     * * Used to extend and override the default Ajax options that Editor
     * uses. This can be very useful for adding extra data for example, or
     * changing the HTTP request type.
     * * With `create`, `edit` and `remove` properties, Editor will use the
     * option for the action that it is taking, which can be useful for
     * REST style interfaces. The value of each property can be a string,
     * object or function, using exactly the same options as the main `ajax`
     * option. All three options must be defined if this form is to be used.
     * * function - As a function this gives complete control over the method
     * used to update the server (if indeed a server is being used!). For
     * example, you could use a different data store such as localStorage,
     * Firebase or route the data through a web-socket.
     */
    ajax: string | any;
    /**
     * The display controller for the form. The form itself is just a collection of
     * DOM elements which require a display container. This display controller allows
     * the visual appearance of the form to be significantly altered without major
     * alterations to the Editor code. There are two display controllers built into
     * Editor *lightbox* and *envelope*. The value of this property will
     * be used to access the display controller defined in `Editor.display`
     * for the given name.
     */
    display: string;
    /** @deprecated Use `table` */
    domTable: string;
    /**
     * Events / callbacks - event handlers can be assigned as an individual function
     * during initialisation using the parameters in this name space. The names, and
     * the parameters passed to each callback match their event equivalent in the
     * Editor object.
     *
     * @deprecated Since 1.3. Use the `on()` API method instead. Note that events
     * passed in do still operate as they did in 1.2- but are no longer
     * individually documented.
     */
    events: {
        [name: string]: Function;
    };
    /**
     * Fields to initialise the form with.
     */
    fields: FieldConf[];
    /**
     * Form configuration options
     */
    formOptions: {
        bubble: IFormOptions;
        inline: IFormOptions;
        main: IFormOptions;
    };
    /**
     * Internationalisation options for Editor. All client-side strings that the
     * end user can see in the interface presented by Editor can be modified here.
     *
     * You may also wish to refer to the <a href="http://datatables.net/usage/i18n">
     * DataTables internationalisation options</a> to provide a fully language
     * customised table interface.
     */
    i18n: {
        /**
         * Close button title text
         */
        close: string;
        /**
         * Strings used when working with the Editor 'create' action (creating new
         * records).
         */
        create: {
            /**
             * Buttons button text
             */
            button: string;
            /**
             * Submit button text
             */
            submit: string;
            /**
             * Display container title (when showing the editor display)
             */
            title: string;
        };
        datetime: {
            amPm: [string, string];
            hours: string;
            minutes: string;
            months: [
                string,
                string,
                string,
                string,
                string,
                string,
                string,
                string,
                string,
                string,
                string,
                string
            ];
            next: string;
            previous: string;
            seconds: string;
            unknown: string;
            weekdays: [string, string, string, string, string, string, string];
        };
        /**
         * Strings used when working with the Editor 'edit' action (editing existing
         * records).
         */
        edit: {
            /**
             * Buttons button text
             */
            button: string;
            /**
             * Submit button text
             */
            submit: string;
            /**
             * Display container title (when showing the editor display)
             */
            title: string;
        };
        /**
         * Strings used for error conditions.
         */
        error: {
            /**
             * Generic server error message
             */
            system: string;
        };
        /**
         * Strings used by the various field types
         */
        field: {
            autocomplete: {
                noResults: string;
                placeholder: string;
            };
            tags: {
                addButton: string;
                inputPlaceholder: string;
                noResults: string;
                placeholder: string;
                removeIcon: string;
            };
            upload: {
                choose: string;
                clear: string;
                dragDrop: string;
                noFile: string;
                processing: string;
                uploading: string;
            };
            uploadMany: {
                choose: string;
                dragDrop: string;
                noFiles: string;
                processing: string;
                uploading: string;
            };
        };
        /**
         * Strings used for multi-value editing
         */
        multi: {
            /**
             * Shown below the multi title text, although only the first
             * instance of this text is shown in the form to reduce redundancy
             */
            info: string;
            /**
             * Disabled for multi-row editing
             */
            noMulti: string;
            /**
             * Shown below the field input when group editing a value to allow
             * the user to return to the original multiple values
             */
            restore: string;
            /**
             * Shown in place of the field value when a field has multiple values
             */
            title: string;
        };
        /**
         * Strings used when working with the Editor 'delete' action (deleting
         * existing records).
         */
        remove: {
            /**
             * Buttons button text
             */
            button: string;
            /**
             * Deletion confirmation message.
             *
             * As Editor has the ability to delete either a single or multiple rows
             * at a time, this option can be given as either a string (which will be
             * used regardless of how many records are selected) or as an object
             * where the property "_" will be used (with %d substituted for the number
             * of records to be deleted) as the delete message, unless there is a
             * key with the number of records to be deleted. This allows Editor
             * to consider the different pluralisation characteristics of different
             * languages.
             *
             */
            confirm: {
                _: string;
                [num: number]: string;
            };
            /**
             * Submit button text
             */
            submit: string;
            /**
             * Display container title (when showing the editor display)
             */
            title: string;
        };
    };
    /**
     * JSON property from which to read / write the row's ID property (i.e. its
     * unique column index that identifies the row to the database). By default
     * Editor will use the `DT_RowId` property from the data source object.
     */
    idSrc: string;
    /**
     * jQuery selector that can be used to identify the table you wish to apply
     * this editor instance to.
     *
     * In previous versions of Editor (1.2 and earlier), this parameter was
     * called `table`. The name has been altered in 1.3+ to simplify the
     * initialisation. This is a backwards compatible change - if you pass in
     * a `table` option it will be used.
     */
    table: string | HTMLElement | JQuery | Api;
    /**
     * A jQuery selector or reference to the element that should be used as the form
     * template. Only a single element should be selected, so it is most common to
     * use an ID selector here.
     */
    template: string | HTMLElement | JQuery;
}
declare const _default: IEditorOptions;
export default _default;
