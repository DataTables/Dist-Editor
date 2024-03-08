/*! DataTables Editor v2.3.2
 *
 * © SpryMedia Ltd, all rights reserved.
 * License: editor.datatables.net/license
 */
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
        actions: {
            create: string;
            edit: string;
            remove: string;
        };
        body: {
            content: string;
            wrapper: string;
        };
        bubble: {
            bg: string;
            close: string;
            liner: string;
            pointer: string;
            table: string;
            wrapper: string;
        };
        field: {
            disabled: string;
            error: string;
            input: string;
            inputControl: string;
            label: string;
            'msg-error': string;
            'msg-info': string;
            'msg-label': string;
            'msg-message': string;
            multiInfo: string;
            multiNoEdit: string;
            multiRestore: string;
            multiValue: string;
            namePrefix: string;
            processing: string;
            typePrefix: string;
            wrapper: string;
        };
        footer: {
            content: string;
            wrapper: string;
        };
        form: {
            button: string;
            buttonSubmit: string;
            buttonInternal: string;
            buttons: string;
            content: string;
            error: string;
            info: string;
            tag: string;
            wrapper: string;
        };
        header: {
            content: string;
            title: {
                tag: any;
                class: string;
            };
            wrapper: string;
        };
        inline: {
            buttons: string;
            liner: string;
            wrapper: string;
        };
        processing: {
            active: string;
            indicator: string;
        };
        wrapper: string;
    };
    static Field: typeof Field;
    static DateTime: any;
    static error: typeof staticApi.error;
    static pairs: typeof staticApi.pairs;
    static factory: typeof staticApi.factory;
    static upload: typeof staticApi.upload;
    static defaults: {
        actionName: string;
        ajax: any;
        display: string;
        events: {};
        fields: any[];
        formOptions: {
            bubble: import("./model/formOptions").IFormOptions;
            inline: import("./model/formOptions").IFormOptions;
            main: import("./model/formOptions").IFormOptions;
        };
        i18n: {
            close: string;
            create: {
                button: string;
                submit: string;
                title: string;
            };
            datetime: {
                amPm: string[];
                hours: string;
                minutes: string;
                months: string[];
                next: string;
                previous: string;
                seconds: string;
                unknown: string;
                weekdays: string[];
            };
            edit: {
                button: string;
                submit: string;
                title: string;
            };
            error: {
                system: string;
            };
            multi: {
                info: string;
                noMulti: string;
                restore: string;
                title: string;
            };
            remove: {
                button: string;
                confirm: {
                    1: string;
                    _: string;
                };
                submit: string;
                title: string;
            };
        };
        idSrc: string;
        table: any;
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
            commit(action: any, identifier: any, data: any, store: any): void;
            create(fields: any, data: any): void;
            edit(identifier: any, fields: any, data: any, store: any): void;
            fakeRow(insertPoint: "end" | "start"): {
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
        html: {
            create(fields: any, data: any): void;
            edit(identifier: any, fields: any, data: any): void;
            fields(identifier: any): {};
            id(data: any): any;
            individual(identifier: any, fieldNames: any): any;
            initField(cfg: any): void;
            remove(identifier: any, fields: any): void;
        };
    };
    static display: {
        envelope: import("./model/displayController").IDisplayController;
        lightbox: import("./model/displayController").IDisplayController;
    };
    add: typeof publicApi.add;
    ajax: typeof publicApi.ajax;
    background: typeof publicApi.background;
    blur: typeof publicApi.blur;
    bubble: typeof publicApi.bubble;
    bubbleLocation: typeof publicApi.bubbleLocation;
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
    protected classes: typeof classNames;
    protected c: typeof Editor.defaults;
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
    protected _inputTrigger: typeof privateApi._inputTrigger;
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
    constructor(init: any, cjsJq?: any);
    static safeId: (id: string) => string;
    /** @internal */
    internalEvent(name: any, args: any): void;
    /** @internal */
    internalI18n(): {
        close: string;
        create: {
            button: string;
            submit: string;
            title: string;
        };
        datetime: {
            amPm: string[];
            hours: string;
            minutes: string;
            months: string[];
            next: string;
            previous: string;
            seconds: string;
            unknown: string;
            weekdays: string[];
        };
        edit: {
            button: string;
            submit: string;
            title: string;
        };
        error: {
            system: string;
        };
        multi: {
            info: string;
            noMulti: string;
            restore: string;
            title: string;
        };
        remove: {
            button: string;
            confirm: {
                1: string;
                _: string;
            };
            submit: string;
            title: string;
        };
    };
    /** @internal */
    internalMultiInfo(): void;
    /** @internal */
    internalSettings(): import("./model/settings").ISettings;
}
