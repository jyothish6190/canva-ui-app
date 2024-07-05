import { ChevronDownIcon, ClearIcon, SearchIcon } from '@canva/app-ui-kit';
import { ComponentType } from '../../constants/ComponentTypes';
import { FormControlNames, FormFieldNames } from './FormFieldConfig';
import { TextInputFieldNames } from '../text-input-component/TextInputConfig';

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
        value: FormControlNames.FORM_TEXT_INPUT,
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
        type: ComponentType.NUMBER_INPUT,
        name: TextInputFieldNames.WIDTH,
        label: 'Label',
        value: '328',
        min: 158,
        max: 1366,
        description: 'Description text',
        tabId: 'form field',
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: TextInputFieldNames.WIDTH_OPTIONS,
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
        name: TextInputFieldNames.TEXT,
        value: 'Hello world',
        placeholder: 'Enter your text',
        tabId: 'control',
    },
    // {
    //     showComponent: true,
    //     type: ComponentType.FORM_FIELD,
    //     name: TextInputFieldNames.PLACEHOLDER,
    //     placeholder: 'Placeholder',
    //     value: 'Placeholder',
    //     tabId: 'control',
    // },*/Temporarily removed placeholder/*
    {
        showComponent: true,
        type: ComponentType.ICON_SELECTOR,
        name: TextInputFieldNames.START_DECORATOR,
        tabId: 'control',
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
