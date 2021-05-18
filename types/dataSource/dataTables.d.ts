declare const dataSource: {
    id: (data: any) => any;
    fakeRow: (insertPoint: null | 'start' | 'end') => {
        0: {
            attachFields: any[];
            attach: any[];
            displayFields: {};
            fields: any;
            type: string;
        };
    };
    fakeRowEnd: () => void;
    individual: (identifier: any, fieldNames: any) => {};
    fields: (identifier: any) => {};
    create: (fields: any, data: any) => void;
    edit: (identifier: any, fields: any, data: any, store: any) => void;
    refresh: () => void;
    remove: (identifier: any, fields: any, store: any) => void;
    prep: (action: any, identifier: any, submit: any, json: any, store: any) => void;
    commit: (action: any, identifier: any, data: any, store: any) => void;
};
export default dataSource;
