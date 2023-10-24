// <reference types="app/store/types" />
declare module '*.module.scss' {
    type StylesType = Record<string, string>;

    declare const styles: StylesType;

    export default styles;
}

declare interface EventTarget extends EventTarget {
    files: FileList | null;
}

declare module '*.json';

declare module '*.jpg';

declare module '*.jpeg';

declare module '*.png';

declare module '*.webp';

declare module '*.svg';
