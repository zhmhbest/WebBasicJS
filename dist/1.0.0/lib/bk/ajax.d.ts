declare const get: (url: string, type: XMLHttpRequestResponseType, data: object, headers: object) => Promise<any>;
declare const post: (url: string, type: XMLHttpRequestResponseType, data: object | FormData, headers: object) => Promise<any>;
declare class Requester {
    get prefix(): string;
    set prefix(value: string);
    get data(): object;
    set data(value: object);
    get headers(): object;
    set headers(value: object);
    private _prefix;
    private _data;
    private _headers;
    constructor(prefix: string, data: object, headers: object);
    get(url: string, type: XMLHttpRequestResponseType, data: object, headers: object): Promise<any>;
    post(url: string, type: XMLHttpRequestResponseType, data: object, headers: object): Promise<any>;
    getJson(url: string, data: object, headers: object): Promise<any>;
    postJson(url: string, data: object, headers: object): Promise<any>;
    getBlob(url: string, data: object, headers: object): Promise<any>;
    postBlob(url: string, data: object, headers: object): Promise<any>;
}
export { get, post, Requester };
