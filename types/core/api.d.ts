/// <reference types="jquery" />
/// <reference types="datatables.net" />
import Editor from '../Editor';
import Field from '../field/Field';
import { IDisplay } from '../model/settings';
import { IFormOptions } from '../model/formOptions';
/**
 * Add a new field to the from. This is the method that is called automatically when
 * fields are given in the initialisation objects as {@link Editor.defaults.fields}.
 *  @memberOf Editor
 *  @param {object|array} field The object that describes the field (the full
 *    object is described by {@link Editor.model.field}. Note that multiple
 *    fields can be given by passing in an array of field definitions.
 *  @param {string} [after] Existing field to insert the new field after. This
 *    can be `undefined` (insert at end), `null` (insert at start) or `string`
 *    the field name to insert after.
 *  @param {boolean} [reorder] INTERNAL for array adding performance only
 */
export declare function add(this: Editor, cfg: any, after?: string, reorder?: boolean): Editor;
/**
 * Get / set the Ajax configuration for the Editor instance
 *
 * @return {Editor} Editor instance, for chaining
 */
export declare function ajax(this: Editor, newAjax: any): string | Function | Editor | import("../model/settings").IAjaxOptions;
/**
 * Perform background activation tasks.
 *
 * This is NOT publicly documented on the Editor web-site, but rather can be
 * used by display controller plug-ins to perform the required task on
 * background activation.
 *
 * @return {Editor} Editor instance, for chaining
 */
export declare function background(this: Editor): Editor;
/**
 * Blur the currently displayed editor.
 *
 * A blur is different from a `close()` in that it might cause either a close or
 * the form to be submitted. A typical example of a blur would be clicking on
 * the background of the bubble or main editing forms - i.e. it might be a
 * close, or it might submit depending upon the configuration, while a click on
 * the close box is a very definite close.
 *
 * @return {Editor} Editor instance, for chaining
 */
export declare function blur(this: Editor): Editor;
export declare function bubble(this: Editor, cells: any, fieldNames: any, show: any, opts?: any): Editor;
/**
 * Reposition the editing bubble (`bubble()`) when it is visible. This can be
 * used to update the bubble position if other elements on the page change
 * position. Editor will automatically call this method on window resize.
 *
 * @return {Editor} Editor instance, for chaining
 */
export declare function bubblePosition(this: Editor): Editor;
/**
 * Setup the buttons that will be shown in the footer of the form - calling this
 * method will replace any buttons which are currently shown in the form.
 *  @param {array|object} buttons A single button definition to add to the form or
 *    an array of objects with the button definitions to add more than one button.
 *    The options for the button definitions are fully defined by the
 *    {@link Editor.models.button} object.
 *  @param {string} buttons.text The text to put into the button. This can be any
 *    HTML string you wish as it will be rendered as HTML (allowing images etc to
 *    be shown inside the button).
 *  @param {function} [buttons.action] Callback function which the button is activated.
 *    For example for a 'submit' button you would call the {@link Editor#submit} method,
 *    while for a cancel button you would call the {@link Editor#close} method. Note that
 *    the function is executed in the scope of the Editor instance, so you can call
 *    the Editor's API methods using the `this` keyword.
 *  @param {string} [buttons.className] The CSS class(es) to apply to the button
 *    which can be useful for styling buttons which preform different functions
 *    each with a distinctive visual appearance.
 *  @return {Editor} Editor instance, for chaining
 */
export declare function buttons(this: Editor, buttons: any): Editor;
/**
 * Remove fields from the form (fields are those that have been added using the
 * {@link Editor#add} method or the `fields` initialisation option). A single,
 * multiple or all fields can be removed at a time based on the passed parameter.
 * Fields are identified by the `name` property that was given to each field
 * when added to the form.
 *  @param {string|array} [fieldName] Field or fields to remove from the form. If
 *    not given then all fields are removed from the form. If given as a string
 *    then the single matching field will be removed. If given as an array of
 *    strings, then all matching fields will be removed.
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Clear the form of current fields and then add a new field
 *    // before displaying a 'create' display
 *    editor.clear();
 *    editor.add( {
 *      "label": "User name",
 *      "name": "username"
 *    } );
 *    editor.create( "Create user" );
 *
 *  @example
 *    // Remove an individual field
 *    editor.clear( "username" );
 *
 *  @example
 *    // Remove multiple fields
 *    editor.clear( [ "first_name", "last_name" ] );
 */
export declare function clear(this: Editor, fieldName?: any): Editor;
/**
 * Close the form display.
 *
 * Note that `close()` will close any of the three Editor form types (main,
 * bubble and inline).
 *
 *  @return {Editor} Editor instance, for chaining
 */
export declare function close(this: Editor): Editor;
/**
 * Create a new record - show the form that allows the user to enter information
 * for a new row and then subsequently submit that data.
 *  @param {boolean} [show=true] Show the form or not.
 *
 *  @example
 *    // Show the create form with a submit button
 *    editor
 *      .title( 'Add new record' )
 *      .buttons( {
 *        "label": "Save",
 *        "fn": function () {
 *          this.submit();
 *        }
 *      } )
 *      .create();
 *
 *  @example
 *    // Don't show the form and automatically submit it after programatically
 *    // setting the values of fields (and using the field defaults)
 *    editor
 *      create()
 *      set( 'name',   'Test user' )
 *      set( 'access', 'Read only' )
 *      submit();
 */
export declare function create(this: Editor, arg1: any, arg2: any, arg3: any, arg4: any): Editor;
/**
 * Remove dependent links from a field
 *
 * @param {string} parent The name of the field to remove the existing dependencies
 * @return {Editor} Editor instance, for chaining
 */
export declare function undependent(this: Editor, parent: any): Editor;
/**
 * Create a dependent link between two or more fields. This method is used to
 * listen for a change in a field's value which will trigger updating of the
 * form. This update can consist of updating an options list, changing values
 * or making fields hidden / visible.
 *
 * @param {string} parent The name of the field to listen to changes from
 * @param {string|object|function} url Callback definition. This can be:
 *   * A string, which will be used as a URL to submit the request for update to
 *   * An object, which is used to extend an Ajax object for the request. The
 *     `url` parameter must be specified.
 *   * A function, which is used as a callback, allowing non-ajax updates.
 * @return {Editor} Editor instance, for chaining
 */
export declare function dependent(this: Editor, parent: any, url: any, opts: any): Editor;
/**
 * Destroy the Editor instance, cleaning up fields, display and event handlers
 */
export declare function destroy(this: Editor): void;
/**
 * Disable one or more field inputs, disallowing subsequent user interaction with the
 * fields until they are re-enabled.
 *  @param {string|array} name The field name (from the `name` parameter given when
 *   originally setting up the field) to disable, or an array of field names to disable
 *   multiple fields with a single call.
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Show a 'create' record form, but with a field disabled
 *    editor.disable( 'account_type' );
 *    editor.create( 'Add new user', {
 *      "label": "Save",
 *      "fn": function () { this.submit(); }
 *    } );
 *
 *  @example
 *    // Disable multiple fields by using an array of field names
 *    editor.disable( ['account_type', 'access_level'] );
 */
export declare function disable(this: Editor, name: any): Editor;
/**
 * Display, or remove the editing form from the display
 *  @param {boolean} show Show (`true`) or hide (`false`)
 *  @return {Editor} Editor instance, for chaining
 */
export declare function display(): IDisplay;
export declare function display(show: boolean): Editor;
/**
 * Fields which are currently displayed
 *  @return {string[]} Field names that are shown
 */
export declare function displayed(this: Editor): (string | number)[];
/**
 * Get display controller node
 *
 *  @return {node} Display controller host element
 */
export declare function displayNode(this: Editor): any;
/**
 * Edit a record - show the form, pre-populated with the data that is in the given
 * DataTables row, that allows the user to enter information for the row to be modified
 * and then subsequently submit that data.
 *  @param {node} items The TR element from the DataTable that is to be edited
 *  @param {boolean} [show=true] Show the form or not.
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Show the edit form for the first row in the DataTable with a submit button
 *    editor.edit( $('#example tbody tr:eq(0)')[0], 'Edit record', {
 *      "label": "Update",
 *      "fn": function () { this.submit(); }
 *    } );
 *
 *  @example
 *    // Use the title and buttons API methods to show an edit form (this provides
 *    // the same result as example above, but is a different way of achieving it
 *    editor.title( 'Edit record' );
 *    editor.buttons( {
 *      "label": "Update",
 *      "fn": function () { this.submit(); }
 *    } );
 *    editor.edit( $('#example tbody tr:eq(0)')[0] );
 *
 *  @example
 *    // Automatically submit an edit without showing the user the form
 *    editor.edit( TRnode, null, null, false );
 *    editor.set( 'name', 'Updated name' );
 *    editor.set( 'access', 'Read only' );
 *    editor.submit();
 */
export declare function edit(this: Editor, items: any, arg1: any, arg2: any, arg3: any, arg4: any): Editor;
/**
 * Enable one or more field inputs, restoring user interaction with the fields.
 *  @param {string|array} name The field name (from the `name` parameter given when
 *   originally setting up the field) to enable, or an array of field names to enable
 *   multiple fields with a single call.
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Show a 'create' form with buttons which will enable and disable certain fields
 *    editor.create( 'Add new user', [
 *      {
 *        "label": "User name only",
 *        "fn": function () {
 *          this.enable('username');
 *          this.disable( ['first_name', 'last_name'] );
 *        }
 *      }, {
 *        "label": "Name based",
 *        "fn": function () {
 *          this.disable('username');
 *          this.enable( ['first_name', 'last_name'] );
 *        }
 *      }, {
 *        "label": "Submit",
 *        "fn": function () { this.submit(); }
 *      }
 *    );
 */
export declare function enable(this: Editor, name: any): Editor;
/**
 * Show that a field, or the form globally, is in an error state. Note that
 * errors are cleared on each submission of the form.
 *  @param {string} [name] The name of the field that is in error. If not
 *    given then the global form error display is used.
 *  @param {string} msg The error message to show
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Show an error if the field is required
 *    editor.create( 'Add new user', {
 *      "label": "Submit",
 *      "fn": function () {
 *        if ( this.get('username') === '' ) {
 *          this.error( 'username', 'A user name is required' );
 *          return;
 *        }
 *        this.submit();
 *      }
 *    } );
 *
 *  @example
 *    // Show a field and a global error for a required field
 *    editor.create( 'Add new user', {
 *      "label": "Submit",
 *      "fn": function () {
 *        if ( this.get('username') === '' ) {
 *          this.error( 'username', 'A user name is required' );
 *          this.error( 'The data could not be saved because it is incomplete' );
 *          return;
 *        }
 *        this.submit();
 *      }
 *    } );
 */
export declare function error(this: Editor): Editor;
export declare function error(this: Editor, msg: string): Editor;
export declare function error(this: Editor, name: string, msg: string): Editor;
/**
 * Get a field object, configured for a named field, which can then be
 * manipulated through its API. This function effectively acts as a
 * proxy to the field extensions, allowing easy access to the methods
 * for a named field. The methods that are available depend upon the field
 * type plug-in for Editor.
 *
 *   @param {string} name Field name to be obtained
 *   @return {Editor.Field} Field instance
 *
 *   @example
 *     // Update the values available in a select list
 *     editor.field('island').update( [
 *       'Lewis and Harris',
 *       'South Uist',
 *       'North Uist',
 *       'Benbecula',
 *       'Barra'
 *     ] );
 *
 *   @example
 *     // Equivalent calls
 *     editor.field('name').set('John Smith');
 *
 *     // results in the same action as:
 *     editor.set('John Smith');
 */
export declare function field(this: Editor, name: any): Field;
/**
 * Get a list of the fields that are used by the Editor instance.
 *  @returns {string[]} Array of field names
 *
 *  @example
 *    // Get current fields and move first item to the end
 *    var fields = editor.fields();
 *    var first = fields.shift();
 *    fields.push( first );
 *    editor.order( fields );
 */
export declare function fields(this: Editor): (string | number)[];
/**
 * Get data object for a file from a table and id
 *
 * @param  {string} name Table name
 * @param  {string|number} id Primary key identifier
 * @return {object} Table information
 */
export declare function file(name: string, id: string | number): any;
/**
 * Get data objects for available files
 *
 * @param  {string} [name] Table name
 * @return {object} Table array
 */
export declare function files(name: string): any;
/**
 * Get the value of a field
 *  @param {string|array} [name] The field name (from the `name` parameter given
 *    when originally setting up the field) to disable. If not given, then an
 *    object of fields is returned, with the value of each field from the
 *    instance represented in the array (the object properties are the field
 *    names). Also an array of field names can be given to get a collection of
 *    data from the form.
 *  @returns {*|object} Value from the named field
 *
 *  @example
 *    // Client-side validation - check that a field has been given a value
 *    // before submitting the form
 *    editor.create( 'Add new user', {
 *      "label": "Submit",
 *      "fn": function () {
 *        if ( this.get('username') === '' ) {
 *          this.error( 'username', 'A user name is required' );
 *          return;
 *        }
 *        this.submit();
 *      }
 *    } );
 */
export declare function get(this: Editor, name: any): any;
/**
 * Remove a field from the form display. Note that the field will still be submitted
 * with the other fields in the form, but it simply won't be visible to the user.
 *  @param {string|array} [name] The field name (from the `name` parameter given when
 *   originally setting up the field) to hide or an array of names. If not given then all
 *   fields are hidden.
 *  @param {boolean} [animate=true] Animate if visible
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Show a 'create' record form, but with some fields hidden
 *    editor.hide( 'account_type' );
 *    editor.hide( 'access_level' );
 *    editor.create( 'Add new user', {
 *      "label": "Save",
 *      "fn": function () { this.submit(); }
 *    } );
 *
 *  @example
 *    // Show a single field by hiding all and then showing one
 *    editor.hide();
 *    editor.show('access_type');
 */
export declare function hide(this: Editor, names: any, animate: any): Editor;
/**
 * Get the ids of the rows being edited
 */
export declare function ids(this: Editor, includeHash?: boolean): (string | number)[];
/**
 * Determine if there is an error state in the form, either the form's global
 * error message, or one or more fields.
 *
 * @param {string|array|undefined} [inNames] The field names to check. All
 *   fields checked if undefined.
 * @return {boolean} `true` if there is an error in the form
 */
export declare function inError(this: Editor, inNames: any): boolean;
/**
 * Inline editing. This method provides a method to allow
 * end users to very quickly edit fields in place. For example, a user could
 * simply click on a cell in a table, the contents of which would be replaced
 * with the editing input field for that cell.
 *
 * @param {string|node|DataTables.Api|cell-selector} cell The cell or field to
 *   be edited (note that for table editing this must be a cell - for standalone
 *   editing it can also be the field name to edit).
 * @param {string} [fieldName] The field name to be edited. This parameter is
 *   optional. If not provided, Editor will attempt to resolve the correct field
 *   from the cell / element given as the first parameter. If it is unable to do
 *   so, it will throw an error.
 * @param {object} [opts] Inline editing options - see the `form-options` type
 *  @return {Editor} Editor instance, for chaining
 */
export declare function inline(this: Editor, cell: any, fieldName: any, opts: any): Editor;
/**
 * Inline creation of data.
 */
export declare function inlineCreate(this: Editor, insertPoint: null | 'start' | 'end' | HTMLElement, opts: IFormOptions): Editor;
/**
 * Show an information message for the form as a whole, or for an individual
 * field. This can be used to provide helpful information to a user about an
 * individual field, or more typically the form (for example when deleting
 * a record and asking for confirmation).
 *  @param {string} [name] The name of the field to show the message for. If not
 *    given then a global message is shown for the form
 *  @param {string|function} msg The message to show
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Show a global message for a 'create' form
 *    editor.message( 'Add a new user to the database by completing the fields below' );
 *    editor.create( 'Add new user', {
 *      "label": "Submit",
 *      "fn": function () { this.submit(); }
 *    } );
 *
 *  @example
 *    // Show a message for an individual field when a 'help' icon is clicked on
 *    $('#user_help').click( function () {
 *      editor.message( 'user', 'The user name is what the system user will login with' );
 *    } );
 */
export declare function message(this: Editor, name: any, msg?: any): Editor;
/**
 * Get which mode of operation the Editor form is in
 *  @return {string} `create`, `edit`, `remove` or `null` if no active state.
 */
export declare function mode(this: Editor, mode: any): Editor | "create" | "edit" | "remove";
/**
 * Get the modifier that was used to trigger the edit or delete action.
 *  @return {*} The identifier that was used for the editing / remove method
 *    called.
 */
export declare function modifier(this: Editor): any;
/**
 * Get the values from one or more fields, taking into account multiple data
 * points being edited at the same time.
 *
 * @param  {string|array} fieldNames A single field name or an array of field
 *   names.
 * @return {object} If a string is given as the first parameter an object that
 *   contains the value for each row being edited is returned. If an array is
 *   given, then the object has the field names as the parameter name and the
 *   value is the value object with values for each row being edited.
 */
export declare function multiGet(this: Editor, fieldNames: any): any;
/**
 * Set the values for one or more fields, taking into account multiple data
 * points being edited at the same time.
 *
 * @param  {object|string} fieldNames The name of the field to set, or an object
 *   with the field names as the parameters that contains the value object to
 *   set for each field.
 * @param  {*} [val] Value to set if first parameter is given as a string.
 *   Otherwise it is ignored.
 *  @return {Editor} Editor instance, for chaining
 */
export declare function multiSet(this: Editor, fieldNames: any, val: any): Editor;
/**
 * Get the container node for an individual field.
 *  @param {string|array} name The field name (from the `name` parameter given
 *   when originally setting up the field) to get the DOM node for.
 *  @return {node|array} Field container node
 *
 *  @example
 *    // Dynamically add a class to a field's container
 *    $(editor.node( 'account_type' )).addClass( 'account' );
 */
export declare function node(this: Editor, name: any): HTMLElement | HTMLElement[];
/**
 * Remove a bound event listener to the editor instance. This method provides a
 * shorthand way of binding jQuery events that would be the same as writing
 * `$(editor).off(...)` for convenience.
 *  @param {string} name Event name to remove the listeners for - event names are
 *    defined by {@link Editor}.
 *  @param {function} [fn] The function to remove. If not given, all functions which
 *    are assigned to the given event name will be removed.
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Add an event to alert when the form is shown and then remove the listener
 *    // so it will only fire once
 *    editor.on( 'open', function () {
 *      alert('Form displayed!');
 *      editor.off( 'open' );
 *    } );
 */
export declare function off(this: Editor, name: any, fn: any): Editor;
/**
 * Listen for an event which is fired off by Editor when it performs certain
 * actions. This method provides a shorthand way of binding jQuery events that
 * would be the same as writing  `$(editor).on(...)` for convenience.
 *  @param {string} name Event name to add the listener for - event names are
 *    defined by {@link Editor}.
 *  @param {function} fn The function to run when the event is triggered.
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Log events on the console when they occur
 *    editor.on( 'open', function () { console.log( 'Form opened' ); } );
 *    editor.on( 'close', function () { console.log( 'Form closed' ); } );
 *    editor.on( 'submit', function () { console.log( 'Form submitted' ); } );
 */
export declare function on(this: Editor, name: any, fn: any): Editor;
/**
 * Listen for a single event event which is fired off by Editor when it performs
 * certain actions. This method provides a shorthand way of binding jQuery
 * events that would be the same as writing  `$(editor).one(...)` for
 * convenience.
 *  @param {string} name Event name to add the listener for - event names are
 *    defined by {@link Editor}.
 *  @param {function} fn The function to run when the event is triggered.
 *  @return {Editor} Editor instance, for chaining
 */
export declare function one(this: Editor, name: any, fn: any): Editor;
/**
 * Display the main form editor to the end user in the web-browser.
 *
 * Note that the `close()` method will close any of the three Editor form types
 * (main, bubble and inline), but this method will open only the main type.
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Build a 'create' form, but don't display it until some values have
 *    // been set. When done, then display the form.
 *    editor.create( 'Create user', {
 *      "label": "Submit",
 *      "fn": function () { this.submit(); }
 *    }, false );
 *    editor.set( 'name', 'Test user' );
 *    editor.set( 'access', 'Read only' );
 *    editor.open();
 */
export declare function open(this: Editor): Editor;
/**
 * Get or set the ordering of fields, as they are displayed in the form. When used as
 * a getter, the field names are returned in an array, in their current order, and when
 * used as a setting you can alter the field ordering by passing in an array with all
 * field names in their new order.
 *
 * Note that all fields *must* be included when reordering, and no additional fields can
 * be added here (use {@link Editor#add} to add more fields). Finally, for setting the
 * order, you can pass an array of the field names, or give the field names as individual
 * parameters (see examples below).
 *  @param {array|string} [set] Field order to set.
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Get field ordering
 *    var order = editor.order();
 *
 *  @example
 *    // Set the field order
 *    var order = editor.order();
 *    order.unshift( order.pop() ); // move the last field into the first position
 *    editor.order( order );
 *
 *  @example
 *    // Set the field order as arguments
 *    editor.order( "pupil", "grade", "dept", "exam-board" );
 *
 */
export declare function order(this: Editor): string[];
export declare function order(this: Editor, set: string[]): any;
export declare function order(this: Editor, ...set: string[]): any;
/**
 * Remove (delete) entries from the table. The rows to remove are given as
 * either a single DOM node or an array of DOM nodes (including a jQuery
 * object).
 *  @param {node|array} items The row, or array of nodes, to delete
 *  @param {boolean} [show=true] Show the form or not.
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Delete a given row with a message to let the user know exactly what is
 *    // happening
 *    editor.message( "Are you sure you want to remove this row?" );
 *    editor.remove( row_to_delete, 'Delete row', {
 *      "label": "Confirm",
 *      "fn": function () { this.submit(); }
 *    } );
 *
 *  @example
 *    // Delete the first row in a table without asking the user for confirmation
 *    editor.remove( '', $('#example tbody tr:eq(0)')[0], null, false );
 *    editor.submit();
 *
 *  @example
 *    // Delete all rows in a table with a submit button
 *    editor.remove( $('#example tbody tr'), 'Delete all rows', {
 *      "label": "Delete all",
 *      "fn": function () { this.submit(); }
 *    } );
 */
export declare function remove(this: Editor, items: any, arg1: any, arg2: any, arg3: any, arg4: any): Editor;
/**
 * Set the value of a field
 *  @param {string|object} name The field name (from the `name` parameter given
 *    when originally setting up the field) to set the value of. If given as an
 *    object the object parameter name will be the value of the field to set and
 *    the value the value to set for the field.
 *  @param {*} [val] The value to set the field to. The format of the value will
 *    depend upon the field type. Not required if the first parameter is given
 *    as an object.
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Set the values of a few fields before then automatically submitting the form
 *    editor.create( null, null, false );
 *    editor.set( 'name', 'Test user' );
 *    editor.set( 'access', 'Read only' );
 *    editor.submit();
 */
export declare function set(this: Editor, set: any, val: any): Editor;
/**
 * Show a field in the display that was previously hidden.
 *  @param {string|array} [names] The field name (from the `name` parameter
 *   given when originally setting up the field) to make visible, or an array of
 *   field names to make visible. If not given all fields are shown.
 *  @param {boolean} [animate=true] Animate if visible
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Shuffle the fields that are visible, hiding one field and making two
 *    // others visible before then showing the {@link Editor#create} record form.
 *    editor.hide( 'username' );
 *    editor.show( 'account_type' );
 *    editor.show( 'access_level' );
 *    editor.create( 'Add new user', {
 *      "label": "Save",
 *      "fn": function () { this.submit(); }
 *    } );
 *
 *  @example
 *    // Show all fields
 *    editor.show();
 */
export declare function show(this: Editor, names: any, animate: any): Editor;
/**
 * Submit a form to the server for processing. The exact action performed will depend
 * on which of the methods {@link Editor#create}, {@link Editor#edit} or
 * {@link Editor#remove} were called to prepare the form - regardless of which one is
 * used, you call this method to submit data.
 *  @param {function} [successCallback] Callback function that is executed once the
 *    form has been successfully submitted to the server and no errors occurred.
 *  @param {function} [errorCallback] Callback function that is executed if the
 *    server reports an error due to the submission (this includes a JSON formatting
 *    error should the error return invalid JSON).
 *  @param {function} [formatdata] Callback function that is passed in the data
 *    that will be submitted to the server, allowing pre-formatting of the data,
 *    removal of data or adding of extra fields.
 *  @param {boolean} [hide=true] When the form is successfully submitted, by default
 *    the form display will be hidden - this option allows that to be overridden.
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Submit data from a form button
 *    editor.create( 'Add new record', {
 *      "label": "Save",
 *      "fn": function () {
 *        this.submit();
 *      }
 *    } );
 *
 *  @example
 *    // Submit without showing the user the form
 *    editor.create( null, null, false );
 *    editor.submit();
 *
 *  @example
 *    // Provide success and error callback methods
 *    editor.create( 'Add new record', {
 *      "label": "Save",
 *      "fn": function () {
 *        this.submit( function () {
 *            alert( 'Form successfully submitted!' );
 *          }, function () {
 *            alert( 'Form  encountered an error :-(' );
 *          }
 *        );
 *      }
 *    } );
 *
 *  @example
 *    // Add an extra field to the data
 *    editor.create( 'Add new record', {
 *      "label": "Save",
 *      "fn": function () {
 *        this.submit( null, null, function (data) {
 *          data.extra = "Extra information";
 *        } );
 *      }
 *    } );
 *
 *  @example
 *    // Don't hide the form immediately - change the title and then close the form
 *    // after a small amount of time
 *    editor.create( 'Add new record', {
 *      "label": "Save",
 *      "fn": function () {
 *        this.submit(
 *          function () {
 *            var that = this;
 *            this.title( 'Data successfully added!' );
 *            setTimeout( function () {
 *              that.close();
 *            }, 1000 );
 *          },
 *          null,
 *          null,
 *          false
 *        );
 *      }
 *    } );
 *
 */
export declare function submit(this: Editor, successCallback?: any, errorCallback?: any, formatdata?: any, hide?: any): Editor;
/**
 * Get / set the DataTable assoc. with this Editor instance
 * @param  {string|node|jQuery|undefined} set If undefined, treat as a getter,
 *   otherwise set the host DataTable
 * @return {Editor|string|node|jQuery} Self is a setter, otherwise the DataTable
 *   / DataTable selector
 */
export declare function table(this: Editor, set: any): string | HTMLElement | Editor | JQuery<HTMLElement>;
/**
 * Get / set the form template
 * @param  {string|node|jQuery|undefined} set If undefined, treat as a getter,
 *   otherwise set as the template - usually a selector.
 * @return {Editor|string|node|jQuery} Self is a setter, otherwise the template
 */
export declare function template(this: Editor, set: any): Editor | JQuery<HTMLElement>;
/**
 * Set the title of the form
 *  @param {string|function} title The title to give to the form
 *  @return {Editor} Editor instance, for chaining
 *
 *  @example
 *    // Create an edit display used the title, buttons and edit methods (note that
 *    // this is just an example, typically you would use the parameters of the edit
 *    // method to achieve this.
 *    editor.title( 'Edit record' );
 *    editor.buttons( {
 *      "label": "Update",
 *      "fn": function () { this.submit(); }
 *    } );
 *    editor.edit( TR_to_edit );
 *
 *  @example
 *    // Show a create form, with a timer for the duration that the form is open
 *    editor.create( 'Add new record - time on form: 0s', {
 *      "label": "Save",
 *      "fn": function () { this.submit(); }
 *    } );
 *
 *    // Add an event to the editor to stop the timer when the display is removed
 *    var runTimer = true;
 *    var timer = 0;
 *    editor.on( 'close', function () {
 *      runTimer = false;
 *      editor.off( 'close' );
 *    } );
 *    // Start the timer running
 *    updateTitle();
 *
 *    // Local function to update the title once per second
 *    function updateTitle() {
 *      editor.title( 'Add new record - time on form: '+timer+'s' );
 *      timer++;
 *      if ( runTimer ) {
 *        setTimeout( function() {
 *          updateTitle();
 *        }, 1000 );
 *      }
 *    }
 */
export declare function title(this: Editor, title: any): string | Editor;
/**
 * Get or set the value of a specific field, or get the value of all fields in
 * the form.
 *
 * @param {string|array} [names] The field name(s) to get or set the value of.
 *   If not given, then the value of all fields will be obtained.
 * @param {*} [value] Value to set
 * @return {Editor|object|*} Editor instance, for chaining if used as a setter,
 *   an object containing the values of the requested fields if used as a
 *   getter with multiple fields requested, or the value of the requested field
 *   if a single field is requested.
 */
export declare function val(this: Editor): any;
export declare function val(this: Editor, field: string): any;
export declare function val(this: Editor, field: string, value: any): Editor;
