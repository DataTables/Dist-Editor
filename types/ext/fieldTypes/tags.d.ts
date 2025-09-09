/// <reference types="jquery" />
/// <reference types="datatables.net" />
import Dropdown from '../../ext/dropdown';
import { IOptions } from '../../field/defaults';
import { IFieldType } from '../../model/fieldType';
export interface ITagsOptions extends IOptions {
    /** Create a tags field */
    type: 'tags';
    /** Ajax address from which options should be loaded */
    ajax?: true | null | string;
    /** Provide extra data parameter to send as part of the Ajax request */
    ajaxData?: {
        [key: string]: string | number | (() => string | number);
    };
    /** Function used to customise the display of each label.  */
    display?: (data: any, value: any) => string;
    /** Indicate if HTML entities in the text shown in the label should be escaped or not. */
    escapeLabelHtml?: boolean;
    /** Language options for the tags field */
    i18n?: {
        addButton?: string;
        /** The text shown as the placeholder in the input search box */
        inputPlaceholder?: string;
        /** This text is shown when a filter is applied and no options are found to match. */
        noResults?: string;
        /** Text / icon to display for the remove tag button. Can be HTML. */
        removeIcon?: string;
        /** Text shown at the top of the dropdown */
        title?: string;
        /** The placeholder is shown when there are is no search term and no options have been loaded */
        placeholder?: string;
    };
    /** This option is used to set the max number of options that can be selected for the field. */
    limit?: null | number;
    /** Sets if the field should allow multiple values (an array), or just a single one (a scalar). */
    multiple?: boolean;
    /** List of options to show in the radio values */
    options?: any[];
    /** Ordering to apply to the list */
    optionsOrder?: 'asc' | 'desc' | false;
    /** Split the value on the given string if the string contains multiple values */
    separator?: string;
    /** If enabled then the user may not select the same option multiple times */
    unique?: boolean;
}
/** Internal properties used on the configuration object for the field */
export interface ITagsConf extends ITagsOptions {
    _add: JQuery<HTMLElement>;
    _display: JQuery<HTMLElement>;
    _dropdown: Dropdown;
    _changeVal: any | null;
    _labels: JQuery<HTMLElement>;
    _val: any[];
    _enabled: boolean;
    _removeIcon: string;
}
declare const tags: IFieldType;
export default tags;
