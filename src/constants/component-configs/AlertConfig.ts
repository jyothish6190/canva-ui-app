import { ComponentType } from '../ComponentTypes';

export enum AlertFieldNames {
    TONE = 'Tone',
    TITLE = 'Title (Optional)',
    TEXT = 'Text',
    WIDTH = 'Width',
    WIDTH_OPTION = 'Width option',
    DISMISSIBLE = 'Dismissible',
}

export const AlertConfig = [
    {
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
        type: ComponentType.FORM_FIELD,
        name: AlertFieldNames.TITLE,
        label: 'Label',
        description: 'Description text',
        placeholder: 'This is an alert.',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: AlertFieldNames.TEXT,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Alert with a title.',
    },

    {
        type: ComponentType.FORM_FIELD,
        name: AlertFieldNames.WIDTH,
        label: 'Label',
        value: '328',
        description: 'Description text',
    },
    {
        type: ComponentType.CATEGORY,
        name: AlertFieldNames.WIDTH_OPTION,
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
                label: 'Small',
                value: 'small',
            },
        ],
    },
    {
        type: ComponentType.SWITCH,
        name: AlertFieldNames.DISMISSIBLE,
        defaultValue: false,
    },
];
