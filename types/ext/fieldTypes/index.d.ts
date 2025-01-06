/// <reference types="jquery" />
/// <reference types="datatables.net" />
declare const _default: {
    autocomplete: import("../../model/fieldType").IFieldType;
    checkbox: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        _addOptions(conf: any, opts: any, append?: boolean): void;
        create(conf: any): any;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): string | any[];
        set(conf: any, val: any): void;
        update(conf: any, options: any, append: any): void;
    };
    datatable: import("../../model/fieldType").IFieldType & {
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
    datetime: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        create(conf: any): any;
        destroy(conf: any): void;
        errorMessage(conf: any, msg: any): void;
        get(conf: any): any;
        maxDate(conf: any, max: any): void;
        minDate(conf: any, min: any): void;
        owns(conf: any, node: any): any;
        set(conf: any, val: any): void;
    };
    hidden: {
        create(conf: any): any;
        get(conf: any): any;
        set(conf: any, val: any): void;
    };
    password: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        create(conf: any): any;
    };
    radio: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        _addOptions(conf: any, opts: any, append?: boolean): void;
        create(conf: any): any;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
        update(conf: any, options: any, append: any): void;
    };
    tags: import("../../model/fieldType").IFieldType;
    readonly: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        create(conf: any): any;
    };
    select: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        _addOptions(conf: any, opts: any, append?: boolean): void;
        create(conf: any): any;
        destroy(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any, localUpdate: any): false;
        update(conf: any, options: any, append: any): void;
    };
    text: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        create(conf: any): any;
    };
    textarea: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        canReturnSubmit(conf: any, node: any): false;
        create(conf: any): any;
    };
    upload: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        canReturnSubmit(conf: import("./shared").IUploadConf, node: any): false;
        create(conf: import("./shared").IUploadConf): JQuery<HTMLElement>;
        disable(conf: import("./shared").IUploadConf): void;
        enable(conf: import("./shared").IUploadConf): void;
        get(conf: import("./shared").IUploadConf): any;
        set(conf: import("./shared").IUploadConf, val: any): void;
    };
    uploadMany: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        _showHide(conf: import("./uploadMany").IUploadManyConf): void;
        canReturnSubmit(conf: any, node: any): false;
        create(conf: import("./uploadMany").IUploadManyConf): JQuery<HTMLElement>;
        disable(conf: import("./uploadMany").IUploadManyConf): void;
        enable(conf: import("./uploadMany").IUploadManyConf): void;
        get(conf: import("./uploadMany").IUploadManyConf): any;
        set(conf: import("./uploadMany").IUploadManyConf, val: any): void;
    };
};
export default _default;
