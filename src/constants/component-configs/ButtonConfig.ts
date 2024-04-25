import { ComponentType } from '../ComponentTypes';
import { icons } from '../icons';

export enum ButtonFieldNames {
    VARIANT = 'Variant',
    TEXT = 'Text',
    ICON_SELECTION = 'Icon (optional)',
    STATE = 'State',
    HUG_CONTENT = 'Hug Content',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
}

export const ButtonConfig = [
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: ButtonFieldNames.VARIANT,
        options: [
            {
                label: 'Primary',
                value: 'primary',
            },
            {
                label: 'Secondary',
                value: 'secondary',
            },
            {
                label: 'Tertiary',
                value: 'tertiary',
            },
        ],
        defaultValue: 'primary',
        value: 'primary',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: ButtonFieldNames.TEXT,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Button',
    },
    {
        type: ComponentType.ICON_SELECTOR,
        name: ButtonFieldNames.ICON_SELECTION,
    },
    {
        type: ComponentType.SELECT,
        name: ButtonFieldNames.STATE,
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
                label: 'Loading',
                value: 'loading',
            },
            {
                label: 'Disabled',
                value: 'disabled',
            },
        ],
        defaultValue: 'default',
        placeholder: 'Choose a State',
    },
    {
        type: ComponentType.SWITCH,
        name: ButtonFieldNames.HUG_CONTENT,
        defaultValue: true,
    },
    {
        type: ComponentType.FORM_FIELD,
        name: ButtonFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
    },
    {
        type: ComponentType.CATEGORY,
        name: ButtonFieldNames.WIDTH_OPTIONS,
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
];
