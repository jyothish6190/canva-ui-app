import { ComponentType } from '../ComponentTypes';

export enum MultilineInputFieldNames {
    TEXT = 'Text',
    WITH_TEXT = 'With Text',
    MAX_CHAR_COUNT = 'Maximum character count  (optional)',
    WIDTH = 'Width',
    WIDTH_OPTION = 'Width Options',
    STATE = 'State',
}

export const MultiLineInputConfig = [
    {
        showComponent: true,
        type: ComponentType.MULTILINE_INPUT,
        name: MultilineInputFieldNames.TEXT,
        placeholder: 'Placeholder',
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: MultilineInputFieldNames.WITH_TEXT,
        defaultValue: false,
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: MultilineInputFieldNames.MAX_CHAR_COUNT,
        label: 'Label',
        description: 'Description text',
        value: '50',
    },

    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: MultilineInputFieldNames.WIDTH,
        label: 'Label',
        value: 328,
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
        defaultValue: 'default',
        placeholder: 'Choose a State',
    },
];
