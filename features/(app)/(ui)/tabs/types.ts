export interface TabConfig<T extends string> {
    id: T;
    label: string;
    show?: boolean;
}
