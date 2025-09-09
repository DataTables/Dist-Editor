/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IOptions } from '../../field/defaults';
export interface ISelectOptions extends IOptions {
    /** Create a select field */
    type: 'select';
    /** Set HTML attributes on the input element. */
    attr?: {
        [name: string]: any;
    };
    /** Indicate if the end user should be able to select multiple options from the select list. */
    multiple?: boolean;
    /** @ignore Legacy alias of `options` */
    ipOpts?: any[] | {
        [key: string]: any;
    };
    /** List of options to show in the radio values */
    options?: any[] | {
        [key: string]: any;
    };
    /** The property names to read from objects in the `options` array */
    optionsPair?: {
        label: string;
        value: string;
    };
    /** Show a pseudo value when there is no option selected */
    placeholder?: any;
    /** Allow (or not) the end user to select the placeholder option */
    placeholderDisabled?: boolean;
    /** Assign a value to the placeholder value if it is allowed to be selected */
    placeholderValue?: string;
    /** Split the value on the given string if the string contains multiple values. Used with `multiple`. */
    separator?: string | null;
    /** Value to give when no radio boxes are selected. */
    unselectedValue?: string | number;
}
/** Internal properties used on the configuration object for the field */
export interface ISelectConf extends ISelectOptions {
    _input?: JQuery<HTMLSelectElement>;
    _lastSet?: any;
}
declare const select: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    _addOptions(conf: ISelectConf, opts: any, append?: boolean): void;
    create(conf: ISelectConf): HTMLSelectElement;
    destroy(conf: ISelectConf): void;
    get(conf: ISelectConf): any;
    set(conf: ISelectConf, val: any, localUpdate: any): false;
    update(conf: ISelectConf, options: any, append: any): void;
};
export default select;
