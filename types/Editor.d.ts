import modelSettings from './model/settings';
import classNames from './ext/classes';
import * as publicApi from './core/api';
import * as staticApi from './core/api-static';
import * as privateApi from './core/private';
import Field from './field/Field';
import { IFieldType } from './model/fieldType';
import './core/api-dt';
import './ext/buttons';
export default class Editor {
    static fieldTypes: {
        [type: string]: IFieldType;
    };
    static files: {};
    static version: string;
    static classes: {
        wrapper: string;
        processing: {
            indicator: string;
            active: string;
        };
        header: {
            wrapper: string;
            content: string;
        };
        body: {
            wrapper: string;
            content: string;
        };
        footer: {
            wrapper: string;
            content: string;
        };
        form: {
            wrapper: string;
            content: string;
            tag: string;
            info: string;
            error: string;
            buttons: string;
            button: string;
            buttonInternal: string;
        };
        field: {
            wrapper: string;
            typePrefix: string;
            namePrefix: string;
            label: string;
            input: string;
            inputControl: string;
            error: string;
            "msg-label": string;
            "msg-error": string;
            "msg-message": string;
            "msg-info": string;
            multiValue: string;
            multiInfo: string;
            multiRestore: string;
            multiNoEdit: string;
            disabled: string;
            processing: string;
        };
        actions: {
            create: string;
            edit: string;
            remove: string;
        };
        inline: {
            wrapper: string;
            liner: string;
            buttons: string;
        };
        bubble: {
            wrapper: string;
            liner: string;
            table: string;
            close: string;
            pointer: string;
            bg: string;
        };
    };
    static Field: typeof Field;
    static DateTime: any;
    static error: typeof staticApi.error;
    static pairs: typeof staticApi.pairs;
    static safeId: (id: string) => string;
    static upload: typeof staticApi.upload;
    static defaults: {
        table: any;
        fields: any[];
        display: string;
        ajax: any;
        idSrc: string;
        events: {};
        i18n: {
            close: string;
            create: {
                button: string;
                title: string;
                submit: string;
            };
            edit: {
                button: string;
                title: string;
                submit: string;
            };
            remove: {
                button: string;
                title: string;
                submit: string;
                confirm: {
                    _: string;
                    "1": string;
                };
            };
            error: {
                system: string;
            };
            multi: {
                title: string;
                info: string;
                restore: string;
                noMulti: string;
            };
            datetime: {
                previous: string;
                next: string;
                months: string[];
                weekdays: string[];
                amPm: string[];
                hours: string;
                minutes: string;
                seconds: string;
                unknown: string;
            };
        };
        formOptions: {
            bubble: import("./model/formOptions").IFormOptions;
            inline: import("./model/formOptions").IFormOptions;
            main: import("./model/formOptions").IFormOptions;
        };
        actionName: string;
    };
    static models: {
        button: import("./model/button").IButton;
        displayController: import("./model/displayController").IDisplayController;
        fieldType: IFieldType;
        formOptions: import("./model/formOptions").IFormOptions;
        settings: import("./model/settings").ISettings;
    };
    static dataSources: {
        dataTable: {
            id: (data: any) => any;
            fakeRow: (insertPoint: "end" | "start") => {
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
        html: {
            id: (data: any) => any;
            initField: (cfg: any) => void;
            individual: (identifier: any, fieldNames: any) => any;
            fields: (identifier: any) => {};
            create: (fields: any, data: any) => void;
            edit: (identifier: any, fields: any, data: any) => void;
            remove: (identifier: any, fields: any) => void;
        };
    };
    static display: {
        envelope: import("./model/displayController").IDisplayController;
        lightbox: import("./model/displayController").IDisplayController;
    };
    protected classes: typeof classNames;
    protected s: typeof modelSettings;
    protected dom: {
        body: HTMLElement;
        bodyContent: HTMLElement;
        buttons: HTMLElement;
        footer: HTMLElement;
        form: HTMLElement;
        formContent: HTMLElement;
        formError: HTMLElement;
        formInfo: HTMLElement;
        header: HTMLElement;
        processing: HTMLElement;
        wrapper: HTMLElement;
    };
    protected i18n: typeof Editor.defaults.i18n;
    add: typeof publicApi.add;
    ajax: typeof publicApi.ajax;
    background: typeof publicApi.background;
    blur: typeof publicApi.blur;
    bubble: typeof publicApi.bubble;
    bubblePosition: typeof publicApi.bubblePosition;
    buttons: typeof publicApi.buttons;
    clear: typeof publicApi.clear;
    close: typeof publicApi.close;
    create: typeof publicApi.create;
    undependent: typeof publicApi.undependent;
    dependent: typeof publicApi.dependent;
    destroy: typeof publicApi.destroy;
    disable: typeof publicApi.disable;
    display: typeof publicApi.display;
    displayed: typeof publicApi.displayed;
    displayNode: typeof publicApi.displayNode;
    edit: typeof publicApi.edit;
    enable: typeof publicApi.enable;
    error: typeof publicApi.error;
    field: typeof publicApi.field;
    fields: typeof publicApi.fields;
    file: typeof publicApi.file;
    files: typeof publicApi.files;
    get: typeof publicApi.get;
    hide: typeof publicApi.hide;
    ids: typeof publicApi.ids;
    inError: typeof publicApi.inError;
    inline: typeof publicApi.inline;
    inlineCreate: typeof publicApi.inlineCreate;
    message: typeof publicApi.message;
    mode: typeof publicApi.mode;
    modifier: typeof publicApi.modifier;
    multiGet: typeof publicApi.multiGet;
    multiSet: typeof publicApi.multiSet;
    node: typeof publicApi.node;
    off: typeof publicApi.off;
    on: typeof publicApi.on;
    one: typeof publicApi.one;
    open: typeof publicApi.open;
    order: typeof publicApi.order;
    remove: typeof publicApi.remove;
    set: typeof publicApi.set;
    show: typeof publicApi.show;
    submit: typeof publicApi.submit;
    table: typeof publicApi.table;
    template: typeof publicApi.template;
    title: typeof publicApi.title;
    val: typeof publicApi.val;
    protected _actionClass: typeof privateApi._actionClass;
    protected _ajax: typeof privateApi._ajax;
    protected _animate: typeof privateApi._animate;
    protected _assembleMain: typeof privateApi._assembleMain;
    protected _blur: typeof privateApi._blur;
    protected _clearDynamicInfo: typeof privateApi._clearDynamicInfo;
    protected _close: typeof privateApi._close;
    protected _closeReg: typeof privateApi._closeReg;
    protected _crudArgs: typeof privateApi._crudArgs;
    protected _dataSource: typeof privateApi._dataSource;
    protected _displayReorder: typeof privateApi._displayReorder;
    protected _edit: typeof privateApi._edit;
    protected _event: typeof privateApi._event;
    protected _eventName: typeof privateApi._eventName;
    protected _fieldFromNode: typeof privateApi._fieldFromNode;
    protected _fieldNames: typeof privateApi._fieldNames;
    protected _focus: typeof privateApi._focus;
    protected _formOptions: typeof privateApi._formOptions;
    protected _inline: typeof privateApi._inline;
    protected _optionsUpdate: typeof privateApi._optionsUpdate;
    protected _message: typeof privateApi._message;
    protected _multiInfo: typeof privateApi._multiInfo;
    protected _nestedClose: typeof privateApi._nestedClose;
    protected _nestedOpen: typeof privateApi._nestedOpen;
    protected _postopen: typeof privateApi._postopen;
    protected _preopen: typeof privateApi._preopen;
    protected _processing: typeof privateApi._processing;
    protected _noProcessing: typeof privateApi._noProcessing;
    protected _submit: typeof privateApi._submit;
    protected _submitTable: typeof privateApi._submitTable;
    protected _submitSuccess: typeof privateApi._submitSuccess;
    protected _submitError: typeof privateApi._submitError;
    protected _tidy: typeof privateApi._tidy;
    protected _weakInArray: typeof privateApi._weakInArray;
    /** @internal */
    internalEvent(name: any, args: any): void;
    /** @internal */
    internalI18n(): {
        close: string;
        create: {
            button: string;
            title: string;
            submit: string;
        };
        edit: {
            button: string;
            title: string;
            submit: string;
        };
        remove: {
            button: string;
            title: string;
            submit: string;
            confirm: {
                _: string;
                "1": string;
            };
        };
        error: {
            system: string;
        };
        multi: {
            title: string;
            info: string;
            restore: string;
            noMulti: string;
        };
        datetime: {
            previous: string;
            next: string;
            months: string[];
            weekdays: string[];
            amPm: string[];
            hours: string;
            minutes: string;
            seconds: string;
            unknown: string;
        };
    };
    /** @internal */
    internalMultiInfo(): void;
    /** @internal */
    internalSettings(): import("./model/settings").ISettings;
    constructor(init: any);
}
