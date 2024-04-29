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
        type: ComponentType.FORM_FIELD,
        name: NumberInputFieldNames.VALUE,
        value: 0,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter description',
    },
    {
        type: ComponentType.SWITCH,
        name: NumberInputFieldNames.SPIN_BUTTONS,
        value: true,
    },

    {
        type: ComponentType.FORM_FIELD,
        name: NumberInputFieldNames.WIDTH,
        label: 'Label',
        value: '328',
        description: 'Description text',
    },
    {
        type: ComponentType.CATEGORY,
        name: NumberInputFieldNames.WIDTH_OPTIONS,
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
    {
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
