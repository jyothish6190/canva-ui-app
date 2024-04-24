import { ComponentType } from '../ComponentTypes';
import { icons } from '../icons';

export const PillConfig = [
    {
        type: ComponentType.FORM_FIELD,
        name: 'Text',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Pill',
    },
    {
        type: ComponentType.ICON_SELECTOR,
        name: 'Start decorator (optional)',
    },
    {
        type: ComponentType.ICON_SELECTOR,
        name: 'End decorator (optional)',
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
        vlue: '158',
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
];
