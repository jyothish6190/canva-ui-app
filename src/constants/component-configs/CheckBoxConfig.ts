import { ComponentType } from '../ComponentTypes';

export enum CheckBoxFieldNames {
    CHECKED = 'Checked',
    CHECKBOX_LABEL = 'Label  (optional)',
    HUG_CONTENT = 'Hug content',
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
        type: ComponentType.NUMBER_INPUT,
        name: CheckBoxFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
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
        ],
        value: 'default',
        placeholder: 'Choose a State',
    },
];
