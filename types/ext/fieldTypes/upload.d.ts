/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IUploadConf } from "./shared";
declare const upload: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    canReturnSubmit(conf: IUploadConf, node: any): false;
    create(conf: IUploadConf): JQuery<HTMLElement>;
    disable(conf: IUploadConf): void;
    enable(conf: IUploadConf): void;
    get(conf: IUploadConf): any;
    set(conf: IUploadConf, val: any): void;
};
export default upload;
