/**
 * Object->String
 * @param obj DataHolder
 * @param sep Separator
 * @param eqs Equal-sign
 */
export declare const stringify: (obj: object, sep?: string | undefined, eqs?: string | undefined) => string;
/**
 * String->Dict
 * @param str
 * @param sep
 * @param eqs
 */
export declare const parse: (str: string, sep?: string | undefined, eqs?: string | undefined) => object;
export interface onHashChangeCallback {
    (this: WindowEventHandlers, ev: Event): any;
}
/**
 * Catch HashChange
 */
export declare const pushOnHashChange: (fn: onHashChangeCallback) => void;
/**
 * 读取Hash值中?后的数据
 */
export declare const getData: () => object | null;
export declare const setData: (data: object) => void;
