import { ComponentType } from '../ComponentTypes';
import { icons } from '../icons';
export enum BadgeFieldNames {
    TEXT = 'Text',
    TONE = 'Tone',
    SHAPE = 'Shape',
}

export const BadgeConfig = [
    {
        type: ComponentType.FORM_FIELD,
        name: BadgeFieldNames.TEXT,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Badge',
    },
    {
        type: ComponentType.SELECT,
        name: BadgeFieldNames.TONE,
        options: [
            {
                label: 'assist',
                value: 'assist',
            },
            {
                label: 'critical',
                value: 'critical',
            },
            {
                label: 'info',
                value: 'info',
            },
            {
                label: 'nuetral',
                value: 'nuetral',
            },
            {
                label: 'positive',
                value: 'positive',
            },
            {
                label: 'warn',
                value: 'warn',
            },
        ],
        defaultValue: 'assist',
        placeholder: 'Choose a Tone',
    },
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: BadgeFieldNames.SHAPE,
        options: [
            {
                label: 'Regular',
                value: 'regular',
            },
            {
                label: 'Circle',
                value: 'circle',
            },
        ],
        defaultValue: 'regular',
        value: 'regular',
    },
];
