import { ComponentType } from '../ComponentTypes';

export enum SwitchFieldNames {
    CHECKED = 'Checked',
    LABEL = 'Label (optional)',
    DESCRIPTION = 'Description (optional)',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
    STATE = 'State',
}

export const SwitchConfig = [
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: SwitchFieldNames.CHECKED,
        defaultValue: true,
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: SwitchFieldNames.LABEL,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter switch label',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: SwitchFieldNames.DESCRIPTION,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter description',
    },

    {
        showComponent: false,
        type: ComponentType.NUMBER_INPUT,
        name: SwitchFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
    },
    {
        showComponent: false,
        type: ComponentType.CATEGORY,
        name: SwitchFieldNames.WIDTH_OPTIONS,
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
                label: 'Medium',
                value: 328,
            },
        ],
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: SwitchFieldNames.STATE,
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
        value: 'default',
        placeholder: 'Choose a State',
    },
];
