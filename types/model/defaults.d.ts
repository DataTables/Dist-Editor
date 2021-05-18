import { IFormOptions } from '../model/formOptions';
declare const _default: {
    /**
     * jQuery selector that can be used to identify the table you wish to apply
     * this editor instance to.
     *
     * In previous versions of Editor (1.2 and earlier), this parameter was
     * called `table`. The name has been altered in 1.3+ to simplify the
     * initialisation. This is a backwards compatible change - if you pass in
     * a `table` option it will be used.
     *  @type string
     *  @default <i>Empty string</i>
     *
     *  @example
     *    $(document).ready(function() {
     *      var editor = new $.fn.Editor( {
     *        "ajax": "php/index.php",
     *        "table": "#example"
     *      } );
     *    } );
     */
    table: any;
    /**
     * Fields to initialise the form with - see {@link Editor.models.field} for
     * a full list of the options available to each field. Note that if fields are not
     * added to the form at initialisation time using this option, they can be added using
     * the {@link Editor#add} API method.
     *  @type array
     *  @default []
     *
     *  @example
     *    $(document).ready(function() {
     *      var editor = new $.fn.Editor( {
     *        "ajax": "php/index.php",
     *        "table": "#example",
     *        "fields": [ {
     *            "label": "User name:",
     *            "name": "username"
     *          }
     *          // More fields would typically be added here!
     *        } ]
     *      } );
     *    } );
     */
    fields: any[];
    /**
     * The display controller for the form. The form itself is just a collection of
     * DOM elements which require a display container. This display controller allows
     * the visual appearance of the form to be significantly altered without major
     * alterations to the Editor code. There are two display controllers built into
     * Editor *lightbox* and *envelope*. The value of this property will
     * be used to access the display controller defined in {@link Editor.display}
     * for the given name. Additional display controllers can be added by adding objects
     * to that object, through extending the displayController model:
     * {@link Editor.models.displayController}.
     *  @type string
     *  @default lightbox
     *
     *  @example
     *    $(document).ready(function() {
     *      var editor = new $.fn.Editor( {
     *        "ajax": "php/index.php",
     *        "table": "#example",
     *        "display": 'envelope'
     *      } );
     *    } );
     */
    display: string;
    /**
     * Control how the Ajax call to update data on the server.
     *
     * This option matches the `dt-init ajax` option in that is can be provided
     * in one of three different ways:
     *
     * * string - As a string, the value given is used as the url to target
     *   the Ajax request to, using the default Editor Ajax options. Note that
     *   for backwards compatibility you can use the form "METHOD URL" - for
     *   example: `"PUT api/users"`, although it is recommended you use the
     *   object form described below.
     * * object - As an object, the `ajax` property has two forms:
     *   * Used to extend and override the default Ajax options that Editor
     *     uses. This can be very useful for adding extra data for example, or
     *     changing the HTTP request type.
     *   * With `create`, `edit` and `remove` properties, Editor will use the
     *     option for the action that it is taking, which can be useful for
     *     REST style interfaces. The value of each property can be a string,
     *     object or function, using exactly the same options as the main `ajax`
     *     option. All three options must be defined if this form is to be used.
     * * function - As a function this gives complete control over the method
     *   used to update the server (if indeed a server is being used!). For
     *   example, you could use a different data store such as localStorage,
     *   Firebase or route the data through a web-socket.
     *
     *  @example
     *    // As a string - all actions are submitted to this URI as POST requests
     *    $(document).ready(function() {
     *      var editor = new $.fn.Editor( {
     *        "ajax": 'php/index.php',
     *        "table": "#example"
     *      } );
     *    } );
     *
     *  @example
     *    // As an object - using GET rather than POST
     *    $(document).ready(function() {
     *      var editor = new $.fn.Editor( {
     *        "ajax": {
     *          "type": 'GET',
     *          "url": 'php/index.php
     *        },
     *        "table": "#example"
     *      } );
     *    } );
     *
     *  @example
     *    // As an object - each action is submitted to a different URI as POST requests
     *    $(document).ready(function() {
     *      var editor = new $.fn.Editor( {
     *        "ajax": {
     *          "create": "/rest/user/create",
     *          "edit":   "/rest/user/_id_/edit",
     *          "remove": "/rest/user/_id_/delete"
     *        },
     *        "table": "#example"
     *      } );
     *    } );
     *
     *  @example
     *    // As an object - with different HTTP methods for each action
     *    $(document).ready(function() {
     *      var editor = new $.fn.Editor( {
     *        "ajax": {
     *          "create": {
     *          	type: 'POST',
     *          	url:  '/rest/user/create'
     *          },
     *          "edit": {
     *          	type: 'PUT',
     *          	url:  '/rest/user/edit/_id_'
     *          },
     *          "remove": {
     *          	type: 'DELETE',
     *          	url:  '/rest/user/delete'
     *          }
     *        },
     *        "table": "#example"
     *      } );
     *    } );
     *
     *    // As a function - Making a custom `$.ajax` call
     *    $(document).ready(function() {
     *      var editor = new $.fn.Editor( {
     *        "table": "#example",
     *        "ajax": function ( method, url, data, successCallback, errorCallback ) {
     *          $.ajax( {
     *            "type": method,
     *            "url":  url,
     *            "data": data,
     *            "dataType": "json",
     *            "success": function (json) {
     *              successCallback( json );
     *            },
     *            "error": function (xhr, error, thrown) {
     *              errorCallback( xhr, error, thrown );
     *            }
     *          } );
     *        }
     *      } );
     *    } );
     */
    ajax: any;
    /**
     * JSON property from which to read / write the row's ID property (i.e. its
     * unique column index that identifies the row to the database). By default
     * Editor will use the `DT_RowId` property from the data source object
     * (DataTable's magic property to set the DOM id for the row).
     *
     * If you want to read a parameter from the data source object instead of
     * using `DT_RowId`, set this option to the property name to use.
     *
     * Like other data source options the `srcId` option can be given in dotted
     * object notation to read nested objects.
     *  @type null|string
     *  @default DT_RowId
     *
     *  @example
     *    // Using a data source such as:
     *    // { "id":12, "browser":"Chrome", ... }
     *    $(document).ready(function() {
     *      var editor = new $.fn.Editor( {
     *        "ajax": "php/index.php",
     *        "table": "#example",
     *        "idSrc": "id"
     *      } );
     *    } );
     */
    idSrc: string;
    /**
     * Events / callbacks - event handlers can be assigned as an individual function
     * during initialisation using the parameters in this name space. The names, and
     * the parameters passed to each callback match their event equivalent in the
     * {@link Editor} object.
     *  @namespace
     *  @deprecated Since 1.3. Use the `on()` API method instead. Note that events
     *    passed in do still operate as they did in 1.2- but are no longer
     *    individually documented.
     */
    events: {};
    /**
     * Internationalisation options for Editor. All client-side strings that the
     * end user can see in the interface presented by Editor can be modified here.
     *
     * You may also wish to refer to the <a href="http://datatables.net/usage/i18n">
     * DataTables internationalisation options</a> to provide a fully language
     * customised table interface.
     *  @namespace
     *
     *  @example
     *    // Set the 'create' button text. All other strings used are the
     *    // default values.
     *    var editor = new $.fn.Editor( {
     *      "ajax": "data/source",
     *      "table": "#example",
     *      "i18n": {
     *        "create": {
     *          "button": "New user"
     *        }
     *      }
     *    } );
     *
     *  @example
     *    // Set the submit text for all three actions
     *    var editor = new $.fn.Editor( {
     *      "ajax": "data/source",
     *      "table": "#example",
     *      "i18n": {
     *        "create": {
     *          "submit": "Create new user"
     *        },
     *        "edit": {
     *          "submit": "Update user"
     *        },
     *        "remove": {
     *          "submit": "Remove user"
     *        }
     *      }
     *    } );
     */
    i18n: {
        /**
         * Close button title text
         *  @type string
         *  @default Close
         */
        close: string;
        /**
         * Strings used when working with the Editor 'create' action (creating new
         * records).
         *  @namespace
         */
        create: {
            /**
             * Buttons button text
             *  @type string
             *  @default New
             */
            button: string;
            /**
             * Display container title (when showing the editor display)
             *  @type string
             *  @default Create new entry
             */
            title: string;
            /**
             * Submit button text
             *  @type string
             *  @default Create
             */
            submit: string;
        };
        /**
         * Strings used when working with the Editor 'edit' action (editing existing
         * records).
         *  @namespace
         */
        edit: {
            /**
             * Buttons button text
             *  @type string
             *  @default Edit
             */
            button: string;
            /**
             * Display container title (when showing the editor display)
             *  @type string
             *  @default Edit entry
             */
            title: string;
            /**
             * Submit button text
             *  @type string
             *  @default Update
             */
            submit: string;
        };
        /**
         * Strings used when working with the Editor 'delete' action (deleting
         * existing records).
         *  @namespace
         */
        remove: {
            /**
             * Buttons button text
             *  @type string
             *  @default Delete
             */
            button: string;
            /**
             * Display container title (when showing the editor display)
             *  @type string
             *  @default Delete
             */
            title: string;
            /**
             * Submit button text
             *  @type string
             *  @default Delete
             */
            submit: string;
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
             *  @type object|string
             *  @default Are you sure you wish to delete %d rows?
             *
             *  @example
             *    // String - no plural consideration
             *    var editor = new $.fn.Editor( {
             *      "ajax": "data/source",
             *      "table": "#example",
             *      "i18n": {
             *        "remove": {
             *          "confirm": "Are you sure you wish to delete %d record(s)?"
             *        }
             *      }
             *    } );
             *
             *  @example
             *    // Basic 1 (singular) or _ (plural)
             *    var editor = new $.fn.Editor( {
             *      "ajax": "data/source",
             *      "table": "#example",
             *      "i18n": {
             *        "remove": {
             *          "confirm": {
             *            "_": "Confirm deletion of %d records.",
             *            "1": "Confirm deletion of record."
             *        }
             *      }
             *    } );
             *
             *  @example
             *    // Singular, dual and plural
             *    var editor = new $.fn.Editor( {
             *      "ajax": "data/source",
             *      "table": "#example",
             *      "i18n": {
             *        "remove": {
             *          "confirm": {
             *            "_": "Confirm deletion of %d records.",
             *            "1": "Confirm deletion of record.",
             *            "2": "Confirm deletion of both record."
             *        }
             *      }
             *    } );
             *
             */
            confirm: {
                _: string;
                "1": string;
            };
        };
        /**
         * Strings used for error conditions.
         *  @namespace
         */
        error: {
            /**
             * Generic server error message
             *  @type string
             *  @default A system error has occurred (<a target=\"_blank\" href=\"//datatables.net/tn/12\">More information</a>)
             */
            system: string;
        };
        /**
         * Strings used for multi-value editing
         *  @namespace
         */
        multi: {
            /**
             * Shown in place of the field value when a field has multiple values
             */
            title: string;
            /**
             * Shown below the multi title text, although only the first
             * instance of this text is shown in the form to reduce redundancy
             */
            info: string;
            /**
             * Shown below the field input when group editing a value to allow
             * the user to return to the original multiple values
             */
            restore: string;
            /**
             * Disabled for multi-row editing
             */
            noMulti: string;
        };
        datetime: {
            previous: string;
            next: string;
            months: string[];
            weekdays: string[];
            amPm: string[];
            hours: string;
            minutes: string;
            seconds: string;
            unknown: string;
        };
    };
    formOptions: {
        bubble: IFormOptions;
        inline: IFormOptions;
        main: IFormOptions;
    };
    /**
     * Parameter name to use to submit data to the server.
     * @type string
     */
    actionName: string;
};
export default _default;
