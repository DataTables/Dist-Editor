/// <reference types="jquery" />
/// <reference types="datatables.net" />
export declare const hidden: {
    create: (conf: any) => any;
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
};
export declare const readonly: import("../model/fieldType").IFieldType & {
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => true;
} & {
    create: (conf: any) => any;
};
export declare const text: import("../model/fieldType").IFieldType & {
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => true;
} & {
    create: (conf: any) => any;
};
export declare const password: import("../model/fieldType").IFieldType & {
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => true;
} & {
    create: (conf: any) => any;
};
export declare const textarea: import("../model/fieldType").IFieldType & {
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => true;
} & {
    create: (conf: any) => any;
    canReturnSubmit: (conf: any, node: any) => false;
};
export declare const select: import("../model/fieldType").IFieldType & {
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => true;
} & {
    _addOptions: (conf: any, opts: any, append?: boolean) => void;
    create: (conf: any) => any;
    update: (conf: any, options: any, append: any) => void;
    get: (conf: any) => any;
    set: (conf: any, val: any, localUpdate: any) => false;
    destroy: (conf: any) => void;
};
export declare const checkbox: import("../model/fieldType").IFieldType & {
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => true;
} & {
    _addOptions: (conf: any, opts: any, append?: boolean) => void;
    create: (conf: any) => any;
    get: (conf: any) => string | any[];
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    update: (conf: any, options: any, append: any) => void;
};
export declare const radio: import("../model/fieldType").IFieldType & {
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => true;
} & {
    _addOptions: (conf: any, opts: any, append?: boolean) => void;
    create: (conf: any) => any;
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    update: (conf: any, options: any, append: any) => void;
};
export declare const datetime: import("../model/fieldType").IFieldType & {
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => true;
} & {
    create: (conf: any) => any;
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    owns: (conf: any, node: any) => any;
    errorMessage: (conf: any, msg: any) => void;
    destroy: (conf: any) => void;
    minDate: (conf: any, min: any) => void;
    maxDate: (conf: any, max: any) => void;
};
export declare const upload: import("../model/fieldType").IFieldType & {
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => true;
} & {
    create: (conf: any) => JQuery<HTMLElement>;
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => false;
};
export declare const uploadMany: import("../model/fieldType").IFieldType & {
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => true;
} & {
    _showHide: (conf: any) => void;
    create: (conf: any) => JQuery<HTMLElement>;
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => false;
};
export declare const datatable: import("../model/fieldType").IFieldType & {
    get: (conf: any) => any;
    set: (conf: any, val: any) => void;
    enable: (conf: any) => void;
    disable: (conf: any) => void;
    canReturnSubmit: (conf: any, node: any) => true;
} & {
    _addOptions(conf: any, options: any, append?: boolean): void;
    create(conf: any): {
        input: JQuery<Node>;
        side: JQuery<HTMLElement>;
    };
    get(conf: any): any;
    set(conf: any, val: any, localUpdate: any): void;
    update: (conf: any, options: any, append: any) => void;
    dt: (conf: any) => any;
    tableClass: string;
};
