/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IOptions } from '../../field/defaults';
export interface IRadioOptions extends IOptions {
    /** Create a radio field */
    type: 'radio';
    /** List of options to show in the radio values */
    options?: any[] | {
        [key: string]: any;
    };
    /** @ignore Legacy alias for `options` */
    ipOpts?: any[] | {
        [key: string]: any;
    };
    /** The property names to read from objects in the `options` array */
    optionsPair?: {
        label: string;
        value: string;
    };
    /** Value to give when no radio boxes are selected. */
    unselectedValue?: string | number;
}
/** Internal properties used on the configuration object for the field */
export interface IRadioConf extends IRadioOptions {
    _input?: JQuery<HTMLElement>;
}
declare const radio: import("../../model/fieldType").IFieldType & {
    canReturnSubmit(conf: any, node: any): true;
    disable(conf: any): void;
    enable(conf: any): void;
    get(conf: any): any;
    set(conf: any, val: any): void;
} & {
    _addOptions(conf: IRadioConf, opts: any, append?: boolean): void;
    create(conf: IRadioConf): HTMLElement;
    disable(conf: IRadioConf): void;
    enable(conf: IRadioConf): void;
    get(conf: IRadioConf): any;
    set(conf: IRadioConf, val: any): void;
    update(conf: IRadioConf, options: any, append: any): void;
};
export default radio;
