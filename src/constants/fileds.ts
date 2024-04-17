import { Field } from 'src/models/field.model';

export const fields: Field[] = [
    {
        type: 'segmented-control',
        id: 'varient',
        title: 'Varient',
        options: [
            {
                value: 'primary',
                label: 'Primary',
            },
            {
                value: 'secondary',
                label: 'Secondary',
            },
            {
                value: 'tertiary',
                label: 'Tertiary',
            },
        ],
    },
    {
        type: 'text',
        id: 'text',
        title: 'Text',
        value: 'Button',
    },
    {
        type: 'select',
        id: 'button-state',
        title: 'State',
        options: [
            {
                value: 'default',
                label: 'Default',
            },
            {
                value: 'hover',
                label: 'Hover',
            },
            {
                value: 'active',
                label: 'Active',
            },
            {
                value: 'loading',
                label: 'Loading',
            },

            {
                value: 'disabled',
                label: 'Disabled',
            },
        ],
    },
    {
        type: 'switch',
        id: 'hug-content',
        title: 'Hug content',
        default: true,
    },
    {
        type: 'size-select',
        id: 'size-select',
        options: [
            {
                value: 'small',
                label: 'Small',
                preset: '158px',
            },
            {
                value: 'medium',
                label: 'Medium',
                preset: '328px',
            },
            {
                value: 'large',
                label: 'Large',
                preset: '600px',
            },
            {
                value: 'custom',
                label: 'Custom',
                preset: '240px',
                'min-value': '158px',
                'max-value': '1366px',
                'max-length': 4,
            },
        ],
    },
    {
        type: 'icon',
        id: 'icon',
        placeholder: 'Choose an icon',
    },
    {
        type: 'select',
        id: 'pill-state',
        title: 'State',
        options: [
            {
                value: 'default',
                label: 'Default',
            },
            {
                value: 'hover',
                label: 'Hover',
            },
            {
                value: 'selected',
                label: 'Selected',
            },
            {
                value: 'disabled',
                label: 'Disabled',
            },
        ],
    },
    {
        type: 'segmented-control',
        id: 'tone',
        title: 'Tone',
        options: [
            {
                value: 'positive',
                label: 'Positive',
            },
            {
                value: 'warning',
                label: 'Warning',
            },
            {
                value: 'critical',
                label: 'Critical',
            },
            {
                value: 'info',
                label: 'Info',
            },
        ],
    },

    {
        type: 'text',
        id: 'title-text',
        title: 'Title',
        value: 'Card title',
    },
];
