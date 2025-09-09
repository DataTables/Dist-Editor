/// <reference types="jquery" />
/// <reference types="datatables.net" />
declare type TRender = (data: any, val: any) => string;
interface IOptions {
    ajax: string | null;
    ajaxData: object;
    escapeHtml: boolean;
    i18n: {
        inputPlaceholder?: string;
        noResults?: string;
        title?: string;
        placeholder?: string;
    };
    options: any[];
    order: 'asc' | 'desc' | false;
    renderer: TRender;
    search: boolean | null;
    select: (val: string) => void;
}
export default class DropDown {
    static defaults: IOptions;
    static classes: {};
    private c;
    private s;
    private dom;
    constructor(host: HTMLElement | JQuery<HTMLElement>, options: Partial<IOptions>);
    attachTo(el: string): void;
    asyncLabels(source: Array<{
        value: any;
    }>, cb: (item: any, label: string) => void): void;
    blur(input: HTMLElement): DropDown;
    destroy(): void;
    filter(val: string): DropDown;
    /**
     * Get the label for a specific value (not async - if unknown in the current
     * data set, will return `null`)
     *
     * @param val Value to lookup
     * @returns Label if found, null if not found
     */
    label(val: any): any | null;
    focus(): this;
    hide(): DropDown;
    host(el: any): this;
    options(): any[];
    options(options: any[], append?: boolean): DropDown[];
    owns(node: Node): boolean;
    processing(state: boolean): this;
    show(below?: HTMLElement): DropDown;
    private _listView;
    private _position;
    private _renderer;
}
export {};
