/// <reference types="jquery" />
/// <reference types="datatables.net" />
import Dropdown from '../../ext/dropdown';
import { IOptions } from '../../field/defaults';
import { IFieldType } from '../../model/fieldType';
export interface IAutoCompleteOptions extends IOptions {
    /** Create an AutoComplete field */
    type: 'autocomplete';
    /** Ajax address from which options should be loaded */
    ajax?: true | string;
    /** Provide extra data parameter to send as part of the Ajax request */
    ajaxData?: {
        [key: string]: string | number | (() => string | number);
    };
    /** Set HTML attributes on the input element. */
    attr?: {
        [key: string]: string | number;
    };
    /** Function used to customise the display of each label.  */
    display?: (data: any, value: any) => string;
    /** Indicate if HTML entities in the text shown in the label should be escaped or not. */
    escapeLabelHtml?: boolean;
    /** Language options for the autocomplete field */
    i18n?: {
        /** This text is shown when a filter is applied and no options are found to match */
        noResults?: string;
        /** The placeholder is shown when there are is no search term and no options have been loaded. */
        placeholder?: string;
        /** Dropdown title */
        title?: string;
    };
    /** List of options to show in the radio values */
    options?: any[];
    /** Ordering to apply to the list */
    optionsOrder?: 'asc' | 'desc' | false;
}
/** Internal properties used on the configuration object for the field */
export interface IAutoCompleteConf extends IAutoCompleteOptions {
    _input: JQuery<HTMLElement>;
    _dropdown: Dropdown;
    _selected: boolean;
}
declare const autocomplete: IFieldType;
export default autocomplete;
