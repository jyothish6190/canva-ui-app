import { ComponentType, OptionTypes } from '../ComponentTypes';

export enum RadioConfigFieldNames {
    HUG_CONTENT = 'Hug content',
    WIDTH = 'Width',
    WIDTH_OPTION = 'Width options',
    RADIO_OPTIONS = 'Radio options',
}

export const RadioGroupConfig = [
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: RadioConfigFieldNames.HUG_CONTENT,
        defaultValue: true,
    },
    {
        showComponent: false,
        type: ComponentType.NUMBER_INPUT,
        name: RadioConfigFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
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
    },
];
