/// <reference types="jquery" />
/// <reference types="datatables.net" />
import Dropdown from '../../ext/dropdown';
import { IOptions } from '../../field/defaults';
import { IFieldType } from '../../model/fieldType';
export interface IAutoCompleteConf extends IOptions {
    ajax?: true | string;
    ajaxData?: {
        [key: string]: string | number | (() => string | number);
    };
    attr?: {
        [key: string]: string | number;
    };
    display?: (data: any, value: any) => string;
    escapeLabelHtml?: boolean;
    i18n?: {
        noResults?: string;
        placeholder?: string;
        title?: string;
    };
    options?: any[];
    _input: JQuery<HTMLElement>;
    _dropdown: Dropdown;
    _selected: boolean;
}
declare const autocomplete: IFieldType;
export default autocomplete;
