import { ComponentType } from '../ComponentTypes';

export enum ProgressBarFieldNames {
    PERCENTAGE = 'Percentage',
    SIZE = 'Size',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width Options',
}

export const ProgressbarConfig = [
    {
        showComponent: true,
        type: ComponentType.SLIDER,
        name: ProgressBarFieldNames.PERCENTAGE,
        defaultValue: 50,
        min: 0,
        max: 100,
        disabled: true,
    },
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: ProgressBarFieldNames.SIZE,
        options: [
            {
                label: 'Small',
                value: 'small',
            },
            {
                label: 'Medium',
                value: 'medium',
            },
        ],
        defaultValue: 'small',
        value: 'small',
    },

    {
        showComponent: true,
        type: ComponentType.NUMBER_INPUT,
        name: ProgressBarFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 158,
        max: 1366,
        value: '158',
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: ProgressBarFieldNames.WIDTH_OPTIONS,
        options: [
            {
                label: 'Small',
                value: 158,
            },
            {
                label: 'Medium',
                value: 328,
            },
            {
                label: 'Large',
                value: 600,
            },
            {
                label: 'Custom',
                value: 240,
            },
        ],
        selectedCategories: [
            {
                label: 'Small',
                value: 158,
            },
        ],
    },
];
