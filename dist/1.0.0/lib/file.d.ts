interface onFileLoadCallback {
    (fs: null | FileList): void;
}
export declare class FileLoader {
    private input;
    constructor();
    set(field: string, value: string): void;
    bind(callback: onFileLoadCallback): void;
    load(): void;
    bindLoad(callback: onFileLoadCallback): void;
}
export declare const downloadBlob: (blob: Blob, filename?: string | undefined) => void;
export declare const downloadText: (text: string | object, filename?: string | undefined) => void;
interface onFileFinishedCallback {
    (result: string | ArrayBuffer | null): void;
}
export declare const readFileText: (f: File | Blob, callback: onFileFinishedCallback) => void;
export declare const readFileBase64: (f: File | Blob, callback: onFileFinishedCallback) => void;
export declare const readFileBinary: (f: File | Blob, callback: onFileFinishedCallback) => void;
export {};
