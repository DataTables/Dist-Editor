import Editor from '../Editor';
import { IDefaults, IFormatter, IOptions } from './defaults';
export interface ISettings {
    classes: any;
    hiding: boolean;
    host: Editor;
    multiIds: string[];
    multiValue: boolean;
    multiValues: {
        [k: string]: any;
    };
    name: string;
    opts: IDefaults;
    processing: boolean;
    type: any;
}
export default class Field {
    static defaults: IDefaults;
    static formatters: {
        [name: string]: IFormatter;
    };
    valFromData: (a: any) => any;
    valToData: any;
    private s;
    private dom;
    constructor(options: IOptions, classes: any, host: Editor);
    def(set?: any): any;
    disable(): this;
    displayed(): boolean;
    enable(toggle?: boolean): this;
    enabled(): boolean;
    error(msg: any, fn?: any): any;
    fieldInfo(msg: any): any;
    isMultiValue(): boolean;
    inError(): boolean;
    input(): any;
    focus(): this;
    get(): any;
    hide(animate: any): this;
    label(str: any): string | this;
    labelInfo(msg: any): any;
    message(msg: any, fn?: any): any;
    multiGet(id?: any): any;
    multiRestore(): void;
    multiSet(id: any, val?: any, recalc?: boolean): this;
    name(): string;
    node(): HTMLElement;
    nullDefault(): boolean;
    processing(): boolean;
    processing(set: boolean): this;
    set(val: any, multiCheck?: boolean): this;
    show(animate?: boolean, toggle?: boolean): this;
    submittable(flag?: any): boolean | this;
    type(): string;
    update(options: any, append?: boolean): this;
    val(val?: any): any;
    compare(value: any, original: any): boolean;
    dataSrc(): string;
    destroy(): this;
    multiEditable(): boolean;
    multiIds(): string[];
    multiInfoShown(show: any): void;
    multiReset(): void;
    _msg(el: any, msg?: any, fn?: any): any;
    _multiValueCheck(): boolean;
    _typeFn(name: any, ...args: any[]): any;
    private _errorNode;
    private _format;
}
