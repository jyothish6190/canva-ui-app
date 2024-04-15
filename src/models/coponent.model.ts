import { ComponentType } from 'src/constants/components';

export interface Component {
    type: ComponentType;
    name: string;
    varient?: string;
    categoryId: string;
    fields?: Field[];
    'icon-data'?: string;
    placeholder?: string;
    text?: string;
    label?: string;
    description?: string;
    options?: Option2[];
    defaultValue?: boolean | number;
    min?: number;
    max?: number;
    disabled?: boolean;
    hasSpinButtons?: boolean;
    step?: number;
    multiple?: boolean;
    stretch?: boolean;
    fill?: string[];
    size?: string;
    variant?: string;
    color?: string;
    value?: number;
    tone?: string;
    title?: string;
    durationInSeconds?: number | string;
    previewUrl?: string;
    borderRadius?: string;
    thumbnailUrl?: string;
    children?: string;
}

interface Option2 {
    value: string;
    label: string;
    default?: boolean;
}

interface Field {
    id?: string;
    selected?: boolean | string;
    optional?: boolean;
    'default-value'?: string;
    type?: string;
    title?: string;
    options?: Option[];
    value?: string;
    placeholder?: string;
}

interface Option {
    value: string;
    label: string;
    selected?: boolean;
}
