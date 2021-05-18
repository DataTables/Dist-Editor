declare const dataSource: {
    id: (data: any) => any;
    initField: (cfg: any) => void;
    individual: (identifier: any, fieldNames: any) => any;
    fields: (identifier: any) => {};
    create: (fields: any, data: any) => void;
    edit: (identifier: any, fields: any, data: any) => void;
    remove: (identifier: any, fields: any) => void;
};
export default dataSource;
