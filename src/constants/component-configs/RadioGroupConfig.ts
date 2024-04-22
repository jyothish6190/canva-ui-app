import { ComponentType, OptionTypes } from '../ComponentTypes';

export const RadioGroupConfig = [
    {
        type: ComponentType.SWITCH,
        name: 'Hug Content',
        defaultValue: true,
    },

    {
        type: ComponentType.OPTIONS_LIST,
        optionType: OptionTypes.RADIO,
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
                value: 'lcustom',
            },
        ],
    },
];
