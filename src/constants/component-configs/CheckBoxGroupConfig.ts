import { ComponentType, OptionTypes } from '../ComponentTypes';
export enum CheckboxGroupFieldNames {
    HUG_CONTENT = 'Hug Content',
    WIDTH = 'Width',
    WIDTH_OPTION = 'Width options',
    CHECKBOX_OPTIONS = ' Options',
}

export const CheckBoxGroupConfig = [
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: CheckboxGroupFieldNames.HUG_CONTENT,
        defaultValue: true,
    },
    {
        showComponent: false,
        type: ComponentType.FORM_FIELD,
        name: CheckboxGroupFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
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
    },

    {
        showComponent: true,
        type: ComponentType.OPTIONS_LIST,
        optionType: OptionTypes.CHECKBOX,
        name: CheckboxGroupFieldNames.CHECKBOX_OPTIONS,
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
    },
];
