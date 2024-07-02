import { ComponentType, OptionTypes } from 'src/constants/ComponentTypes';
import { FormControlNames, FormFieldNames } from './FormFieldConfig';
import { RadioConfigFieldNames } from 'src/constants/component-configs/RadioGroupConfig';

export const FormRadioGroupConfig = [
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
        value: FormControlNames.FORM_RADIO,
    },

    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: 'Label',
        label: 'Label',
        value: 'Label',
        description: 'Description text',
        placeholder: 'Label',
        tabId: 'form field',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: 'Description (optional)',
        label: 'Label',
        value: 'Description text',
        description: 'Description text',
        placeholder: 'Description text',
        tabId: 'form field',
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: RadioConfigFieldNames.HUG_CONTENT,
        defaultValue: true,
        tabId: 'form field',
    },
    {
        showComponent: false,
        type: ComponentType.NUMBER_INPUT,
        name: RadioConfigFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
        tabId: 'form field',
    },
    {
        showComponent: false,
        type: ComponentType.CATEGORY,
        name: RadioConfigFieldNames.WIDTH_OPTION,
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
        tabId: 'form field',
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
        type: ComponentType.OPTIONS_LIST,
        optionType: OptionTypes.RADIO,
        name: RadioConfigFieldNames.RADIO_OPTIONS,
        options: [
            {
                key: 1,
                label: 'Small',
                value: 'small',
            },
            {
                key: 2,
                label: 'Medium',
                value: 'medium',
            },
            {
                key: 3,
                label: 'Large',
                value: 'large',
            },
            {
                key: 4,
                label: 'Custom',
                value: 'custom',
            },
        ],
        value: 'small',
        tabId: 'control',
    },
];
