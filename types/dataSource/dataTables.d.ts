declare const dataSource: {
    commit(action: any, identifier: any, data: any, store: any): void;
    create(fields: any, data: any): void;
    edit(identifier: any, fields: any, data: any, store: any): void;
    fakeRow(insertPoint: null | 'start' | 'end'): {
        0: {
            attach: any[];
            attachFields: any[];
            displayFields: {};
            fields: any;
            type: string;
        };
    };
    fakeRowEnd(): void;
    fields(identifier: any): {};
    id(data: any): any;
    individual(identifier: any, fieldNames: any): {};
    prep(action: any, identifier: any, submit: any, json: any, store: any): void;
    refresh(): void;
    remove(identifier: any, fields: any, store: any): void;
};
export default dataSource;
