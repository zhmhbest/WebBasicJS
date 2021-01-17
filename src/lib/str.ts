
/**
 * 以左侧第一次发现的splitter将字符串切割为两部分
 * @param s 被切割的字符串
 * @param splitter 切割字符
 */
export const splitFirstString =
(s: string, splitter: string): Array<string> => {
    const pos = s.indexOf(splitter);
    if (-1 === pos) {
        return [s, ""];
    } else {
        return [
            s.substr(0, pos),
            s.substr(pos + 1, s.length - pos - 1)
        ];
    }
}
