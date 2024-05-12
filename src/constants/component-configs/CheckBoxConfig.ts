import { ComponentType } from '../ComponentTypes';

export enum CheckBoxFieldNames {
    CHECKED = 'Checked',
    CHECKBOX_LABEL = 'Label (optional)',
    HUG_CONTENT = 'Hug Content',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
    STATE = 'State',
}

export const CheckBoxConfig = [
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: CheckBoxFieldNames.CHECKED,
        defaultValue: true,
        value: true,
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: CheckBoxFieldNames.CHECKBOX_LABEL,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter checkbox label',
        value: 'Checkbox',
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: CheckBoxFieldNames.HUG_CONTENT,
        defaultValue: true,
    },

    {
        showComponent: false,
        type: ComponentType.FORM_FIELD,
        name: CheckBoxFieldNames.WIDTH,
        label: 'Label',
        value: '158',
        description: 'Description text',
    },
    {
        showComponent: false,
        type: ComponentType.CATEGORY,
        name: CheckBoxFieldNames.WIDTH_OPTIONS,
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
                label: 'Small',
                value: 158,
            },
        ],
    },
    {
        showComponent: true,
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
