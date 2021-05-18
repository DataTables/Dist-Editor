/// <reference types="jquery" />
/// <reference types="datatables.net" />
export interface IFieldType {
    create: (conf: any) => JQuery | void;
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable?: (conf: any) => void;
    disable?: (conf: any) => void;
}
declare const fieldType: IFieldType;
export default fieldType;
