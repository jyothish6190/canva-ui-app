import { ComponentType } from '../ComponentTypes';

export const SwitchConfig = [
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
        placeholder: 'Enter switch label',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Description (optional)',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter description',
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
                label: 'Disabled',
                value: 'disabled',
            },
        ],
        defaultValue: 'default',
        placeholder: 'Choose a State',
    },
];
