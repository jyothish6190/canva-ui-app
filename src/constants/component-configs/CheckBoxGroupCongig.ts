import { ComponentType } from '../ComponentTypes';

export const CheckBoxGroupConfig = [
    {
        type: ComponentType.SWITCH,
        name: 'Hug Content',
        defaultValue: true,
    },

    {
        type: ComponentType.OPTIONS_LIST,
        name: 'Options',
        options: [
            {
                value: 'blueberry',
                label: 'Blueberry',
            },
            {
                value: 'apple',
                label: 'Apple',
            },
            {
                value: 'strawberry',
                label: 'Strawberry',
            },
        ],
    },
];
