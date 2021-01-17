declare type ValueType = object | string | number;
/**
 * 设置Cookie
 * @param name
 * @param value
 * @param expire
 * @param path
 */
export declare const set: (name: string, value: ValueType, expire?: string | number | Date | undefined, path?: string | undefined) => void;
/**
 * 删除Cookie
 * @param name
 * @param path
 */
export declare const del: (name: string, path: string) => void;
/**
 * 获得Cookie
 * @param name
 * @param reload 刷新缓存
 */
export declare const get: (name: string, reload?: boolean | undefined) => ValueType;
export {};
