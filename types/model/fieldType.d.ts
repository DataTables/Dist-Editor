/// <reference types="jquery" />
/// <reference types="datatables.net" />
export interface IFieldType {
    create: (conf: any) => JQuery | void;
    disable?: (conf: any) => void;
    enable?: (conf: any) => void;
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
}
declare const fieldType: IFieldType;
export default fieldType;
