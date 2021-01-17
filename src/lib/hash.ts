import { splitFirstString } from "./str";


/**
 * Object->String
 * @param obj DataHolder
 * @param sep Separator
 * @param eqs Equal-sign
 */
export const stringify =
(obj: object, sep?: string, eqs?: string): string => {
    sep = sep || '&';
    eqs = eqs || '=';
    const buffer: string[] = [];
    for (let key of Object.keys(obj)) {
        // @ts-ignore
        let val: any = obj[key];
        buffer.push([key, encodeURIComponent(JSON.stringify(val))].join(eqs));
    }
    return buffer.join(sep);
};

/**
 * String->Dict
 * @param str
 * @param sep
 * @param eqs
 */
export const parse =
(str: string, sep?: string, eqs?: string): object => {
    let buffer = {};
    str = str.trim();
    if (0 === str.length) return buffer;
    sep = sep || '&';
    eqs = eqs || '=';
    for (let item of str.split(sep)) {
        let kv: string[] = item.split(eqs);
        // @ts-ignore
        buffer[kv[0]] = JSON.parse(decodeURIComponent(kv[1]));
    }
    return buffer;
};

export interface onHashChangeCallback {
    (this: WindowEventHandlers, ev: Event) : any
};

/**
 * Catch HashChange
 */
export const pushOnHashChange =
(fn: onHashChangeCallback): void => {
    const pr = window.onhashchange as onHashChangeCallback;
    if (null === pr || undefined === pr) {
        window.onhashchange = fn;
    } else {
        // 方法链
        window.onhashchange = function (this: WindowEventHandlers, ev: Event): any {
            pr.call(this, ev);
            fn.call(this, ev);
        }
    }
};

export const getHash =
(): string => {
    let s = window.location.hash.toString();
    return s.substr(1, s.length - 1);
}

/**
 * 读取Hash值中?后的数据
 */
export const getData =
(): object | null => {
    const HASH = splitFirstString(getHash(), '?');
    return parse(HASH[1]);
};

/**
 * 设置Hash值中?后的数据
 */
export const setData =
(data: object): void => {
    const HASH = splitFirstString(getHash(), '?');
    window.location.hash = `${HASH[0]}?${stringify(data)}`;
};