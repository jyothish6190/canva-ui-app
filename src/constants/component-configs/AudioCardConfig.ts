import { ComponentType } from '../ComponentTypes';

export enum AudioCardFieldNames {
    TITLE = 'Title',
    DURATION = 'Duration in seconds',
    STATE = 'State',
    WIDTH = 'Width',
}

export const AudioCardConfig = [
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: AudioCardFieldNames.TITLE,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Title',
        value: 'Card Title',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: AudioCardFieldNames.DURATION,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Duration',
        value: 86,
    },

    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: AudioCardFieldNames.STATE,
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
        value: 'default',
        placeholder: 'Choose a State',
    },

    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: AudioCardFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Width',
        value: 296,
    },
];
