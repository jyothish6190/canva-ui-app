import { ComponentType, OptionTypes } from '../ComponentTypes';
export enum CheckboxGroupFieldNames {
    HUG_CONTENT = 'Hug content',
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
        type: ComponentType.NUMBER_INPUT,
        name: CheckboxGroupFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
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
                value: 'Small',
                key: 1,
                selected: true,
            },
            {
                label: 'Medium',
                value: 'Medium',
                key: 2,
                selected: false,
            },
            {
                label: 'Large',
                value: 'Large',
                key: 3,
                selected: false,
            },
            {
                label: 'Custom',
                value: 'Custom',
                key: 4,
                selected: false,
            },
        ],
    },
];
