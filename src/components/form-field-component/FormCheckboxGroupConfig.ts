import { ComponentType, OptionTypes } from 'src/constants/ComponentTypes';
import { FormControlNames, FormFieldNames } from './FormFieldConfig';
import { CheckboxGroupFieldNames } from 'src/constants/component-configs/CheckBoxGroupConfig';

export const FormCheckboxGroupConfig = [
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
        value: FormControlNames.FORM_CHECKBOX_GROUP,
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
        type: ComponentType.SWITCH,
        name: CheckboxGroupFieldNames.HUG_CONTENT,
        defaultValue: true,
        tabId: 'control',
    },
    {
        showComponent: false,
        type: ComponentType.NUMBER_INPUT,
        name: CheckboxGroupFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
        tabId: 'control',
    },
    {
        showComponent: false,
        type: ComponentType.CATEGORY,
        name: CheckboxGroupFieldNames.WIDTH_OPTION,
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
                label: 'Small',
                value: 158,
            },
        ],
        tabId: 'control',
    },

    {
        showComponent: true,
        type: ComponentType.OPTIONS_LIST,
        optionType: OptionTypes.CHECKBOX,
        name: CheckboxGroupFieldNames.CHECKBOX_OPTIONS,
        options: [
            {
                label: 'Small',
                value: 'Small',
                key: 1,
                checked: true,
            },
            {
                label: 'Medium',
                value: 'Medium',
                key: 2,
                checked: false,
            },
            {
                label: 'Large',
                value: 'Large',
                key: 3,
                checked: false,
            },
            {
                label: 'Custom',
                value: 'Custom',
                key: 4,
                checked: false,
            },
        ],
        tabId: 'control',
    },
];
