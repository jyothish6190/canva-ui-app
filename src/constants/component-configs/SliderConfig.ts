import { ComponentType } from '../ComponentTypes';

export const SliderConfig = [
    {
        type: ComponentType.FORM_FIELD,
        name: 'Minimum',
        value: 0,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter description',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Maximum',
        value: 100,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter description',
    },
    {
        type: ComponentType.SLIDER,
        name: 'Value',
        defaultValue: 25,
    },

    {
        type: ComponentType.FORM_FIELD,
        name: 'Width',
        label: 'Label',
        value: '328',
        description: 'Description text',
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
                value: 'custom',
            },
        ],
        selectedCategories: [
            {
                label: 'Medium',
                value: 'medium',
            },
        ],
    },
];
