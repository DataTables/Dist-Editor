/// <reference types="jquery" />
/// <reference types="datatables.net" />
export declare const hidden: {
    create(conf: any): any;
    get(conf: any): any;
    set(conf: any, val: any): void;
};
export declare const readonly: import("../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    create(conf: any): any;
};
export declare const text: import("../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    create(conf: any): any;
};
export declare const password: import("../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    create(conf: any): any;
};
export declare const textarea: import("../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    canReturnSubmit(conf: any, node: any): false;
    create(conf: any): any;
};
export declare const select: import("../model/fieldType").IFieldType & {
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
export declare const checkbox: import("../model/fieldType").IFieldType & {
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
export declare const radio: import("../model/fieldType").IFieldType & {
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
export declare const datetime: import("../model/fieldType").IFieldType & {
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
export declare const upload: import("../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    canReturnSubmit(conf: any, node: any): false;
    create(conf: any): JQuery<HTMLElement>;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
};
export declare const uploadMany: import("../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    _showHide(conf: any): void;
    canReturnSubmit(conf: any, node: any): false;
    create(conf: any): JQuery<HTMLElement>;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
};
export declare const datatable: import("../model/fieldType").IFieldType & {
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
