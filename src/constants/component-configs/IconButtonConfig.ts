import { ComponentType } from '../ComponentTypes';
import { icons } from '../icons';

export const IconButtonConfig = [
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Variant',
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
                value: 'Tertiary',
            },
        ],
        defaultValue: 'primary',
        value: 'primary',
    },

    {
        type: ComponentType.SELECT,
        name: 'Icon (optional)',
        options: icons,
        placeholder: 'Choose an Icon',
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
        name: 'Hug Content',
        defaultValue: true,
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
                value: 'lcustom',
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
