import { ChevronDownIcon, ClearIcon, SearchIcon } from '@canva/app-ui-kit';
import { ComponentType } from '../../constants/ComponentTypes';
import { FormControlNames, FormFieldNames } from './FormFieldConfig';

export enum TextInputFieldNames {
    TEXT = 'Text',
    PLACEHOLDER = 'Placeholder',
    START_DECORATOR = 'Start decorator (optional)',
    END_DECORATOR = 'End decorator',
    END_TEXT = 'End text',
    MAX_CHAR_COUNT = 'Maximum character count',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
    STATE = 'State',
}

export const FormTextInputConfig = [
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
        name: TextInputFieldNames.TEXT,
        value: 'Hello world',
        placeholder: 'Enter your text',
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: TextInputFieldNames.PLACEHOLDER,
        placeholder: 'Placeholder',
        value: 'Placeholder',
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.ICON_SELECTOR,
        name: TextInputFieldNames.START_DECORATOR,
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: TextInputFieldNames.END_DECORATOR,
        options: [
            {
                label: 'None',
                value: 'none',
            },
            {
                label: 'Clear',
                value: 'clear',
            },
            {
                label: 'Text',
                value: 'text',
            },
            {
                label: 'Character count',
                value: 'character count',
            },
        ],
        value: 'none',
        tabId: 'control',
    },
    {
        showComponent: false,
        type: ComponentType.FORM_FIELD,
        name: TextInputFieldNames.END_TEXT,
        label: 'Label',
        value: 'End Text',
        description: 'Description text',
        tabId: 'control',
    },
    {
        showComponent: false,
        type: ComponentType.FORM_FIELD,
        name: TextInputFieldNames.MAX_CHAR_COUNT,
        label: 'Label',
        description: 'Description text',
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: TextInputFieldNames.STATE,
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
                label: 'Error',
                value: 'error',
            },
            {
                label: 'Disabled',
                value: 'disabled',
            },
        ],
        value: 'default',
        placeholder: 'Choose a State',
        tabId: 'control',
    },
];
