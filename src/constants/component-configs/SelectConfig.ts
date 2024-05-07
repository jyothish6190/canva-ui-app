import { ComponentType, OptionTypes } from '../ComponentTypes';

export const enum SelectFieldNames {
    PLACEHOLDER = 'Placeholder',
    ACTIVE = 'Active',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
    STATE = 'State',
    SELECT_OPTIONS = 'Options',
}

export const SelectConfig = [
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: SelectFieldNames.PLACEHOLDER,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Select',
        value: 'select',
        tabId: 'control',
    },

    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: SelectFieldNames.ACTIVE,
        defaultValue: false,
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: SelectFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        value: '328',
        tabId: 'control',
    },

    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: SelectFieldNames.WIDTH_OPTIONS,
        tabId: 'control',
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
        name: SelectFieldNames.STATE,
        tabId: 'control',
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

    {
        showComponent: true,
        type: ComponentType.OPTIONS_LIST,
        tabId: 'options',
        name: SelectFieldNames.SELECT_OPTIONS,
        optionType: OptionTypes.RADIO,
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
    },
];
