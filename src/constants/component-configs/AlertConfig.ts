import { ComponentType } from '../ComponentTypes';

export enum AlertFieldNames {
    TONE = 'Tone',
    TITLE = 'Title (optional)',
    TEXT = 'Text',
    WIDTH = 'Width',
    WIDTH_OPTION = 'Width option',
    DISMISSIBLE = 'Dismissible',
}

export const AlertConfig = [
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: AlertFieldNames.TONE,
        options: [
            {
                label: 'Positive',
                value: 'positive',
            },
            {
                label: 'Warning',
                value: 'warn',
            },
            {
                label: 'Critical',
                value: 'critical',
            },
            {
                label: 'Info',
                value: 'info',
            },
        ],
        defaultValue: 'positive',
        value: 'positive',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: AlertFieldNames.TITLE,
        label: 'Label',
        description: 'Description text',
        value: 'This is an alert.',
        placeholder: 'Alert title',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: AlertFieldNames.TEXT,
        label: 'Label',
        description: 'Description text',
        value: 'Alert with a title.',
        placeholder: 'Alert text',
    },

    {
        showComponent: true,
        type: ComponentType.NUMBER_INPUT,
        name: AlertFieldNames.WIDTH,
        label: 'Label',
        value: '328',
        description: 'Description text',
        min: 240,
        max: 1920,
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: AlertFieldNames.WIDTH_OPTION,
        options: [
            {
                label: 'Small',
                value: 328,
            },
            {
                label: 'Medium',
                value: 768,
            },
            {
                label: 'Large',
                value: 1366,
            },
            {
                label: 'Custom',
                value: 240,
            },
        ],
        selectedCategories: [
            {
                label: 'Small',
                value: 328,
            },
        ],
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: AlertFieldNames.DISMISSIBLE,
        defaultValue: false,
    },
];
