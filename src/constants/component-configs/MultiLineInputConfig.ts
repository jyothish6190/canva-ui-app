import { ComponentType } from '../ComponentTypes';

export enum MultilineInputFieldNames {
    TEXT = 'Text',
    PLACEHOLDER = 'Placeholder',
    MAX_CHAR_COUNT = 'Maximum character count  (optional)',
    WIDTH = 'Width',
    WIDTH_OPTION = 'Width options',
    STATE = 'State',
}

export const MultiLineInputConfig = [
    // {
    //     showComponent: true,
    //     type: ComponentType.MULTILINE_INPUT,
    //     name: MultilineInputFieldNames.TEXT,
    //     placeholder: 'Enter your text',
    // },
    // {
    //     showComponent: true,
    //     type: ComponentType.FORM_FIELD,
    //     name: MultilineInputFieldNames.PLACEHOLDER,
    //     placeholder: 'Placeholder',
    //     value: 'Placeholder',
    // },*/Temporarily removed placeholder and textinput/*
    {
        showComponent: true,
        type: ComponentType.NUMBER_INPUT,
        name: MultilineInputFieldNames.MAX_CHAR_COUNT,
        label: 'Label',
        description: 'Description text',
        value: '50',
    },

    {
        showComponent: true,
        type: ComponentType.NUMBER_INPUT,
        name: MultilineInputFieldNames.WIDTH,
        label: 'Label',
        value: 328,
        min: 158,
        max: 1366,
        description: 'Description text',
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: MultilineInputFieldNames.WIDTH_OPTION,
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
        name: MultilineInputFieldNames.STATE,
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
