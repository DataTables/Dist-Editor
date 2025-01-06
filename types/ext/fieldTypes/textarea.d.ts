declare const _default: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    canReturnSubmit(conf: any, node: any): false;
    create(conf: any): any;
};
export default _default;
