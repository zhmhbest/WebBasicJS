
type DateType = Date | string | number;
/**
 * 获取到期时间
 * @param expire
 */
const getExpireTime = (expire?: DateType) => {
    // Date
    if (expire instanceof Date) {
        return expire;
    }
    // String
    if ('string' === typeof expire) {
        return new Date(expire);
    }
    // Number
    if ('number' === typeof expire) {
        let date = new Date();
        date.setTime(date.getTime() + (expire * 1000));
        return date;
    }
    // Undefined
    return undefined;
}

type ValueType = object | string | number;
/**
 * 设置Cookie
 * @param name
 * @param value
 * @param expire
 * @param path
 */
export const set = (
    name: string, value: ValueType, expire?: DateType, path?: string
) => {
    expire = getExpireTime(expire);
    const buffer = [];
    // K-V
    buffer.push(name.trim());
    buffer.push('=');
    buffer.push(encodeURIComponent(JSON.stringify(value)));
    // expire
    if (undefined !== expire) {
        buffer.push(';expires=');
        buffer.push(expire.toUTCString());
    }
    // path
    if (undefined !== path) {
        buffer.push(';path=');
        buffer.push(path);
    }
    document.cookie = buffer.join('');
    // 重置缓存
    cacheCookies = undefined;
}

/**
 * 删除Cookie
 * @param name
 * @param path
 */
export const del = (name: string, path: string) => {
    const buffer = [];
    // K-V
    buffer.push(name.trim());
    buffer.push('=');
    // expires
    buffer.push(';expires=');
    buffer.push(new Date().toUTCString());
    // path
    if (undefined !== path) {
        buffer.push(';path=');
        buffer.push(path);
    }
    document.cookie = buffer.join('');
    // 重置缓存
    cacheCookies = undefined;
}


let cacheCookies: undefined | object = undefined;
/**
 * 加载Cookie
 */
function loadCookies() {
    cacheCookies = {};
    let cookies = document.cookie.split(';');
    for (let item of cookies) {
        let kv = item.trim().split('=');
        Object.defineProperty(
            cacheCookies,
            kv[0],
            {
                // enumerable: false,
                // configurable: false,
                // writable: false,
                value: JSON.parse(decodeURIComponent(kv[1]))
            }
        );
    }
}

/**
 * 获得Cookie
 * @param name
 * @param reload 刷新缓存
 */
export const get = (
    name: string,
    reload?: boolean
): ValueType => {
    if (undefined === cacheCookies || true === reload) loadCookies();
    // @ts-ignore
    return cacheCookies[name];
}