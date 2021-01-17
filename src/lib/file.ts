const __URL__ = window.URL || window.webkitURL;
// __URL__.createObjectURL(obj)

interface onFileLoadCallback {
    (fs: null | FileList): void
};
export class FileLoader {
    private input: HTMLInputElement;
    constructor() {
        this.input = document.createElement('input');
        this.input.type = 'file';
    }
    set(field: string, value: string): void {
        this.input.setAttribute(field, value);
    }
    bind(callback: onFileLoadCallback) {
        const input = this.input;
        input.onchange = function (this: GlobalEventHandlers, ev: Event) {
            callback(input.files);
        };
    }
    load(): void {
        this.input.value = "";
        this.input.click();
    }
    bindLoad(callback: onFileLoadCallback) {
        this.bind(callback);
        this.load();
    }
};


export const downloadBlob = (
    blob: Blob,
    filename?: string
) => {
    filename = filename || "file" + new Date().getTime();
    const A: HTMLAnchorElement = document.createElement('a');
    A.href = __URL__.createObjectURL(blob);
    A.download = filename;
    A.click();
    A.remove();
};


export const downloadText = (
    text: string | object,
    filename?: string
) => {
    let blob = new Blob([
        JSON.stringify(text, undefined, '    ')
    ]);
    downloadBlob(blob, filename);
}


interface onFileFinishedCallback {
    (result: string | ArrayBuffer | null): void
};
export const readFileText = (f: File | Blob, callback: onFileFinishedCallback) => {
    const reader = new FileReader();
    reader.readAsText(f);
    reader.onload = function (this: FileReader, ev: ProgressEvent<FileReader>) {
        callback(this.result)
    }
};
export const readFileBase64 = (f: File | Blob, callback: onFileFinishedCallback) => {
    const reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = function (this: FileReader, ev: ProgressEvent<FileReader>) {
        callback(this.result)
    }
};
export const readFileBinary = (f: File | Blob, callback: onFileFinishedCallback) => {
    const reader = new FileReader();
    reader.readAsBinaryString(f);
    reader.onload = function (this: FileReader, ev: ProgressEvent<FileReader>) {
        callback(this.result)
    }
};
