import { ComponentType } from '../ComponentTypes';

export enum TypographyFiledNames {
    TEXT = 'Text',
    STATE = 'State',
    WIDTH = 'Width',
}

export const TypographyConfig = [
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: TypographyFiledNames.TEXT,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Text',
        value: 'The Quick brown fox',
    },

    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: TypographyFiledNames.STATE,
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
        value: 'default',
        placeholder: 'Choose a State',
    },

    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: TypographyFiledNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Width',
        value: 296,
    },
];
