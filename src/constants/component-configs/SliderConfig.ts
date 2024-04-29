import { ComponentType } from '../ComponentTypes';

export enum SliderFieldNames {
    MINIMUM = 'Minimum',
    MAXIMUM = 'Maximum',
    VALUE = 'Value',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width Options',
}

export const SliderConfig = [
    {
        type: ComponentType.FORM_FIELD,
        name: SliderFieldNames.MINIMUM,
        value: 0,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter description',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: SliderFieldNames.MAXIMUM,
        value: 100,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter description',
    },
    {
        type: ComponentType.SLIDER,
        name: SliderFieldNames.VALUE,
        value: 25,
        defaultValue: 25,
    },

    {
        type: ComponentType.FORM_FIELD,
        name: SliderFieldNames.WIDTH,
        label: 'Label',
        value: '328',
        description: 'Description text',
    },
    {
        type: ComponentType.CATEGORY,
        name: SliderFieldNames.WIDTH_OPTIONS,
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
