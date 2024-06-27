import { ComponentType, OptionTypes } from 'src/constants/ComponentTypes';
import {
    FormControlNames,
    FormFieldNames,
} from '../form-field-component/FormFieldConfig';
import { SelectFieldNames } from '../select-component/SelectConfig';

export const enum FormFieldSelectFieldNames {
    PLACEHOLDER = 'Placeholder',
    ACTIVE = 'Active',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
    STATE = 'State',
    SELECT_OPTIONS = 'Options',
    LABEL = 'Label',
    DESCRIPTION = 'Description (optional)',
    ERROR = 'Error',
}

export const FormSelectTabs = [
    {
        label: 'Form field',
        value: 'form field',
    },
    {
        label: 'Control',
        value: 'control',
    },
    {
        label: 'Options',
        value: 'options',
    },
];

export const FormFieldSelectConfig = [
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
                label: 'Checkbox field',
                value: FormControlNames.FORM_CHECKBOX_FIELD,
            },
            {
                label: 'Checkbox group',
                value: FormControlNames.FORM_CHECKBOX_GROUP,
            },
            {
                label: 'Radio group',
                value: FormControlNames.FORM_RADIO,
            },
            {
                label: 'Segmented control',
                value: FormControlNames.FORM_SEGMENTED_CONTROL,
            },
        ],
        value: FormControlNames.FORM_SELECT,
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
        type: ComponentType.NUMBER_INPUT,
        name: SelectFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        value: '328',
        min: 158,
        max: 1366,
        tabId: 'form field',
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: SelectFieldNames.WIDTH_OPTIONS,
        tabId: 'form field',
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
                label: 'Medium',
                value: 328,
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
        name: FormFieldSelectFieldNames.PLACEHOLDER,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Placeholder',
        value: 'Select',
        tabId: 'control',
    },

    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: FormFieldSelectFieldNames.ACTIVE,
        defaultValue: false,
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: FormFieldSelectFieldNames.STATE,
        tabId: 'control',
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
    },

    {
        showComponent: true,
        type: ComponentType.OPTIONS_LIST,
        tabId: 'options',
        name: FormFieldSelectFieldNames.SELECT_OPTIONS,
        optionType: OptionTypes.RADIO,
        options: [
            {
                key: 1,
                label: 'Small',
                value: 'small',
                selected: true,
            },
            {
                key: 2,
                label: 'Medium',
                value: 'medium',
                selected: false,
            },
            {
                key: 3,
                label: 'Large',
                value: 'large',
                selected: false,
            },
            {
                key: 4,
                label: 'Custom',
                value: 'custom',
                selected: false,
            },
        ],
    },
];
