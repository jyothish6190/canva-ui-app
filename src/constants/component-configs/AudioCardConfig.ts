import { ComponentType } from '../ComponentTypes';

export const AudioCardConfig = [
    {
        type: ComponentType.FORM_FIELD,
        name: 'Title',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Button',
        value: 'Card Title',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Duration in seconds',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Button',
        value: '86',
    },

    {
        type: ComponentType.SELECT,
        name: 'State',
        options: [
            {
                label: 'Default',
                value: 'default',
            },
            {
                label: 'Hover',
                value: 'hover',
            },
        ],
        defaultValue: 'default',
        placeholder: 'Choose a State',
    },

    {
        type: ComponentType.FORM_FIELD,
        name: 'Width',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Button',
        value: '296',
    },
];
