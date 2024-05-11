import { ClearIcon } from '@canva/app-ui-kit';
import { ComponentType, OptionTypes } from '../ComponentTypes';

export enum FormFieldNames {
    CONTROL = 'control',
}

export const FormFieldConfig = [
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: FormFieldNames.CONTROL,
        tabId: 'form field',
        options: [
            {
                label: 'Text input',
                value: 'text input',
            },
            {
                label: 'Multiline input',
                value: 'Multiline Input',
            },
            {
                label: 'Number input',
                value: 'number input',
            },
            {
                label: 'Select',
                value: 'Select',
            },
            {
                label: 'Checkbox Field',
                value: 'Checkbox',
            },
            {
                label: 'Checkbox Group',
                value: 'Checkbox group',
            },
            {
                label: 'Radio Group',
                value: 'Radio',
            },
            {
                label: 'Segmented control',
                value: 'Segmented control',
            },
        ],
        defaultValue: 'text input',
    },

    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: 'Label',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Label',
        tabId: 'form field',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: 'Description (optional)',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Description text',
        tabId: 'form field',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: 'Width',
        label: 'Label',
        description: 'Description text',
        value: '328',
        tabId: 'form field',
    },

    {
        showComponent: true,
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
        showComponent: true,
        type: ComponentType.SWITCH,
        name: 'Error',
        defaultValue: false,
        tabId: 'form field',
    },

    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: 'Text',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Placeholder',
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: 'With text',
        defaultValue: false,
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.ICON_SELECTOR,
        name: 'Start decorator  (optional)',
        tabId: 'control',
    },
    {
        showComponent: true,
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
        showComponent: true,
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
