/*
        <form>
            <input type="radio" name="radio" value="T" />
            <input type="radio" name="radio" value="F" />
            <br>

            <input type="checkbox" name="checkbox" value="A" />
            <input type="checkbox" name="checkbox" value="B" />
            <input type="checkbox" name="checkbox" value="C" />
            <br>

            <select name="select">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
            <br>

            <input type="file" name="file" value="" /><br>

            <input type="text" name="text" value="text" /><br>
            <input type="password" name="password" value="password" /><br>
            <input type="number" name="number" value="999" /><br>
            <input type="range" name="range" value="999" /><br>
            <input type="email" name="email" value="666@abc.com" /><br>

            <input type="date" name="date" value="1999-10-10" /><br>
            <input type="time" name="time" value="" /><br>

            <input type="color" name="color" value="" /><br>

            <textarea name="textarea">大文本</textarea>
        </form>
*/

interface Element {
    name: string | null,
    type: string | null
    value: string | null
    checked: boolean,
    files: FileList,
    click: () => void
}

export const getFormValues = (
    form: HTMLFormElement | string
): object | null => {
    let objForm = form instanceof HTMLFormElement ?
        form :
        document.querySelector(form) as HTMLFormElement;
    if ('FORM' !== objForm.tagName.toUpperCase()) return null;


    let holder = {};
    for (let element of objForm.elements) {
        // @ts-ignore
        let elem = element as Element;
        if (null === elem.name || null === elem.type) continue;
        // console.log(elem.name, elem.type, elem.value, elem.checked);

        switch (elem.type) {
            // input radio
            case 'radio':
                if (!elem.checked) break;
                Object.defineProperty(holder, elem.name, { value: elem.value });
                break;

            // input checkbox
            case 'checkbox':
                if (!holder.hasOwnProperty(elem.name)) {
                    Object.defineProperty(holder, elem.name, { value: [] });
                }
                if (elem.checked) {
                    // @ts-ignore
                    holder[elem.name].push(elem.value);
                }
                break;
            // input file
            case 'file':
                if (elem.files.length > 0) {
                    Object.defineProperty(holder, elem.name, { value: elem.files[0] });
                }
                break;
            // select
            case 'select-one':
            // input
            case 'text':
            case 'password':
            case 'number':
            case 'email':
            case 'range':
            // input
            case 'date':
            case 'time':
            case 'datetime':
            case 'datetime-local':
            case 'week':
            case 'month':
            case 'year':
            // input
            case 'color':
            // textarea
            case 'textarea':
                if (holder.hasOwnProperty(elem.name)) break;
                Object.defineProperty(holder, elem.name, { value: elem.value });
                break;
            default:
                break;
        }
    }
    return holder;
};


export const setFormValues = (
    form: HTMLFormElement | string,
    data: object
): void => {
    let objForm = form instanceof HTMLFormElement ?
        form :
        document.querySelector(form) as HTMLFormElement;
    if ('FORM' !== objForm.tagName.toUpperCase()) return;


    for (let name of Object.keys(data)) {
        // @ts-ignore
        const value = data[name];
        // @ts-ignore
        const elements = objForm.querySelectorAll(`input[name='${name}'],select[name='${name}'],textarea[name='${name}']`) as Array<Element>;
        if (0 === elements.length) continue;

        switch (elements[0].type) {
            case 'radio':
                for (let item of elements) {
                    if ('radio' === item.type) {
                        item.checked = (value == item.value);
                    }
                } break;
            case 'checkbox':
                for (let item of elements) {
                    if ('checkbox' === item.type) {
                        item.checked = (value as Array<string>).some(x => x == item.value);
                    }
                } break;
            case 'file':
                elements[0].click();
            default:
                elements[0].value = value;
                break;
        }
    }
};


/**
 *
 * @param sel
 * @param data
 */
export const setSelectOptions = (
    sel: HTMLSelectElement | string,
    data: Array<{ title: string, value: string }>
): void => {
    let obj = sel instanceof HTMLSelectElement ?
        sel :
        document.querySelector(sel) as HTMLSelectElement;
    if ('SELECT' !== obj.tagName.toUpperCase()) return;
    obj.options.length = 0;
    data.forEach(element => {
        obj.add(new Option(element.title, element.value));
    });
};


// export interface onAddInputCallback {
//     (
//         label: HTMLLabelElement,
//         input: HTMLInputElement,
//         span: HTMLSpanElement
//     ): any
// };
// export const addInputs = (
//     holder: HTMLElement | string,
//     data: Array<{ title: string, value: string, after: boolean }>,
//     callback?: onAddInputCallback
// ): void => {
//     let obj = holder instanceof HTMLElement ?
//         holder :
//         document.querySelector(holder) as HTMLElement;
//     if (null === obj) return;

//     data.forEach(element => {
//         let label = document.createElement('label') as HTMLLabelElement;
//         let span = document.createElement('span') as HTMLSpanElement;
//         let input = document.createElement('input') as HTMLInputElement;

//         span.innerHTML = element.title;
//         input.value = element.value;
//         if (undefined !== callback) callback(label, input, span);
//         if (true === element.after) {
//             label.appendChild(input);
//             label.appendChild(span);
//         } else {
//             label.appendChild(span);
//             label.appendChild(input);
//         }
//         obj.appendChild(label);
//     });
// };
