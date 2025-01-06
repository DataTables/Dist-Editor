declare const radio: import("../../model/fieldType").IFieldType & {
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
export default radio;
