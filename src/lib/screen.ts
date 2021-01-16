export interface Rect {
    top: number,
    left: number,
    width: number,
    height: number
};

export const getClientRect =
(): Rect => {
    const dom = document.documentElement;
    return {
        top: dom.clientTop,
        left: dom.clientLeft,
        width: dom.clientWidth,
        height: dom.clientHeight
    } as Rect;
};

export interface onScreenResizeCallback {
    (
        this: GlobalEventHandlers | null,
        ev: UIEvent | null
    ): any
};

/**
 * 添加尺寸调整响应
 */
export const pushOnScreenResize =
(fn: onScreenResizeCallback): void => {
    const pr = window.onresize as onScreenResizeCallback;
    if (null === pr || undefined === pr) {
        window.onresize = fn;
    } else {
        // 方法链
        window.onresize = function (this: GlobalEventHandlers, ev: UIEvent): any {
            pr.call(this as Window, ev);
            fn.call(this as Window, ev);
        }
    }
};