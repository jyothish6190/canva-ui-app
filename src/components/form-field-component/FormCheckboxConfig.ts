import { ComponentType } from 'src/constants/ComponentTypes';
import { FormControlNames, FormFieldNames } from './FormFieldConfig';
import { CheckBoxFieldNames } from 'src/constants/component-configs/CheckBoxConfig';

export const FormCheckboxConfig = [
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
        value: FormControlNames.FORM_CHECKBOX_FIELD,
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
        name: CheckBoxFieldNames.HUG_CONTENT,
        defaultValue: true,
        tabId: 'form field',
    },
    {
        showComponent: false,
        type: ComponentType.NUMBER_INPUT,
        name: CheckBoxFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
        tabId: 'form field',
    },
    {
        showComponent: false,
        type: ComponentType.CATEGORY,
        name: CheckBoxFieldNames.WIDTH_OPTIONS,
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
        name: CheckBoxFieldNames.CHECKED,
        defaultValue: true,
        value: true,
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: CheckBoxFieldNames.CHECKBOX_LABEL,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Enter checkbox label',
        value: 'Checkbox',
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: CheckBoxFieldNames.STATE,
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
                label: 'Pressed',
                value: 'pressed',
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
