import Editor from '../Editor';
import { IFormOptions } from '../model/formOptions';
import { IAjaxOptions } from '../model/settings';
export interface IReplacements {
    [name: string]: (this: Editor, name: string, id: string, action: string, data: any) => string;
}
export interface IEditorAjax extends IAjaxOptions {
    deleteBody?: boolean;
    replacements?: IReplacements;
}
/**
 * Set the class on the form to relate to the action that is being performed.
 * This allows styling to be applied to the form to reflect the state that
 * it is in.
 *
 * @private
 */
export declare function _actionClass(this: Editor): void;
/**
 * Create an Ajax request in the same style as DataTables 1.10, with full
 * backwards compatibility for Editor 1.2.
 *
 * @param  {object} data Data to submit
 * @param  {function} success Success callback
 * @param  {function} error Error callback
 * @param  {object} submitParams Submitted data
 * @private
 */
export declare function _ajax(this: Editor, data: any, success: any, error: any, submitParams: any): void;
/**
 * Abstraction for jQuery's animate method, to support jQuery slim which doesn't
 * include the animate module
 *
 * @private
 */
export declare function _animate(this: Editor, target: any, style: any, time?: any, callback?: any): void;
/**
 * Create the DOM structure from the source elements for the main form.
 * This is required since the elements can be moved around for other form types
 * (bubble).
 *
 * @private
 */
export declare function _assembleMain(this: Editor): void;
/**
 * Blur the editing window. A blur is different from a close in that it might
 * cause either a close or the form to be submitted. A typical example of a
 * blur would be clicking on the background of the bubble or main editing forms
 * - i.e. it might be a close, or it might submit depending upon the
 * configuration, while a click on the close box is a very definite close.
 *
 * @private
 */
export declare function _blur(this: Editor): void;
/**
 * Clear all of the information that might have been dynamically set while
 * the form was visible - specifically errors and dynamic messages
 *
 * @private
 */
export declare function _clearDynamicInfo(this: Editor, errorsOnly?: boolean): void;
/**
 * Close an editing display, firing callbacks and events as needed
 *
 * @param  {function} submitComplete Function to call after the preClose event
 * @param  {string} mode Editing mode that is just finished
 * @private
 */
export declare function _close(this: Editor, submitComplete?: any, mode?: any): void;
/**
 * Register a function to be called when the editing display is closed. This is
 * used by function that create the editing display to tidy up the display on
 * close - for example removing event handlers to prevent memory leaks.
 *
 * @param  {function} fn Function to call on close
 * @private
 */
export declare function _closeReg(this: Editor, fn: any): void;
/**
 * Argument shifting for the create(), edit() and remove() methods. In Editor
 * 1.3 the preferred form of calling those three methods is with just two
 * parameters (one in the case of create() - the id and the show flag), while in
 * previous versions four / three parameters could be passed in, including the
 * buttons and title options. In 1.3 the chaining API is preferred, but we want
 * to support the old form as well, so this function is provided to perform
 * that argument shifting, common to all three.
 *
 * @private
 */
export declare function _crudArgs(this: Editor, arg1: any, arg2: any, arg3: any, arg4: any): {
    maybeOpen(): void;
    opts: any;
};
/**
 * Execute the data source abstraction layer functions. This is simply a case
 * of executing the function with the Editor scope, passing in the remaining
 * parameters.
 *
 * @param {string} name Function name to execute
 * @private
 */
export declare function _dataSource(this: Editor, name: any, ...args: any[]): any;
/**
 * Insert the fields into the DOM, in the correct order
 *
 * @private
 */
export declare function _displayReorder(this: Editor, includeFields?: any): void;
/**
 * Generic editing handler. This can be called by the three editing modes (main,
 * bubble and inline) to configure Editor for a row edit, and fire the required
 * events to ensure that the editing interfaces all provide a common API.
 *
 * @param {*} rows Identifier for the item(s) to be edited
 * @param {string} type Editing type - for the initEdit event
 * @private
 */
export declare function _edit(this: Editor, items: any, editFields: any, type: any, formOptions: any, setupDone: any): void;
/**
 * Fire callback functions and trigger events.
 *
 * @param {string|array} trigger Name(s) of the jQuery custom event to trigger
 * @param {array} args Array of arguments to pass to the triggered event
 * @return {*} Return from the event
 * @private
 */
export declare function _event(this: Editor, trigger: any, args?: any[], promiseComplete?: any): any;
/**
 * 'Modernise' event names, from the old style `on[A-Z]` names to camelCase.
 * This is done to provide backwards compatibility with Editor 1.2- event names.
 * The names themselves were updated for consistency with DataTables.
 *
 * @param {string} Event name to modernise
 * @return {string} String with new event name structure
 * @private
 */
export declare function _eventName(this: Editor, input: any): any;
/**
 * Find a field from a DOM node. All children are searched.
 *
 * @param  {node} node DOM node to search for
 * @return {Field}     Field instance
 */
export declare function _fieldFromNode(this: Editor, node: any): any;
/**
 * Convert a field name input parameter to an array of field names.
 *
 * Many of the API methods provide the ability to pass `undefined` a string or
 * array of strings to identify fields. This method harmonises that.
 *
 * @param  {array|string} [fieldNames] Field names to get
 * @return {array}                     Field names
 * @private
 */
export declare function _fieldNames(this: Editor, fieldNames: any): any[];
/**
 * Focus on a field. Providing the logic to allow complex focus expressions
 *
 * @param {array} fields Array of Field instances or field names for the fields
 * that are shown
 * @param {null|string|integer} focus Field identifier to focus on
 * @private
 */
export declare function _focus(this: Editor, fieldsIn: any, focus: any): void;
/**
 * Form options - common function so all editing methods can provide the same
 * basic options, DRY.
 *
 * @param {object} opts Editing options. See model.formOptions
 * @private
 */
export declare function _formOptions(this: Editor, opts: IFormOptions): string;
/**
 * Inline editing insertion of fields
 */
export declare function _inline(this: Editor, editFields: any, opts: any, closeCb?: any): Editor;
/**
 * Add a triggering action for inline editing, with a return function that
 * will tidy up the events.
 *
 * @param  type Action
 * @param  opts Form options object
 * @param  insertPoint Insert point in the DOM
 * @private
 */
export declare function _inputTrigger(this: Editor, type: 'submit' | 'cancel', opts: any, insertPoint: any): () => void;
/**
 * Update the field options from a JSON data source
 *
 * @param  {object} json JSON object from the server
 * @private
 */
export declare function _optionsUpdate(this: Editor, json: any): void;
/**
 * Show a message in the form. This can be used for error messages or dynamic
 * messages (information display) as the structure for each is basically the
 * same. This method will take into account if the form is visible or not - if
 * so then the message is shown with an effect for the end user, otherwise
 * it is just set immediately.
 *
 * @param {element} el The field display node to use
 * @param {string|function} msg The message to show
 * @private
 */
export declare function _message(this: Editor, el: any, msg: any, title?: any, fn?: any): void;
/**
 * Update the multi-value information display to not show redundant information
 *
 * @private
 */
export declare function _multiInfo(this: Editor): void;
/**
 * Close the current form, which can result in the display controller
 * hiding its display, or showing a form from a level up if nesting
 */
export declare function _nestedClose(this: Editor, cb: () => void): void;
/**
 * Display a form, adding it to the display stack for nesting
 */
export declare function _nestedOpen(this: Editor, cb: () => void, nest: boolean): void;
/**
 * Common display editing form method called by all editing methods after the
 * form has been configured and displayed. This is to ensure all fire the same
 * events.
 *
 * @param  {string} type Editing type
 * @param  {boolean} immediate indicate if the open is immediate (in which case
 * `opened` is also triggered).
 * @return {boolean} `true`
 * @private
 */
export declare function _postopen(this: Editor, type: any, immediate: any): boolean;
/**
 * Common display editing form method called by all editing methods before the
 * form has been configured and displayed. This is to ensure all fire the same
 * events.
 *
 * @param  {string} Editing type
 * @return {boolean} `false` if the open is cancelled by the preOpen event,
 * otherwise `true`
 * @private
 */
export declare function _preopen(this: Editor, type: any): boolean;
/**
 * Set the form into processing mode or take it out of processing mode. In
 * processing mode a processing indicator is shown and user interaction with the
 * form buttons is blocked
 *
 * @param {boolean} processing true if to go into processing mode and false if
 * to come out of processing mode
 * @private
 */
export declare function _processing(this: Editor, processing: any): void;
/**
 * Check if any of the fields are processing for the submit to carry on. It
 * can recurse.
 *
 * @private
 */
export declare function _noProcessing(this: Editor, args: any): boolean;
/**
 * Submit a form to the server for processing. This is the private method that is used
 * by the 'submit' API method, which should always be called in preference to calling
 * this method directly.
 *
 * @param {function} [successCallback] Callback function that is executed once the
 * form has been successfully submitted to the server and no errors occurred.
 * @param {function} [errorCallback] Callback function that is executed if the
 * server reports an error due to the submission (this includes a JSON formatting
 * error should the error return invalid JSON).
 * @param {function} [formatdata] Callback function that is passed in the data
 * that will be submitted to the server, allowing pre-formatting of the data,
 * removal of data or adding of extra fields.
 * @param {boolean} [hide=true] When the form is successfully submitted, by default
 * the form display will be hidden - this option allows that to be overridden.
 * @private
 */
export declare function _submit(this: Editor, successCallback: any, errorCallback: any, formatdata: any, hide: any): void;
/**
 * Save submitted data without an Ajax request. This will write to a local
 * table only - not saving it permanently, but rather using the DataTable itself
 * as a data store.
 *
 * @param  {object} data Data to submit
 * @param  {function} success Success callback
 * @param  {function} error Error callback
 * @param  {object} submitParams Submitted data
 * @private
 */
export declare function _submitTable(this: Editor, data: any, success: any, error: any, submitParams: any): void;
/**
 * Submit success callback function
 *
 * @param  {object} json                Payload
 * @param  {bool} notGood               True if the returned status code was
 * >=400 (i.e. processing failed). This is called `notGood` rather than
 * `success` since the request was successfully processed, just not written to
 * the db. It is also inverted from "good" to make it optional when overriding
 * the `ajax` function.
 * @param  {object} submitParams        Submitted data
 * @param  {object} submitParamsLocal   Unmodified copy of submitted data
 * (before it could be modified by the user)
 * @param  {string} action              CRUD action being taken
 * @param  {int} editCount              Protection against async errors
 * @param  {bool} hide                  Hide the form flag
 * @param  {function} successCallback   Success callback
 * @param  {function} errorCallback     Error callback
 * @private
 */
export declare function _submitSuccess(this: Editor, json: any, notGood: any, submitParams: any, submitParamsLocal: any, action: any, editCount: any, hide: any, successCallback: any, errorCallback: any, xhr: any): void;
/**
 * Submit error callback function
 *
 * @private
 */
export declare function _submitError(this: Editor, xhr: any, err: any, thrown: any, errorCallback: any, submitParams: any, action: any): void;
/**
 * Check to see if the form needs to be tidied before a new action can be performed.
 * This includes if the from is currently processing an old action and if it
 * is inline editing.
 *
 * @param {function} fn Callback function
 * @returns {boolean} `true` if was in inline mode, `false` otherwise
 * @private
 */
export declare function _tidy(this: Editor, fn: any): boolean;
/**
 * Same as $.inArray but with weak type checking
 *
 * @param {any} name Value to look for in the array
 * @param {array} arr Array to scan through
 * @returns {number} -1 if not found, index otherwise
 */
export declare function _weakInArray(this: Editor, name: any, arr: any): number;
