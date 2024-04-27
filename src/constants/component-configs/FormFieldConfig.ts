import { ClearIcon } from '@canva/app-ui-kit';
import { ComponentType, OptionTypes } from '../ComponentTypes';

export const FormFieldConfig = [
    {
        type: ComponentType.SELECT,
        name: 'Control',
        tabId: 'form field',
        options: [
            {
                label: 'Text input',
                value: 'text input',
            },
            {
                label: 'Multiline input',
                value: 'multiline input',
            },
            {
                label: 'Numberinput',
                value: 'number input',
            },
            {
                label: 'Select',
                value: 'select',
            },
            {
                label: 'Checkbox field',
                value: 'checkbox field',
            },
            {
                label: 'Checkbox group',
                value: 'checkbox group',
            },
            {
                label: 'Radio group',
                value: 'radio group',
            },
            {
                label: 'Segmented control',
                value: 'segmented control',
            },
        ],
        defaultValue: 'text input',
    },

    {
        type: ComponentType.FORM_FIELD,
        name: 'Label',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Label',
        tabId: 'form field',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Description (optional)',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Description text',
        tabId: 'form field',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Width',
        label: 'Label',
        description: 'Description text',
        value: '328',
        tabId: 'form field',
    },

    {
        type: ComponentType.CATEGORY,
        tabId: 'form field',
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
        type: ComponentType.SWITCH,
        name: 'Error',
        defaultValue: false,
        tabId: 'form field',
    },

    {
        type: ComponentType.FORM_FIELD,
        name: 'Text',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Placeholder',
        tabId: 'control',
    },
    {
        type: ComponentType.SWITCH,
        name: 'With text',
        defaultValue: false,
        tabId: 'control',
    },
    {
        type: ComponentType.ICON_SELECTOR,
        name: 'Start decorator  (optional)',
        tabId: 'control',
    },
    {
        type: ComponentType.SELECT,
        name: 'End decorator',
        tabId: 'control',
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
        defaultValue: 'none',
    },
    {
        type: ComponentType.SELECT,
        name: 'State',
        tabId: 'control',

        options: [
            {
                label: 'Default',
                value: 'default',
            },
            {
                label: 'Disabled',
                value: 'disabled',
            },
        ],
        defaultValue: 'default',
        placeholder: 'Choose a State',
    },
];
