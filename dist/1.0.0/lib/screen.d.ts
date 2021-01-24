export interface Rect {
    top: number;
    left: number;
    width: number;
    height: number;
}
export declare const getClientRect: () => Rect;
export interface onScreenResizeCallback {
    (this: GlobalEventHandlers | null, ev: UIEvent | null): any;
}
/**
 * 添加尺寸调整响应
 */
export declare const pushOnScreenResize: (fn: onScreenResizeCallback) => void;
