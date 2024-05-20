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
        placeholder: 'Placeholder',
        value: 'Select',
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
        min: 158,
        max: 1366,
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
        value: 'default',
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
                key: 1,
                label: 'Small',
                value: 'small',
            },
            {
                key: 2,
                label: 'Medium',
                value: 'medium',
            },
            {
                key: 3,
                label: 'Large',
                value: 'large',
            },
            {
                key: 4,
                label: 'Custom',
                value: 'custom',
            },
        ],
    },
];
