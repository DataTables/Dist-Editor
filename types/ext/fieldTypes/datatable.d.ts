/// <reference types="jquery" />
/// <reference types="datatables.net" />
declare const datatable: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    _addOptions(conf: any, options: any, append?: boolean): void;
    _jumpToFirst(conf: any, editor: any): void;
    create(conf: any): {
        input: JQuery<HTMLElement>;
        side: JQuery<HTMLElement>;
    };
    disable(conf: any): void;
    dt(conf: any): any;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any, localUpdate: any): void;
    tableClass: string;
    update(conf: any, options: any, append: any): void;
};
export default datatable;
