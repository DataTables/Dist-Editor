/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IOptions } from '../field/defaults';
export interface IFieldType {
    canReturnSubmit?: (conf: IOptions) => boolean;
    create: (conf: IOptions) => JQuery | void;
    destroy?: (conf: IOptions) => void;
    disable?: (conf: IOptions) => void;
    enable?: (conf: IOptions) => void;
    get: (conf: IOptions, fieldSpecific?: any) => any;
    input?: (conf: IOptions) => any;
    set: (conf: IOptions, val: any) => void;
    update?: (conf: IOptions, options: any, append?: boolean) => void;
    owns?: (conf: IOptions, node: Node) => boolean;
}
declare const fieldType: IFieldType;
export default fieldType;
