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
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: SliderFieldNames.MINIMUM,
        value: 0,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter description',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: SliderFieldNames.MAXIMUM,
        value: 100,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter description',
    },
    {
        showComponent: true,
        type: ComponentType.SLIDER,
        name: SliderFieldNames.VALUE,
        value: 25,
        defaultValue: 25,
    },

    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: SliderFieldNames.WIDTH,
        label: 'Label',
        value: 328,
        min: 158,
        max: 1366,
        description: 'Description text',
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: SliderFieldNames.WIDTH_OPTIONS,
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
                label: 'Medium',
                value: 328,
            },
        ],
    },
];
