/// <reference types="jquery" />
/// <reference types="datatables.net" />
import Field from '../field/Field';
import { IFormOptions } from './formOptions';
export declare type IMode = null | 'bubble' | 'inline' | 'main';
export declare type IDisplay = false | 'bubble' | 'inline' | 'main';
export interface IAjaxOptions extends JQueryAjaxSettings {
    deleteBody?: boolean;
    data: (d: object) => object | void;
}
/**
 * Settings object for Editor - this provides the state for each instance of
 * Editor and can be accessed through the instance's `s` property. Note that the
 * settings object is considered to be "private" and thus is liable to change
 * between versions. As such if you do read any of the setting parameters,
 * please keep this in mind when upgrading!
 */
export interface ISettings {
    ajax: string | IAjaxOptions | Function;
    opts: any;
    /**
     * The display controller object for the Form.
     * This is directly set by the initialisation parameter / default of the same name.
     */
    displayController: any;
    dataSource: any;
    /**
     * The form fields - see {@link Editor.models.field} for details of the
     * objects held in this array.
     */
    fields: {
        [k: string]: Field;
    };
    /** Global error message */
    globalError: string;
    /**
     * Field order - order that the fields will appear in on the form. Array of strings,
     * the names of the fields.
     */
    order: string[];
    /**
     * The ID of the row being edited (set to -1 on create and remove actions)
     */
    id: number;
    /**
     * Flag to indicate if the form is currently displayed or not and what type of display
     */
    displayed: IDisplay;
    /**
     * Flag to indicate if the form is current in a processing state (true) or not (false)
     */
    processing: boolean;
    /**
     * Developer provided identifier for the elements to be edited (i.e. at
     * `dt-type row-selector` to select rows to edit or delete.
     */
    modifier: any;
    /**
     * The current form action - 'create', 'edit' or 'remove'. If no current action then
     * it is set to null.
     */
    action: null | 'create' | 'edit' | 'remove';
    /**
     * JSON property from which to read / write the row's ID property.
     */
    idSrc: string | number;
    /**
     * Unique instance counter to be able to remove events
     */
    unique: number;
    /**
     * Selector for the DataTable
     */
    table: string | HTMLElement | JQuery;
    /**
     * Form editing mode
     */
    mode: IMode;
    editFields: {
        [idSrc: string]: {
            idSrc?: string;
            data?: any;
            node?: HTMLElement;
            fields: {
                [name: string]: Field;
            };
            type?: 'row' | 'cell';
            attach?: HTMLElement[];
        };
    };
    editOpts: any;
    closeCb: null | ((complete: Function, mode: IMode) => void);
    closeIcb: null | (() => void);
    formOptions: {
        bubble: IFormOptions;
        inline: IFormOptions;
        main: IFormOptions;
    };
    template: JQuery;
    includeFields: string[];
    editData: {
        [field: string]: {
            [id: string]: any;
        };
    };
    setFocus: Field | JQuery;
    editCount: number;
    /** Name of the parameter used to indicate what action Editor is performing */
    actionName: string;
    bubbleNodes: HTMLElement[];
}
declare const settings: ISettings;
export default settings;
