/// <reference types="jquery" />
import Editor from '../../Editor';
import { IOptions } from '../../field/defaults';
import { Config as DTOptions } from 'datatables.net';
export interface IDataTableOptions extends IOptions {
    /** Create a datatable field */
    type: 'datatable';
    /** A DataTables configuration object that can be used to customise the DataTable shown in the Editor modal */
    config?: DTOptions;
    /** The Editor instance that should be used for the nested table, if it is to be editable. */
    editor?: Editor;
    /** This option makes it possible to specify a footer for the table that is displayed by this control. */
    footer?: string[] | string;
    /** Indicate if the end user should be able to select multiple options from the select list. */
    multiple?: boolean;
    /** The values and labels to be used in the table. */
    options?: any[];
    /** The property names to read from objects in the `options` array */
    optionsPair?: {
        label: string;
        value: string;
    };
    /** Split the value on the given string if the string contains multiple values. Used with `multiple`. */
    separator?: string | null;
}
/** Internal properties used on the configuration object for the field */
export interface IDataTableConf extends IDataTableOptions {
    dt?: any;
    _lastSet?: any;
}
declare const datatable: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    _addOptions(conf: IDataTableConf, options: any, append?: boolean): void;
    _jumpToFirst(conf: IDataTableConf, editor: Editor): void;
    create(conf: IDataTableConf): {
        input: JQuery<HTMLElement>;
        side: JQuery<HTMLElement>;
    };
    disable(conf: IDataTableConf): void;
    dt(conf: IDataTableConf): any;
    enable(conf: IDataTableConf): void;
    get(conf: IDataTableConf): any;
    set(conf: IDataTableConf, val: any, localUpdate: any): void;
    tableClass: string;
    update(conf: IDataTableConf, options: any, append: any): void;
};
export default datatable;
