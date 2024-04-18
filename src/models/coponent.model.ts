import { SelectOption } from '@canva/app-ui-kit';
import { ComponentType } from 'src/constants/ComponentTypes';
import { Category } from './category.model';

export interface Component {
    type: ComponentType;
    name: string;
    varient?: string;
    categoryId: string;
    fields?: any[];
    'icon-data'?: string;
    placeholder?: string;
    text?: string;
    label?: string;
    description?: string;
    options?: SelectOption<string>[];
    defaultValue?: any;
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
    value?: number | string;
    tone?: string;
    title?: string;
    durationInSeconds?: number | string;
    previewUrl?: string;
    borderRadius?: string;
    thumbnailUrl?: string;
    children?: string;
    selectedCategories?: Category[];
}

interface Option2 {
    value: string;
    label: string;
    default?: boolean;
}

interface Option {
    value: string;
    label: string;
    selected?: boolean;
}
