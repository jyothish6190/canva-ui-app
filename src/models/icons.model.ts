export interface Icon {
    id: string;
    name: string;
    icon: () => JSX.Element;
}
