declare const getValues: (objForm: HTMLFormElement) => {} | null;
declare const setValues: (objForm: HTMLFormElement, data: object) => void;
declare const setOptions: (objSelect: HTMLSelectElement, data: {
    title: string;
    value: string;
}[]) => void;
declare const setInputs: (objDiv: HTMLDivElement, data: {
    title: string;
    value: string;
}[], callback: (label: HTMLLabelElement, input: HTMLInputElement, span: HTMLSpanElement) => any) => void;
export { getValues, setValues, setOptions, setInputs, };
