/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IOptions } from '../../field/defaults';
export interface IPasswordOptions extends IOptions {
    /** Create a password field */
    type: 'password';
    /** Set HTML attributes on the input element. */
    attr?: {
        [name: string]: any;
    };
}
/** Internal properties used on the configuration object for the field */
export interface IPasswordConf extends IPasswordOptions {
    _input?: JQuery<HTMLElement>;
}
declare const _default: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    create(conf: IPasswordConf): HTMLElement;
};
export default _default;
