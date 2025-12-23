/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IAutoCompleteOptions } from './autocomplete';
import { ICheckboxOptions } from './checkbox';
import { IDataTableOptions } from './datatable';
import { IDatetimeOptions } from './datetime';
import { IHiddenOptions } from './hidden';
import { IPasswordOptions } from './password';
import { IReadonlyOptions } from './readonly';
import { ISelectOptions } from './select';
import { IRadioOptions } from './radio';
import { ITagsOptions } from './tags';
import { ITextOptions } from './text';
import { ITextareaOptions } from './textarea';
import { IUploadOptions } from './upload';
import { IUploadManyOptions } from './uploadMany';
import { IOptions } from '../../field/defaults';
export declare type FieldConf = IAutoCompleteOptions | ICheckboxOptions | IDataTableOptions | IDatetimeOptions | IHiddenOptions | IPasswordOptions | IRadioOptions | IReadonlyOptions | ISelectOptions | ITagsOptions | ITextOptions | ITextareaOptions | IUploadOptions | IUploadManyOptions | IOptions;
declare const _default: {
    autocomplete: import("../../model/fieldType").IFieldType;
    checkbox: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        _addOptions(conf: import("./checkbox").ICheckboxConf, opts: any, append?: boolean): void;
        create(conf: any): any;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): string | any[];
        set(conf: any, val: any): void;
        update(conf: any, options: any, append: any): void;
    };
    datatable: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        _addOptions(conf: import("./datatable").IDataTableConf, options: any, append?: boolean): void;
        _jumpToFirst(conf: import("./datatable").IDataTableConf, editor: import("../../Editor").default): void;
        create(conf: import("./datatable").IDataTableConf): {
            input: JQuery<HTMLElement>;
            side: JQuery<HTMLElement>;
        };
        disable(conf: import("./datatable").IDataTableConf): void;
        dt(conf: import("./datatable").IDataTableConf): any;
        enable(conf: import("./datatable").IDataTableConf): void;
        get(conf: import("./datatable").IDataTableConf): any;
        set(conf: import("./datatable").IDataTableConf, val: any, localUpdate: any): void;
        tableClass: string;
        update(conf: import("./datatable").IDataTableConf, options: any, append: any): void;
    };
    datetime: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        create(conf: import("./datetime").IDatetimeConf): HTMLElement;
        destroy(conf: import("./datetime").IDatetimeConf): void;
        errorMessage(conf: import("./datetime").IDatetimeConf, msg: string): void;
        get(conf: import("./datetime").IDatetimeConf): any;
        maxDate(conf: import("./datetime").IDatetimeConf, max: any): void;
        minDate(conf: import("./datetime").IDatetimeConf, min: any): void;
        owns(conf: import("./datetime").IDatetimeConf, node: any): any;
        set(conf: import("./datetime").IDatetimeConf, val: any): void;
        inst(conf: import("./datetime").IDatetimeConf): any;
    };
    hidden: {
        create(conf: import("./hidden").IHiddenConf): any;
        get(conf: import("./hidden").IHiddenConf): any;
        set(conf: import("./hidden").IHiddenConf, val: any): void;
    };
    password: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        create(conf: import("./password").IPasswordConf): HTMLElement;
    };
    radio: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        _addOptions(conf: import("./radio").IRadioConf, opts: any, append?: boolean): void;
        create(conf: import("./radio").IRadioConf): HTMLElement;
        disable(conf: import("./radio").IRadioConf): void;
        enable(conf: import("./radio").IRadioConf): void;
        get(conf: import("./radio").IRadioConf): any;
        set(conf: import("./radio").IRadioConf, val: any): void;
        update(conf: import("./radio").IRadioConf, options: any, append: any): void;
    };
    tags: import("../../model/fieldType").IFieldType;
    readonly: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        create(conf: import("./readonly").IReadonlyConf): HTMLElement;
    };
    select: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        _addOptions(conf: import("./select").ISelectConf, opts: any, append?: boolean): void;
        create(conf: import("./select").ISelectConf): HTMLSelectElement;
        destroy(conf: import("./select").ISelectConf): void;
        get(conf: import("./select").ISelectConf): any;
        set(conf: import("./select").ISelectConf, val: any, localUpdate: any): false;
        update(conf: import("./select").ISelectConf, options: any, append: any): void;
    };
    text: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        create(conf: import("./text").ITextConf): HTMLElement;
    };
    textarea: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        canReturnSubmit(conf: import("./textarea").ITextareaConf, node: any): false;
        create(conf: import("./textarea").ITextareaConf): HTMLElement;
    };
    upload: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        canReturnSubmit(conf: IUploadOptions, node: any): false;
        create(conf: IUploadOptions): JQuery<HTMLElement>;
        disable(conf: IUploadOptions): void;
        enable(conf: IUploadOptions): void;
        get(conf: IUploadOptions): any;
        set(conf: IUploadOptions, val: any): void;
    };
    uploadMany: import("../../model/fieldType").IFieldType & {
        canReturnSubmit(conf: any, node: any): true;
        disable(conf: any): void;
        enable(conf: any): void;
        get(conf: any): any;
        set(conf: any, val: any): void;
    } & {
        _showHide(conf: import("./uploadMany").IUploadManyConf): void;
        canReturnSubmit(conf: any, node: any): false;
        create(conf: import("./uploadMany").IUploadManyConf): JQuery<HTMLElement>;
        disable(conf: import("./uploadMany").IUploadManyConf): void;
        enable(conf: import("./uploadMany").IUploadManyConf): void;
        get(conf: import("./uploadMany").IUploadManyConf): any;
        set(conf: import("./uploadMany").IUploadManyConf, val: any): void;
    };
};
export default _default;
