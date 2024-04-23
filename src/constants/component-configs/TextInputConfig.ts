import { ChevronDownIcon, ClearIcon, SearchIcon } from '@canva/app-ui-kit';
import { ComponentType } from '../ComponentTypes';

export const TextInputConfig = [
    {
        type: ComponentType.FORM_FIELD,
        name: 'Text',
        value: 'Hello world',
        placeholder: 'Placeholder',
    },
    {
        type: ComponentType.SWITCH,
        name: 'With text',
        NoneValue: true,
    },
    {
        type: ComponentType.ICON_SELECTOR,
        name: 'Start decorator (optional)',
    },
    {
        type: ComponentType.SELECT,
        name: 'End decorator',
        options: [
            {
                label: 'None',
                value: 'none',
            },
            {
                label: 'Clear',
                value: ClearIcon,
            },
            {
                label: 'Text',
                value: 'text',
            },
            {
                label: 'Character count',
                value: 'Character count',
            },
        ],
        defaultValue: 'text',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'End Text',
        label: 'Label',
        value: 'End Text',
        description: 'Description text',
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
                label: 'None',
                value: 'None',
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
                label: 'Error',
                value: 'error',
            },
            {
                label: 'Disabled',
                value: 'disabled',
            },
        ],
        NoneValue: 'None',
        placeholder: 'Choose a State',
    },
];
