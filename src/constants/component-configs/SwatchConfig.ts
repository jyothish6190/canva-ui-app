import { ComponentType } from '../ComponentTypes';

export const SwatchConfig = [
    {
        type: ComponentType.SWATCH,
        name: 'Color picker',
        color: '#E0D9FC',
        categoryId: 'color',
    },
    {
        type: ComponentType.SWITCH,
        name: 'Active',
        defaultValue: false,
    },
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Variant',
        options: [
            {
                label: 'Solid',
                value: 'solid',
            },
            {
                label: 'Outline',
                value: 'outline',
            },
        ],
        defaultValue: 'solid',
        value: 'primary',
    },
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Size',
        options: [
            {
                label: 'Xsmall',
                value: 'xsamll',
            },
            {
                label: 'Small',
                value: 'small',
            },
        ],
        defaultValue: 'small',
        value: 'primary',
    },
];
