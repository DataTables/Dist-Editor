/// <reference types="jquery" />
import Editor from '../Editor';
import Field from '../field/Field';
import { IDisplay, IMode, ISettings, IBubbleLocation } from '../model/settings';
import { IFormOptions } from '../model/formOptions';
import type { Api } from 'datatables.net';
export declare type RowIdx = number;
export declare type RowSelector<T = any> = RowIdx | string | Node | JQuery | ((idx: RowIdx, data: T, node: Node | HTMLElement | null) => boolean) | RowSelector<T>[];
export declare type CellIdx = {
    row: number;
    column: number;
};
export declare type CellSelector = CellIdx | string | Node | JQuery | ((idx: CellIdx, data: any, node: Node | HTMLElement | null) => boolean) | CellSelector[];
export interface Button {
    /**
     * Callback function which the button is activated.
     */
    action: Function;
    /**
     * Attributes to add to the button
     */
    attr?: {
        [key: string]: any;
    };
    /**
     * The CSS class(es) to apply to the button to allow styling
     */
    className?: string;
    /**
     * Button tab index
     */
    tabIndex?: number;
    /**
     * The text to put into the button.
     */
    text: string;
}
interface DependentSend {
    /** Data read from the DataTable row */
    rows: any[];
    /** Current form values */
    values: any[];
}
interface DependentResult {
    /** Fields to disable */
    disable?: string[];
    /** Fields to enable */
    enable?: string[];
    /** Field error messages */
    errors?: {
        [field: string]: string;
    };
    /** Fields to hide */
    hide?: string[];
    /** Field labels */
    labels?: {
        [field: string]: string;
    };
    /** Field info messages */
    messages?: {
        [field: string]: string;
    };
    /** Field options (e.g. select, radio) */
    options?: {
        [field: string]: any;
    };
    /** Fields to show */
    show?: string[];
    /** Field values */
    values?: {
        [field: string]: any;
    };
}
interface DependentOptions {
    /** Event to listen for - `change` by default */
    event: string;
    /** Callback function that is executed immediately prior to executing the data fetch method */
    data: (d: any) => void;
    /** Function that can be used to transform the dependant result data */
    preUpdate: (d: DependentResult) => void;
    /** Form update complete */
    postUpdate: (d: DependentResult) => void;
}
interface DependentComplete {
    (result: DependentResult): void;
}
interface DependentCallback {
    (val: any, data: DependentSend, callback: DependentComplete, e: Event): DependentResult | Promise<DependentResult>;
}
/**
 * Add a new field to the from. This is the method that is called automatically when
 * fields are given in the initialisation objects as `Editor.defaults.fields`.
 *
 * @param this Editor instance
 * @param cfg The object that describes the field (the full
 *   object is described by `Editor.model.field`. Note that multiple
 *   fields can be given by passing in an array of field definitions.
 * @param after Existing field to insert the new field after. This
 *   can be `undefined` (insert at end), `null` (insert at start) or `string`
 *   the field name to insert after.
 * @param reorder INTERNAL for array adding performance only
 * @returns Editor instance
 */
export declare function add(this: Editor, cfg: any, after?: string, reorder?: boolean): Editor;
/**
 * Get the Ajax configuration for the Editor instance
 *
 * @return {object} Ajax configuration
 */
export declare function ajax(this: Editor): object;
/**
 * Set the Ajax configuration for the Editor instance
 *
 * @return {Editor} Editor instance
 */
export declare function ajax(this: Editor, newAjax: any): Editor;
/**
 * Perform background activation tasks.
 *
 * This is NOT publicly documented on the Editor web-site, but rather can be
 * used by display controller plug-ins to perform the required task on
 * background activation.
 *
 * @param this Editor instance
 * @returns Editor instance
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
 * @returns Editor instance
 */
export declare function blur(this: Editor): Editor;
/**
 * Trigger bubble editing
 *
 * @param this Editor instance
 * @param cells Cell(s) to bubble edit on
 * @param opts Form options
 * @returns Editor instance
 */
export declare function bubble(this: Editor, cells: RowSelector, opts?: IFormOptions): Editor;
/**
 * Trigger bubble editing
 *
 * @param this Editor instance
 * @param cells Cell(s) to bubble edit on
 * @param showIn Immediately show the bubble editing form (default) or not
 * @param opts Form options
 * @returns Editor instance
 */
export declare function bubble(this: Editor, cells: RowSelector, showIn?: boolean, opts?: IFormOptions): Editor;
/**
 * Trigger bubble editing
 *
 * @param this Editor instance
 * @param cells Cell(s) to bubble edit on
 * @param fieldNames Field name(s) to edit on for the selected cells
 * @param showIn Immediately show the bubble editing form (default) or not
 * @param opts Form options
 * @returns Editor instance
 */
export declare function bubble(this: Editor, cells: RowSelector, fieldNames?: string | string[], showIn?: boolean, opts?: IFormOptions): Editor;
/**
 * Set where the bubble should appear in relation to the field
 */
export declare function bubbleLocation(this: Editor): IBubbleLocation;
export declare function bubbleLocation(this: Editor, location: IBubbleLocation): Editor;
/**
 * Reposition the editing bubble (`bubble()`) when it is visible. This can be
 * used to update the bubble position if other elements on the page change
 * position. Editor will automatically call this method on window resize.
 *
 * @returns Editor instance
 */
export declare function bubblePosition(this: Editor): Editor;
/**
 * Setup the buttons that will be shown in the footer of the form - calling this
 * method will replace any buttons which are currently shown in the form.
 *
 * @param this Editor instance
 * @param buttonsIn A single button definition to add to the form or
 *   an array of objects with the button definitions to add more than one button.
 *   The options for the button definitions are fully defined by the
 * @returns Editor instance
 */
export declare function buttons(this: Editor, buttonsIn: string | Array<string | Button>): Editor;
/**
 * Remove fields from the form.
 *
 * @param this Editor instance
 * @param fieldName Field to remove
 * @returns Editor instance
 */
export declare function clear(this: Editor, fieldName?: string | string[]): Editor;
/**
 * Close the form display.
 *
 * @param this Editor instance
 * @returns Editor instance
 */
export declare function close(this: Editor): Editor;
/**
 * Create a new record - show the form that allows the user to enter information
 * for a new row and then subsequently submit that data.
 *
 * @param this Editor instance
 * @param options Form options
 * @returns Editor instance
 */
export declare function create(this: Editor, options?: IFormOptions): Editor;
/**
 * Create a new record - show the form that allows the user to enter information
 * for a new row and then subsequently submit that data.
 *
 * @param this Editor instance
 * @param show Show the create form
 * @param options Form options
 * @returns Editor instance
 */
export declare function create(this: Editor, show?: boolean, options?: IFormOptions): Editor;
/**
 * Create a new record - show the form that allows the user to enter information
 * for a new row and then subsequently submit that data.
 *
 * @param this Editor instance
 * @param count Number of rows to create
 * @param show Show the create form
 * @param options Form options
 * @returns Editor instance
 */
export declare function create(this: Editor, count?: number, show?: boolean, options?: IFormOptions): Editor;
/**
 * Create a new record - show the form that allows the user to enter information
 * for a new row and then subsequently submit that data.
 *
 * @param this Editor instance
 * @param title Form title
 * @param buttons Form buttons
 * @param show Show the create form
 * @returns Editor instance
 * @deprecated The overload is legacy from v1.0. The others should be used in preference.
 */
export declare function create(this: Editor, title?: string, buttons?: string | Button | Button[], show?: boolean, options?: IFormOptions): Editor;
/**
 * Remove dependent links from a field
 *
 * @param this Editor instance
 * @param parent The name of the field to remove the existing dependencies
 * @returns Editor instance
 */
export declare function undependent(this: Editor, parent: string | string[]): Editor;
/**
 * Create a dependent link between two or more fields. This method is used to
 * listen for a change in a field's value which will trigger updating of the
 * form. This update can consist of updating an options list, changing values
 * or making fields hidden / visible.
 *
 * @param this Editor instance
 * @param parent Field(s) to attach a dependency to
 * @param url Action to perform on data change
 * @param optsIn Configuration options
 * @returns Editor instance
 */
export declare function dependent(this: Editor, parent: string | string[], url: string | DependentCallback | JQuery.AjaxSettings, optsIn?: DependentOptions): Editor;
/**
 * Destroy the Editor instance, cleaning up fields, display and event handlers
 */
export declare function destroy(this: Editor): void;
/**
 * Disable one or more field inputs, disallowing subsequent user interaction with the
 * fields until they are re-enabled.
 *
 * @param this Editor instance
 * @param name Field(s) to disable. Disables all if not given.
 * @returns Editor instance
 */
export declare function disable(this: Editor, name?: string | string[]): Editor;
/**
 * Get the current display state of the Editor form
 *
 * @returns Editor instance
 */
export declare function display(): IDisplay;
/**
 * Display, or remove the main editing form from the display
 *
 * @param show 	Indicator to tell the method to show (true) or close (false)
 *   the editing display.
 * @returns Editor instance
 */
export declare function display(showIn: boolean): Editor;
/**
 * Get a list of the fields that are currently shown in the Editor form.
 *
 * @param this Editor instance
 * @returns Array of field names
 */
export declare function displayed(this: Editor): string[];
/**
 * Get display controller node
 *
 * @returns Display controller host element
 */
export declare function displayNode(this: Editor): Node;
/**
 * Edit an item using the main editing display
 *
 * @param this Editor instance
 * @param items The items to edit
 * @param options Form options
 * @returns Editor instance
 */
export declare function edit(this: Editor, items: RowSelector | CellSelector | Node | HTMLElement | JQuery, options?: IFormOptions): Editor;
/**
 * Edit an item using the main editing display
 *
 * @param this Editor instance
 * @param items The items to edit
 * @param show Immediately show the form or not
 * @param options Form options
 * @returns Editor instance
 */
export declare function edit(this: Editor, items: RowSelector | CellSelector | Node | HTMLElement | JQuery, show?: boolean, options?: IFormOptions): Editor;
/**
 *
 * @param this Editor instance
 * @param items Items to edit
 * @param title Form title
 * @param buttons Form buttons
 * @param show Immediate form display control
 * @returns Editor instance
 * @deprecated Use edit() with form options instead
 */
export declare function edit(this: Editor, items: RowSelector | CellSelector | Node | HTMLElement | HTMLElement | JQuery, title?: string, buttons?: string | Button | Button[], show?: boolean, formOptions?: IFormOptions): Editor;
/**
 * Enable one or more field inputs, restoring user interaction with the fields.
 *
 * @param this Editor instance
 * @param name Field(s) to enable. If not given, all fields in the form are enabled
 * @returns Editor instance
 */
export declare function enable(this: Editor, name?: string | string[]): Editor;
/**
 * Set the form's global error message
 *
 * @param this Editor instance
 * @param msg Error message to set. Use an empty string to clear
 * @returns Editor instance
 */
export declare function error(this: Editor, msg?: string): Editor;
/**
 * Set an error message for a specific field
 *
 * @param this Editor instance
 * @param name Field name to set the error message for
 * @param msg Error message. Use an empty string to clear.
 * @returns Editor instance
 */
export declare function error(this: Editor, name?: string, msg?: string): Editor;
/**
 * Get a field object, configured for a named field, which can then be
 * manipulated through its API.
 *
 * @param this Editor instance
 * @param name Field to get
 * @returns Field instance
 */
export declare function field(this: Editor, name: any): Field;
/**
 * Get a list of the fields that are used by the Editor instance.
 *
 * @param this Editor instance
 * @returns Editor instance
 */
export declare function fields(this: Editor): Array<string | number>;
/**
 * Get data object for a file from a table and id
 *
 * @param name Table name
 * @param id Primary key identifier
 * @returns File information
 */
export declare function file<T = any>(name: string, id: string | number): T;
/**
 * Get data for registered files
 *
 * @returns File information
 */
export declare function files<T = any>(): {
    [key: string]: {
        [key: string]: T;
    };
};
/**
 * Get data objects for available files
 *
 * @param name Table name
 * @returns File information
 */
export declare function files<T = any>(name: string): {
    [key: string]: T;
};
/**
 * Get the value of a field
 *
 * @param {string|array} [name] The field name (from the `name` parameter given
 * when originally setting up the field) to disable. If not given, then an
 * object of fields is returned, with the value of each field from the
 * instance represented in the array (the object properties are the field
 * names). Also an array of field names can be given to get a collection of
 * data from the form.
 * @returns {*|object} Value from the named field
 *
 * @example
 * // Client-side validation - check that a field has been given a value
 * // before submitting the form
 * editor.create( 'Add new user', {
 *  "label": "Submit",
 *  "fn": function () {
 *    if ( this.get('username') === '' ) {
 *      this.error( 'username', 'A user name is required' );
 *      return;
 *    }
 *    this.submit();
 *  }
 * } );
 */
/**
 * Get the value of a field in the form
 * @param name Field name
 * @returns Value
 */
export declare function get<T = any>(this: Editor, name: string): T;
/**
 * Get the value for all or some fields in the form
 * @param this Editor instance
 * @param names Field names to get. Will use all if not given
 * @returns Values for the fields, keyed by field name
 */
export declare function get(this: Editor, names?: string[]): {
    [key: string]: any;
};
/**
 * Hide one or more fields from the form display.
 *
 * @param this Editor instance
 * @param names Fields to hide. Will hide all if not given
 * @param animate Animate (default true)
 * @returns Editor instance
 */
export declare function hide(this: Editor, names?: any, animate?: any): Editor;
/**
 * Get the ids of the rows being edited
 *
 * @param includeHash Include a prefixed `#`, useful if to be used as a selector
 */
export declare function ids(this: Editor, includeHash?: boolean): Array<string | number>;
/**
 * Determine if there is an error state in the form, either the form's global
 * error message, or one or more fields.
 *
 * @param this Editor instance
 * @param inNames Fields to check. All checked if not given
 * @returns true if in error, false otherwise
 */
export declare function inError(this: Editor, inNames?: any): boolean;
/**
 * Activate inline editing.
 *
 * @param this Editor instance
 * @param cell Cell(s) to edit
 * @param opts Form options
 * @returns Editor instance
 */
export declare function inline(this: Editor, cell: string | Node | HTMLElement | RowSelector | CellSelector | Api<any>, opts?: IFormOptions): Editor;
/**
 * Activate inline editing.
 *
 * @param this Editor instance
 * @param cell Cell(s) to edit
 * @param fieldName Field name to edit
 * @param opts Form options
 * @returns Editor instance
 */
export declare function inline(this: Editor, cell: string | Node | HTMLElement | RowSelector | CellSelector | Api<any>, fieldName?: any, opts?: IFormOptions): Editor;
/**
 * Inline creation of data.
 *
 * @param this Editor instance
 * @param insertPoint Where to insert the create row
 * @param opts Form options
 * @returns Editor instance
 */
export declare function inlineCreate(this: Editor, insertPoint: null | 'start' | 'end' | HTMLElement, opts: IFormOptions): Editor;
/**
 * Clear a global information message
 *
 * @param this Editor instance
 */
export declare function message(this: Editor): Editor;
/**
 * Get a global information message
 *
 * @param this Editor instance
 * @param msg Message to set
 * @returns Editor instance
 */
export declare function message(this: Editor, msg?: string | Function): Editor;
/**
 * Set the information message for a field.
 *
 * @param this Editor instance
 * @param name Field name
 * @param msg Information message - use null to clear an existing message
 * @returns Editor instance
 */
export declare function message(this: Editor, name: any, msg?: string | Function): Editor;
/**
 * Get Editor's current mode of operation
 *
 * @param this Editor instance
 * @returns Current mode or null if not active
 */
export declare function mode(this: Editor): IMode | null;
/**
 * Set Editor's mode of operation
 *
 * @param this Editor instance
 * @param modeIn
 * @returns Editor instance
 */
export declare function mode(this: Editor, modeIn: IMode): Editor;
/**
 * Get the modifier that was used to trigger the edit or delete action.
 *
 * @returns The identifier that was used for the editing / remove method
 * called.
 */
export declare function modifier(this: Editor): any;
/**
 * Get the values for one or more fields (multi-row editing aware).
 *
 * @param this Editor instance
 * @param fieldNames Fields to get values for, or all fields if not given
 * @returns Editor instance
 */
export declare function multiGet(this: Editor, fieldNames?: Array<string | number>): any;
/**
 * Set the values for one or more fields (multi-row editing aware).
 *
 * @param this Editor instance
 * @param valIn Values to set
 */
export declare function multiSet(this: Editor, valIn: any): Editor;
/**
 * Set the values for one or more fields (multi-row editing aware).
 *
 * @param this Editor instance
 * @param fieldNames The field(s) to get the multi-row editing values of.
 * @param valIn Values to set
 * @returns Editor instance
 */
export declare function multiSet(this: Editor, fieldNames: any, valIn: any): Editor;
/**
 * Get the node for a field
 *
 * @param this Editor instance
 * @param name Field name
 */
export declare function node(this: Editor, name: string): HTMLElement;
/**
 * Get the nodes for multiple fields
 *
 * @param this Editor instance
 * @param name Fields names to filter to, or all if not given
 * @returns Field notes
 */
export declare function node(this: Editor, name?: string[]): HTMLElement[];
/**
 * Remove a bound event listener to the editor instance.
 *
 * @param this Editor instance
 * @param name Event name to remove
 * @param fn Handler to remove, or all if not specified
 * @returns Editor instance
 */
export declare function off(this: Editor, name: string, fn?: Function): Editor;
/**
 * Listen for an event which is fired off by Editor when it performs certain
 * actions.
 *
 * @param this Editor instance
 * @param name Event to listen for
 * @param fn Event handler to apply
 * @returns Editor instance
 */
export declare function on(this: Editor, name: string, fn: Function): Editor;
/**
 * Listen for a single event event which is fired off by Editor when it performs
 * certain actions
 *
 * @param this Editor instance
 * @param name Event to listen for
 * @param fn Event handler to apply
 * @returns Editor instance
 */
export declare function one(this: Editor, name: string, fn: Function): Editor;
/**
 * Display the main form editor to the end user in the web-browser.
 *
 * @param this Editor instance
 * @returns Editor instance
 */
export declare function open(this: Editor): Editor;
/**
 * Get the ordering of fields as displayed in the field
 *
 * @param this Editor instance
 * @returns Field names in order
 */
export declare function order(this: Editor): string[];
/**
 * Set the ordering of fields as displayed in the field
 *
 * @param this Editor instance
 * @param setIn Array of field names in their new order
 * @returns Editor instance
 */
export declare function order(this: Editor, setIn: string[]): Editor;
/**
 * Set the ordering of fields as displayed in the field
 *
 * @param this Editor instance
 * @param setIn Fields names in new order
 * @returns Editor instance
 */
export declare function order(this: Editor, ...setIn: string[]): Editor;
/**
 * Delete rows from a table
 *
 * @param this Editor instance
 * @param items Rows to be deleted
 * @param options Form options
 * @returns Editor instance
 */
export declare function remove(this: Editor, items: RowSelector | Node | HTMLElement | string | Api<any>, options?: IFormOptions): Editor;
/**
 * Delete rows from a table
 *
 * @param this Editor instance
 * @param items Rows to be deleted
 * @param show Control the form's immediate display
 * @param options Form options
 * @returns Editor instance
 */
export declare function remove(this: Editor, items: RowSelector | Node | HTMLElement | string | Api<any>, show?: boolean, options?: IFormOptions): Editor;
/**
 * Delete rows from a table
 *
 * @param this Editor instance
 * @param items Rows to be deleted
 * @param title Form title
 * @param buttons Form buttons
 * @param show Show the form
 * @param options Form options
 * @returns Editor instance
 * @deprecated Use the form options overload
 */
export declare function remove(this: Editor, items: RowSelector | Node | HTMLElement | string | Api<any>, title?: string, buttons?: string | Button | Button[], show?: boolean, options?: IFormOptions): Editor;
/**
 * Set the value of a field
 *
 * @param this Editor instance
 * @param field Field name
 * @param value Value
 * @returns Editor instance
 */
export declare function set(this: Editor, field: string, value: any): Editor;
/**
 * Set the value of multiple fields
 *
 * @param this Editor instance
 * @param values Field values, keyed by field names to set
 * @returns Editor instance
 */
export declare function set(this: Editor, values: {
    [key: string]: any;
}): Editor;
/**
 * Show fields in the display that were previously hidden.
 *
 * @param this Editor instance
 * @param names Field(s) to show. All if not given.
 * @param animate Animate the visual change or not
 * @returns Editor instance
 */
export declare function show(this: Editor, names?: string | string[], animate?: boolean): Editor;
/**
 * Submit a form for processing.
 *
 * @param this Editor instance
 * @param successCallback Function executed when submit is completed
 * @param errorCallback Function executed on error
 * @param formatdata Data formatting function
 * @param hideIn Disable default close action by passing in false
 * @returns Editor instance
 */
export declare function submit(this: Editor, successCallback?: () => void, errorCallback?: () => void, formatdata?: (data: any) => void, hideIn?: boolean): Editor;
/**
 * Get the DataTable assoc. with this Editor instance
 *
 * @param this Editor instance
 * @returns DataTable configured for this instance
 */
export declare function table(this: Editor): ISettings['table'];
/**
 * Set the DataTable assoc. with this Editor instance
 *
 * @param this Editor instance
 * @param setIn DataTable to set
 * @returns Editor instance
 */
export declare function table(this: Editor, setIn: ISettings['table']): Editor;
/**
 * Get the template element to use for the main form
 *
 * @param this Editor instance
 * @returns Template element. Null if none set
 */
export declare function template(this: Editor): JQuery | null;
/**
 * Set the template element to use for the main form
 *
 * @param this Editor instance
 * @param setIn Element to use for the form template
 * @returns Editor instance
 */
export declare function template(this: Editor, setIn: string | JQuery | HTMLElement | null): Editor;
/**
 * Get the form title
 *
 * @param this Editor instance
 * @returns Form title
 */
export declare function title(this: Editor): string;
/**
 * Set the form title
 *
 * @param this Editor instance
 * @param titleIn Title to set
 * @returns Editor instance
 */
export declare function title(this: Editor, titleIn: string | ((e: Editor, dt: Api<any>) => string)): Editor;
/**
 * Get or set the value of a specific field, or get the value of all fields in
 * the form.
 *
 * @param {string|array} [names] The field name(s) to get or set the value of.
 * If not given, then the value of all fields will be obtained.
 * @param {*} [value] Value to set
 * @return {Editor|object|*} Editor instance, for chaining if used as a setter,
 * an object containing the values of the requested fields if used as a
 * getter with multiple fields requested, or the value of the requested field
 * if a single field is requested.
 */
/**
 * Get field values
 *
 * @param this Editor instance
 * @param fieldIn Fields to get value of. If not given, get values of all fields
 */
export declare function val(this: Editor, fieldIn?: string | string[]): any;
/**
 * Set field values
 *
 * @param this Editor instance
 * @param values Values from which to set fields
 * @returns Editor instance
 */
export declare function val(this: Editor, values: {
    [key: string]: any;
}): Editor;
/**
 * Set field values, filtered to list of fields
 *
 * @param this Editor instance
 * @param fieldIn Field names (filterd value)
 * @param values Values from which to set fields
 * @returns Editor instance
 */
export declare function val(this: Editor, fieldIn: string, values: {
    [key: string]: any;
}): Editor;
export {};
