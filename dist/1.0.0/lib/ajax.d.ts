export declare const get: (url: string, type?: "" | "text" | "arraybuffer" | "blob" | "document" | "json" | undefined, data?: object | undefined, headers?: object | undefined) => Promise<any>;
export declare const post: (url: string, type?: "" | "text" | "arraybuffer" | "blob" | "document" | "json" | undefined, data?: object | FormData | undefined, headers?: object | undefined) => Promise<any>;
export declare class Requester {
    get prefix(): string;
    set prefix(value: string);
    get data(): object;
    set data(value: object);
    get headers(): object;
    set headers(value: object);
    private _prefix;
    private _data;
    private _headers;
    constructor(prefix?: string | null, data?: object | null, headers?: object | null);
    get(url: string, type?: XMLHttpRequestResponseType, data?: object | null, headers?: object | null): Promise<any>;
    post(url: string, type?: XMLHttpRequestResponseType, data?: object | null, headers?: object | null): Promise<any>;
    getJson(url: string, data?: object, headers?: object): Promise<any>;
    postJson(url: string, data?: object, headers?: object): Promise<any>;
    getBlob(url: string, data?: object, headers?: object): Promise<any>;
    postBlob(url: string, data?: object, headers?: object): Promise<any>;
}
