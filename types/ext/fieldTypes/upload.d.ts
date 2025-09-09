/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { ISharedUploadConf } from './shared';
export interface IUploadOptions extends ISharedUploadConf {
    /** Create a upload field for a single files */
    type: 'upload';
}
declare const upload: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    canReturnSubmit(conf: IUploadOptions, node: any): false;
    create(conf: IUploadOptions): JQuery<HTMLElement>;
    disable(conf: IUploadOptions): void;
    enable(conf: IUploadOptions): void;
    get(conf: IUploadOptions): any;
    set(conf: IUploadOptions, val: any): void;
};
export default upload;
