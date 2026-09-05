export interface ScrollElements {
    topBar: HTMLElement | null;
}

export interface ScrollContextValue {
    mainRef: React.RefObject<HTMLElement | null>;

    registerTopBar: (element: HTMLElement | null) => void;
}
