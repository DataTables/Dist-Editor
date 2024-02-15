/// <reference types="jquery" />
/// <reference types="datatables.net" />
import Field from '../field/Field';
import { IFormOptions } from './formOptions';
export declare type IMode = null | 'bubble' | 'inline' | 'main';
export declare type IDisplay = false | 'bubble' | 'inline' | 'main';
export declare type IBubbleLocation = 'auto' | 'top' | 'bottom';
export interface IAjaxOptions extends JQueryAjaxSettings {
    data: (d: object) => object | void;
    deleteBody?: boolean;
}
/**
 * Settings object for Editor - this provides the state for each instance of
 * Editor and can be accessed through the instance's `s` property. Note that the
 * settings object is considered to be "private" and thus is liable to change
 * between versions. As such if you do read any of the setting parameters,
 * please keep this in mind when upgrading!
 */
export interface ISettings {
    /**
     * The current form action - 'create', 'edit' or 'remove'. If no current action then
     * it is set to null.
     */
    action: null | 'create' | 'edit' | 'remove';
    /** Name of the parameter used to indicate what action Editor is performing */
    actionName: string;
    ajax: string | IAjaxOptions | Function;
    bubbleNodes: HTMLElement[];
    bubbleBottom: boolean;
    bubbleLocation: IBubbleLocation;
    closeCb: null | ((complete: Function, mode: IMode) => void);
    closeIcb: null | (() => void);
    dataSource: any;
    /**
     * The display controller object for the Form.
     * This is directly set by the initialisation parameter / default of the same name.
     */
    displayController: any;
    /**
     * Flag to indicate if the form is currently displayed or not and what type of display
     */
    displayed: IDisplay;
    editCount: number;
    editData: {
        [field: string]: {
            [id: string]: any;
        };
    };
    editFields: {
        [idSrc: string]: {
            attach?: HTMLElement[];
            data?: any;
            fields: {
                [name: string]: Field;
            };
            idSrc?: string;
            node?: HTMLElement;
            type?: 'row' | 'cell';
        };
    };
    editOpts: any;
    /**
     * The form fields - see {@link Editor.models.field} for details of the
     * objects held in this array.
     */
    fields: {
        [k: string]: Field;
    };
    formOptions: {
        bubble: IFormOptions;
        inline: IFormOptions;
        main: IFormOptions;
    };
    /** Global error message */
    globalError: string;
    /**
     * The ID of the row being edited (set to -1 on create and remove actions)
     */
    id: number;
    /**
     * JSON property from which to read / write the row's ID property.
     */
    idSrc: string | number;
    includeFields: string[];
    /**
     * Form editing mode
     */
    mode: IMode;
    /**
     * Developer provided identifier for the elements to be edited (i.e. at
     * `dt-type row-selector` to select rows to edit or delete.
     */
    modifier: any;
    opts: any;
    /**
     * Field order - order that the fields will appear in on the form. Array of strings,
     * the names of the fields.
     */
    order: string[];
    /**
     * Flag to indicate if the form is current in a processing state (true) or not (false)
     */
    processing: boolean;
    setFocus: Field | JQuery;
    /**
     * Selector for the DataTable
     */
    table: string | HTMLElement | JQuery;
    template: JQuery;
    /**
     * Unique instance counter to be able to remove events
     */
    unique: number;
}
declare const settings: ISettings;
export default settings;
