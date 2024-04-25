import { ComponentType } from '../ComponentTypes';
import { icons } from '../icons';
export enum IconButtonFieldNames {
    VARIANT = 'Variant',
    ICON_SELECTION = 'Icon ',
    STATE = 'State',
    HUG_CONTENT = 'Hug Content',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
}

export const IconButtonConfig = [
    {
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
        type: ComponentType.ICON_SELECTOR,
        name: IconButtonFieldNames.ICON_SELECTION,
    },
    {
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
        defaultValue: 'default',
        placeholder: 'Choose a State',
    },
    {
        type: ComponentType.SWITCH,
        name: IconButtonFieldNames.HUG_CONTENT,
        defaultValue: true,
    },
    {
        type: ComponentType.FORM_FIELD,
        name: IconButtonFieldNames.WIDTH,
        label: 'Label',
        value: '158',
        description: 'Description text',
    },
    {
        type: ComponentType.CATEGORY,
        name: IconButtonFieldNames.WIDTH_OPTIONS,
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
];
