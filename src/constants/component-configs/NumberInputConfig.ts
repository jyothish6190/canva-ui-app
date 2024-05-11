import { ComponentType } from '../ComponentTypes';

export enum NumberInputFieldNames {
    VALUE = 'value',
    SPIN_BUTTONS = 'Spin buttons',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
    STATE = 'State',
}

export const NumberInputConfig = [
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: NumberInputFieldNames.VALUE,
        value: 0,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter description',
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: NumberInputFieldNames.SPIN_BUTTONS,
        value: true,
        defaultValue: true,
    },

    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: NumberInputFieldNames.WIDTH,
        label: 'Label',
        value: '328',
        description: 'Description text',
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: NumberInputFieldNames.WIDTH_OPTIONS,
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
                value: 'medium',
            },
        ],
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: NumberInputFieldNames.STATE,
        options: [
            {
                label: 'Default',
                value: 'default',
            },
            {
                label: 'Hover',
                value: 'hover',
            },
            {
                label: 'Active',
                value: 'active',
            },
            {
                label: 'Error',
                value: 'error',
            },
            {
                label: 'Disabled',
                value: 'disabled',
            },
        ],
        defaultValue: 'default',
        placeholder: 'Choose a State',
    },
];
