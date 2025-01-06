/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IUploadConf } from "./shared";
export interface IUploadManyConf extends IUploadConf {
    limit?: number;
    _container: JQuery<HTMLElement>;
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
