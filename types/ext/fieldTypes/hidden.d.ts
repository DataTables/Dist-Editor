/// <reference types="jquery" />
/// <reference types="datatables.net" />
import { IOptions } from '../../field/defaults';
export interface IHiddenOptions extends IOptions {
    /** Create a hidden field */
    type: 'hidden';
    /** Set HTML attributes on the input element. */
    attr?: {
        [name: string]: any;
    };
    /** @ignore */
    value?: any;
}
/** Internal properties used on the configuration object for the field */
export interface IHiddenConf extends IHiddenOptions {
    /** @ignore */
    _input?: JQuery<HTMLElement>;
    /** @ignore */
    _val?: any;
}
declare const _default: {
    create(conf: IHiddenConf): any;
    get(conf: IHiddenConf): any;
    set(conf: IHiddenConf, val: any): void;
};
export default _default;
