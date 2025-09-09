/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IOptions } from '../../field/defaults';
export interface ITextOptions extends IOptions {
    /** Create a plain text input field */
    type: 'text';
    /** Set HTML attributes on the input element. */
    attr?: {
        [name: string]: any;
    };
}
/** Internal properties used on the configuration object for the field */
export interface ITextConf extends ITextOptions {
    _input?: JQuery<HTMLElement>;
}
declare const _default: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    create(conf: ITextConf): HTMLElement;
};
export default _default;
