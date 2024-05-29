import { ComponentType } from '../../constants/ComponentTypes';
import { FormControlNames, FormFieldNames } from './FormFieldConfig';
import { MultilineInputFieldNames } from 'src/constants/component-configs/MultiLineInputConfig';

export const FormMultilineConfig = [
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
        value: FormControlNames.FORM_MULTILINE_INPUT,
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
        type: ComponentType.MULTILINE_INPUT,
        name: MultilineInputFieldNames.TEXT,
        placeholder: 'Enter your text',
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: MultilineInputFieldNames.PLACEHOLDER,
        placeholder: 'Placeholder',
        value: 'Placeholder',
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: MultilineInputFieldNames.MAX_CHAR_COUNT,
        label: 'Label',
        description: 'Description text',
        value: '50',
        tabId: 'control',
    },

    {
        showComponent: true,
        type: ComponentType.NUMBER_INPUT,
        name: MultilineInputFieldNames.WIDTH,
        label: 'Label',
        value: 328,
        min: 158,
        max: 1366,
        description: 'Description text',
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: MultilineInputFieldNames.WIDTH_OPTION,
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
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: MultilineInputFieldNames.STATE,
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
