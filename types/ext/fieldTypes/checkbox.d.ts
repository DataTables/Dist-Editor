/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IOptions } from '../../field/defaults';
export interface ICheckboxOptions extends IOptions {
    /** Create a checkbox field */
    type: 'checkbox';
    /** List of options to show in the checkboxes */
    options?: any[] | {
        [key: string]: any;
    };
    /** The property names to read from objects in the `options` array */
    optionsPair?: {
        label: string;
        value: string;
    };
    /** Split the value on the given string if the string contains multiple values */
    separator?: string | null;
    /** Value to give when no checkboxes are selected. */
    unselectedValue?: string | number;
}
/** Internal properties used on the configuration object for the field */
export interface ICheckboxConf extends ICheckboxOptions {
    _input?: JQuery<HTMLElement>;
}
declare const checkbox: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    _addOptions(conf: ICheckboxConf, opts: any, append?: boolean): void;
    create(conf: any): any;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): string | any[];
    set(conf: any, val: any): void;
    update(conf: any, options: any, append: any): void;
};
export default checkbox;
