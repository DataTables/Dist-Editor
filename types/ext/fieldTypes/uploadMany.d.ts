/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { ISharedUploadConf } from './shared';
export interface IUploadManyOptions extends ISharedUploadConf {
    /** Create a upload field for multiple files */
    type: 'uploadMany';
    limit?: number;
}
/** Internal properties used on the configuration object for the field */
export interface IUploadManyConf extends IUploadManyOptions {
    _container?: JQuery<HTMLElement>;
}
export declare const uploadMany: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    _showHide(conf: IUploadManyConf): void;
    canReturnSubmit(conf: any, node: any): false;
    create(conf: IUploadManyConf): JQuery<HTMLElement>;
    disable(conf: IUploadManyConf): void;
    enable(conf: IUploadManyConf): void;
    get(conf: IUploadManyConf): any;
    set(conf: IUploadManyConf, val: any): void;
};
export default uploadMany;
