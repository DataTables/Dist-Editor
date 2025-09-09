/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IOptions } from '../../field/defaults';
export interface ITextareaOptions extends IOptions {
    /** Create a textarea field */
    type: 'textarea';
    /** Set HTML attributes on the input element. */
    attr?: {
        [name: string]: any;
    };
}
/** Internal properties used on the configuration object for the field */
export interface ITextareaConf extends ITextareaOptions {
    _input?: JQuery<HTMLElement>;
}
declare const _default: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    canReturnSubmit(conf: ITextareaConf, node: any): false;
    create(conf: ITextareaConf): HTMLElement;
};
export default _default;
