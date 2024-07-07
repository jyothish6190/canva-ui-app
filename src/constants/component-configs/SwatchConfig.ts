import { ComponentType } from '../ComponentTypes';

export enum SwatchFieldnames {
    COLOR_PICKER = 'Color',
    ACTIVE = 'Active',
    VARIANT = 'Variant',
    SIZE = 'Size',
}

export const SwatchConfig = [
    {
        showComponent: true,
        type: ComponentType.COLOR_PICKER,
        name: SwatchFieldnames.COLOR_PICKER,
        color: '#E0D9FC',
        categoryId: 'color',
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: SwatchFieldnames.ACTIVE,
        defaultValue: false,
    },
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: SwatchFieldnames.VARIANT,
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
        value: 'solid',
    },
];
