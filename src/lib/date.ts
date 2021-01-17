/**
 * 日期格式化
 * @param toFormat
 * @param formatType
 */
export const format =
(toFormat? : Date | string | number, formatType?: string) => {
    if (undefined === toFormat)
        toFormat = new Date();
    else
        toFormat = (toFormat instanceof Date) ? toFormat : new Date(toFormat);
    formatType = formatType || 'y-M-d h:m:s S';

    const buf: Array<string | number> = [];
    for(let i=0; i<formatType.length; i++) {
        let ch = formatType.substr(i, 1);
        switch(ch) {
            case 'y': buf.push(toFormat.getFullYear()); break;
            case 'M': buf.push(toFormat.getMonth()+1); break;
            case 'd': buf.push(toFormat.getDate()); break;
            case 'h': buf.push(toFormat.getHours()); break;
            case 'm': buf.push(toFormat.getMinutes()); break;
            case 's': buf.push(toFormat.getSeconds()); break;
            case 'S': buf.push(toFormat.getMilliseconds()); break;
            default: buf.push(ch); break;
        }
    }
    return buf.join('');
};
