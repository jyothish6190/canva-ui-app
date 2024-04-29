import { ComponentType } from '../ComponentTypes';

export enum CheckBoxFieldNames {
    CHECKED = 'Checked',
    CHECKBOX_LABEL = 'Label (optional)',
    HUG_CONTENT = 'Hug Content',
    WIDTH = 'Width',
    WIDTH_OPTION = 'Width option',
    STATE = 'State',
}

export const CheckBoxConfig = [
    {
        type: ComponentType.SWITCH,
        name: CheckBoxFieldNames.CHECKED,
        value: true,
    },
    {
        type: ComponentType.FORM_FIELD,
        name: CheckBoxFieldNames.CHECKBOX_LABEL,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter checkbox label',
        value: 'Checkbox',
    },
    {
        type: ComponentType.SWITCH,
        name: CheckBoxFieldNames.HUG_CONTENT,
        defaultValue: false,
    },

    {
        type: ComponentType.FORM_FIELD,
        name: CheckBoxFieldNames.WIDTH,
        label: 'Label',
        value: '158',
        description: 'Description text',
    },
    {
        type: ComponentType.CATEGORY,
        name: CheckBoxFieldNames.WIDTH_OPTION,

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
        name: CheckBoxFieldNames.STATE,
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
