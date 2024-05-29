import { ComponentType } from '../ComponentTypes';
export enum IconButtonFieldNames {
    VARIANT = 'Variant',
    ICON_SELECTION = 'Icon ',
    STATE = 'State',
    HUG_CONTENT = 'Hug content',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
}

export const IconButtonConfig = [
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: IconButtonFieldNames.VARIANT,
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
        showComponent: true,
        type: ComponentType.ICON_SELECTOR,
        name: IconButtonFieldNames.ICON_SELECTION,
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: IconButtonFieldNames.STATE,
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
        value: 'default',
        placeholder: 'Choose a State',
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: IconButtonFieldNames.HUG_CONTENT,
        defaultValue: true,
    },
    {
        showComponent: false,
        type: ComponentType.NUMBER_INPUT,
        name: IconButtonFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
    },
    {
        showComponent: false,
        type: ComponentType.CATEGORY,
        name: IconButtonFieldNames.WIDTH_OPTIONS,
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
