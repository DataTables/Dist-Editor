/// <reference types="jquery" />
/// <reference types="datatables.net" />
import Dropdown from '../../ext/dropdown';
import { IOptions } from '../../field/defaults';
import { IFieldType } from '../../model/fieldType';
export interface ITagsConf extends IOptions {
    ajax?: true | null | string;
    ajaxData?: {
        [key: string]: string | number | (() => string | number);
    };
    display?: (data: any, value: any) => string;
    escapeLabelHtml?: boolean;
    i18n?: {
        addButton?: string;
        inputPlaceholder?: string;
        noResults?: string;
        title?: string;
        placeholder?: string;
    };
    limit?: null | number;
    multiple?: boolean;
    options?: any[];
    separator?: string;
    unique?: boolean;
    _add: JQuery<HTMLElement>;
    _display: JQuery<HTMLElement>;
    _dropdown: Dropdown;
    _changeVal: any | null;
    _labels: JQuery<HTMLElement>;
    _val: any[];
    _enabled: boolean;
}
declare const tags: IFieldType;
export default tags;
