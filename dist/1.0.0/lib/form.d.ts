export declare const getFormValues: (form: HTMLFormElement | string) => object | null;
export declare const setFormValues: (form: HTMLFormElement | string, data: object) => void;
/**
 *
 * @param sel
 * @param data
 */
export declare const setSelectOptions: (sel: HTMLSelectElement | string, data: Array<{
    title: string;
    value: string;
}>) => void;
