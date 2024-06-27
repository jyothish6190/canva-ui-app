import { SelectOption } from '@canva/app-ui-kit';
import { ComponentType, OptionTypes } from 'src/constants/ComponentTypes';
import { Category } from './category.model';

export interface Component {
    uuid?: string;
    showComponent: boolean;
    type: ComponentType;
    name: string;
    varient?: string;
    categoryId?: string;
    fields?: any[];
    'icon-data'?: string;
    placeholder?: string;
    text?: string;
    label?: string;
    description?: string;
    options?: OptionItem[];
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
    value?: any;
    tone?: string;
    title?: string;
    durationInSeconds?: number | string;
    previewUrl?: string;
    borderRadius?: string;
    thumbnailUrl?: string;
    children?: string;
    selectedCategories?: Category[];
    tabs?: Category[];
    tabId?: string;
    defaultTabValue?: string;
    optionType?: 'radio' | 'checkbox';
    icon?: () => JSX.Element;
    optionContentType?: 'text' | 'icon';
    errorState?: boolean;
}

interface Option2 {
    value: string;
    label: string;
    default?: boolean;
}

export interface OptionItem {
    key: string | number;
    label?: string | (() => JSX.Element);
    value: string;
    description?: string;
    Icon?: () => JSX.Element;
    selected: boolean;
}
