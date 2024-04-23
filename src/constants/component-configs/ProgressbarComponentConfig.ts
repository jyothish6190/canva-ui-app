import { ComponentType } from '../ComponentTypes';

export const ProgressbarConfig = [
    {
        type: ComponentType.SLIDER,
        name: 'Slider',
        defaultValue: 25,
        min: 0,
        max: 100,
        disabled: true,
    },
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Size',
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
        type: ComponentType.FORM_FIELD,
        name: 'Width',
        label: 'Label',
        description: 'Description text',
        value: '158',
    },
    {
        type: ComponentType.CATEGORY,
        options: [
            {
                label: 'Small',
                value: 'small',
            },
            {
                label: 'Medium',
                value: 'medium',
            },
            {
                label: 'Large',
                value: 'large',
            },
            {
                label: 'Custom',
                value: 'lcustom',
            },
        ],
        selectedCategories: [
            {
                label: 'Small',
                value: 'small',
            },
        ],
    },
];
