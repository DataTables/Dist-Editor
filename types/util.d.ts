/// <reference types="jquery" />
/// <reference types="datatables.net" />
export declare function el(tag: string, ctx: JQuery | Element | Document): JQuery<HTMLElement>;
export declare function safeDomId(id: any, prefix?: string): string;
export declare function safeQueryId(id: any, prefix?: string): string;
export declare function dataGet(src: string | number): any;
export declare function dataSet(src: string | number): any;
export declare const extend: any;
export declare function pluck(a: any, prop: any): any[];
/**
 * Compare parameters for difference - diving into arrays and objects if
 * needed, allowing the object reference to be different, but the contents to
 * match.
 *
 * Please note that LOOSE type checking is used
 */
export declare function deepCompare(o1: any, o2: any): boolean;
