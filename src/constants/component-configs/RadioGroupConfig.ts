import { ComponentType, OptionTypes } from '../ComponentTypes';

export enum RadioConfigFieldNames {
    HUG_CONTENT = 'Hug Content',
    WIDTH = 'Width',
    WIDTH_OPTION = 'Width options',
    RADIO_OPTIONS = 'Radio Options',
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
        type: ComponentType.FORM_FIELD,
        name: RadioConfigFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
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
