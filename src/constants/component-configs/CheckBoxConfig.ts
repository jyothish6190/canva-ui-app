import { ComponentType } from '../ComponentTypes';

export const CheckBoxConfig = [
    {
        type: ComponentType.SWITCH,
        name: 'Checked',
        defaultValue: true,
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Label (optional)',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter checkbox label',
        value: 'Checkbox',
    },
    {
        type: ComponentType.SWITCH,
        name: 'Hug content',
        defaultValue: false,
    },

    {
        type: ComponentType.FORM_FIELD,
        name: 'Width',
        label: 'Label',
        value: '158',
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
                label: 'Small',
                value: 'small',
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
                label: 'Pressed',
                value: 'pressed',
            },
            {
                label: 'Disabled',
                value: 'disabled',
            },
            {
                label: 'Error',
                value: 'error',
            },
        ],
        defaultValue: 'default',
        placeholder: 'Choose a State',
    },
];
