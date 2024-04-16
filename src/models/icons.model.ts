export interface Icon {
    value: string;
    label: string;
    icon?: () => JSX.Element;
}
