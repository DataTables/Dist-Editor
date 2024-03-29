/// <reference types="jquery" />
/// <reference types="datatables.net" />
export declare function el(tag: string, ctx: JQuery | Element | Document): JQuery<HTMLElement>;
export declare function safeDomId(id: any, prefix?: string): string;
export declare function safeQueryId(id: any, prefix?: string): string;
export declare function dataGet(src: string | number): any;
export declare function dataSet(src: string | number): any;
export declare function pluck(a: any, prop: any): any[];
/**
 * Compare parameters for difference - diving into arrays and objects if
 * needed, allowing the object reference to be different, but the contents to
 * match.
 *
 * Please note that LOOSE type checking is used
 */
export declare function deepCompare(o1: any, o2: any): boolean;
/**
 * Extend objects - very similar to $.extend, but deep copy objects and
 * shallow copy arrays. Allows arrays returned from the server to be
 * left as is.
 *
 * @param out Target object
 * @param extender Object to extend
 * @returns Refreshed object
 */
export declare function extendDeepObjShallowArr(out: any, extender: any): any;
