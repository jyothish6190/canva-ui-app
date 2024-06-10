import { ClearIcon } from '@canva/app-ui-kit';
import { ComponentType } from '../../constants/ComponentTypes';

export enum FormFieldNames {
    CONTROL = 'Control',
}

export const FormTabs = [
    {
        label: 'Form field',
        value: 'form field',
    },
    {
        label: 'Control',
        value: 'control',
    },
];

export enum FormControlNames {
    TEXT_INPUT = 'Text input',
    MULTILINE_INPUT = 'Multiline input',
    NUMBER_INPUT = 'Number input',
    SELECT = 'Select',
    CHECKBOX_FIELD = 'Checkbox',
    CHECKBOX_GROUP = 'Checkbox group',
    RADIO = 'Radio',
    SEGMENTED_CONTROL = 'Segmented control',
    FORM_TEXT_INPUT = 'Form Text input',
    FORM_MULTILINE_INPUT = 'Form Multiline input',
    FORM_NUMBER_INPUT = 'Form Number input',
    FORM_SELECT = 'Form Select',
    FORM_CHECKBOX_FIELD = 'Form Checkbox',
    FORM_CHECKBOX_GROUP = 'Form Checkbox group',
    FORM_RADIO = 'Form Radio',
    FORM_SEGMENTED_CONTROL = 'Form Segmented control',
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
                value: FormControlNames.FORM_TEXT_INPUT,
            },
            {
                label: 'Multiline input',
                value: FormControlNames.FORM_MULTILINE_INPUT,
            },
            {
                label: 'Number input',
                value: FormControlNames.FORM_NUMBER_INPUT,
            },
            {
                label: 'Select',
                value: FormControlNames.FORM_SELECT,
            },
            {
                label: 'Checkbox Field',
                value: FormControlNames.FORM_CHECKBOX_FIELD,
            },
            {
                label: 'Checkbox Group',
                value: FormControlNames.FORM_CHECKBOX_GROUP,
            },
            {
                label: 'Radio Group',
                value: FormControlNames.FORM_RADIO,
            },
            {
                label: 'Segmented control',
                value: FormControlNames.FORM_SEGMENTED_CONTROL,
            },
        ],
        value: FormControlNames.FORM_TEXT_INPUT,
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
