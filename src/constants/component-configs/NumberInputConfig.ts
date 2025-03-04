import { ComponentType } from '../ComponentTypes';

export enum NumberInputFieldNames {
    VALUE = 'Value',
    SPIN_BUTTONS = 'Spin buttons',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
    STATE = 'State',
}

export const NumberInputConfig = [
    {
        showComponent: true,
        type: ComponentType.NUMBER_INPUT,
        name: NumberInputFieldNames.VALUE,
        value: 0,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter a number',
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
        type: ComponentType.NUMBER_INPUT,
        name: NumberInputFieldNames.WIDTH,
        label: 'Label',
        value: 328,
        min: 158,
        max: 1366,
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
                value: 328,
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
        value: 'default',
        placeholder: 'Choose a State',
    },
];
