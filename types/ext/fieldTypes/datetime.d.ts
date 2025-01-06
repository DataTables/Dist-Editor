declare const _default: import("../../model/fieldType").IFieldType & {
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
export default _default;
