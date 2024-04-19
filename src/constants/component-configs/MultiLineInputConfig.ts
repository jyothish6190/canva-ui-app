import { ComponentType } from '../ComponentTypes';

export const MultiLineInputConfig = [
    {
        type: ComponentType.MULTILINE_INPUT,
        name: 'Text',
        placeholder: 'Placeholder',
    },
    {
        type: ComponentType.SWITCH,
        name: 'With text',
        defaultValue: false,
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Maximum character count  (optional)',
        label: 'Label',
        description: 'Description text',
        value: '50',
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
        name: 'State',
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
