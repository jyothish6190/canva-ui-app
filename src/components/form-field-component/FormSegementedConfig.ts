import { ComponentType, OptionTypes } from 'src/constants/ComponentTypes';
import { FormControlNames, FormFieldNames } from './FormFieldConfig';
import { SegmentedControlFieldNames } from '../segmented-control/SegmentedControlConfig';

export const FormSegmentedConfig = [
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
        value: FormControlNames.FORM_SEGMENTED_CONTROL,
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
        name: SegmentedControlFieldNames.WIDTH,
        label: 'Label',
        value: 328,
        min: 158,
        max: 1366,
        description: 'Description text',
        tabId: 'form field',
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: SegmentedControlFieldNames.WIDTH_OPTION,
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
        tabId: 'form field',
    },

    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: SegmentedControlFieldNames.TYPE,
        options: [
            {
                label: 'Text',
                value: 'text',
            },
            {
                label: 'Icon',
                value: 'icon',
            },
        ],
        defaultValue: 'text',
        value: 'text',
        tabId: 'control',
    },
    {
        showComponent: true,
        type: ComponentType.OPTIONS_LIST,
        optionType: OptionTypes.RADIO,
        name: SegmentedControlFieldNames.OPTIONS,
        options: [
            {
                key: 1,
                label: 'S',
                value: 's',
                selected: true,
            },
            {
                key: 2,
                label: 'M',
                value: 'm',
                selected: false,
            },
            {
                key: 3,
                label: 'L',
                value: 'l',
                selected: false,
            },
        ],
        value: 's',
        tabId: 'control',
    },
];
