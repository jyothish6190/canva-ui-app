import { ComponentType } from '../ComponentTypes';

export const AlertConfig = [
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Tone',
        options: [
            {
                label: 'Positive',
                value: 'positive',
            },
            {
                label: 'Warning',
                value: 'warning',
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
        name: 'Title (Optional)',
        label: 'Label',
        description: 'Description text',
        placeholder: 'This is an alert.',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Text',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Alert with a title.',
    },

    {
        type: ComponentType.FORM_FIELD,
        name: 'Width',
        label: 'Label',
        value: '328',
        description: 'Description text',
    },
    {
        type: ComponentType.CATEGORY,
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
                value: 'lcustom',
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
        name: 'Dismissible',
        defaultValue: false,
    },
];
