/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IOptions } from '../../field/defaults';
export interface IReadonlyOptions extends IOptions {
    /** Create a readonly field */
    type: 'readonly';
    /** Set HTML attributes on the hidden input element. */
    attr?: {
        [name: string]: any;
    };
}
/** Internal properties used on the configuration object for the field */
export interface IReadonlyConf extends IReadonlyOptions {
    _input?: JQuery<HTMLElement>;
}
declare const _default: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    create(conf: IReadonlyConf): HTMLElement;
};
export default _default;
