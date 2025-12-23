/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IOptions } from '../../field/defaults';
export interface IDatetimeOptions extends IOptions {
    /** Create a datetime field */
    type: 'datetime';
    /** Set HTML attributes on the input element. */
    attr?: {
        [name: string]: any;
    };
    /** The format of the date string that will be shown to the end user in the input element. */
    displayFormat?: string;
    /** An alias for the `displayFormat` option */
    format?: string;
    /** Allow (default), or disallow, the end user to type into the date / time input element. */
    keyInput?: boolean;
    /** Set locale for moment */
    momentLocale?: boolean;
    /** Set strict flag for moment */
    momentStrict?: boolean;
    /** Options for the date time picker. Please see the DateTime options reference */
    opts?: any;
    /** The format of the date string loaded from the server for the field's value and also for sending to the server on form submission. */
    wireFormat?: string;
}
/** Internal properties used on the configuration object for the field */
export interface IDatetimeConf extends IDatetimeOptions {
    _div?: JQuery<HTMLElement>;
    _input?: JQuery<HTMLElement>;
    _picker?: any;
    _closeFn?: Function;
}
declare const _default: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    create(conf: IDatetimeConf): HTMLElement;
    destroy(conf: IDatetimeConf): void;
    errorMessage(conf: IDatetimeConf, msg: string): void;
    get(conf: IDatetimeConf): any;
    maxDate(conf: IDatetimeConf, max: any): void;
    minDate(conf: IDatetimeConf, min: any): void;
    owns(conf: IDatetimeConf, node: any): any;
    set(conf: IDatetimeConf, val: any): void;
    inst(conf: IDatetimeConf): any;
};
export default _default;
