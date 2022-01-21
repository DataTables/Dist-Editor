declare const dataSource: {
    create(fields: any, data: any): void;
    edit(identifier: any, fields: any, data: any): void;
    fields(identifier: any): {};
    id(data: any): any;
    individual(identifier: any, fieldNames: any): any;
    initField(cfg: any): void;
    remove(identifier: any, fields: any): void;
};
export default dataSource;
