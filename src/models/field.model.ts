export interface Field {
    type: string;
    id: string;
    title?: string;
    options?: Option[];
    value?: string;
    default?: boolean;
    placeholder?: string;
}

export interface Option {
    value: string;
    label: string;
    preset?: string;
    'min-value'?: string;
    'max-value'?: string;
    'max-length'?: number;
}
