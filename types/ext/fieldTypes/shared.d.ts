/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IOptions } from '../../field/defaults';
export interface ISharedUploadOptions extends IOptions {
    ajax?: string | JQueryAjaxSettings | ((files: any, fn: (ids: any[]) => void) => void);
    ajaxData?: (data: any, files: any, counter: number) => void;
    attr?: {
        [key: string]: string | number;
    };
    clearText?: string;
    display?: (val: any, counter?: number) => string;
    dragDrop?: boolean;
    dragDropText?: string;
    errors?: {
        [key: string]: string;
    };
    fileReadText?: string;
    noFileText?: string;
    processingText?: string;
}
/** Internal properties used on the configuration object for the field */
export interface ISharedUploadConf extends ISharedUploadOptions {
    _input?: JQuery<HTMLElement>;
    _enabled?: boolean;
    _limitLeft?: number;
    _val?: any;
    _many?: boolean;
}
export declare function buttonText(conf: any, textIn?: any): void;
export declare function commonUpload(upload: any, editor: any, conf: ISharedUploadConf, dropCallback: any, multiple?: boolean): JQuery<HTMLElement>;
export declare function triggerChange(input: any): void;
declare let baseFieldType: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
};
export default baseFieldType;
