import { ComponentType } from '../ComponentTypes';
import { icons } from '../icons';
export enum BadgeFieldNames {
    TEXT = 'Text',
    TONE = 'Tone',
    SHAPE = 'Shape',
}

export const BadgeConfig = [
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: BadgeFieldNames.TEXT,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Badge text',
        value: 'Badge',
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: BadgeFieldNames.TONE,
        options: [
            {
                label: 'Assist',
                value: 'assist',
            },
            {
                label: 'Critical',
                value: 'critical',
            },
            {
                label: 'Info',
                value: 'info',
            },
            {
                label: 'Nuetral',
                value: 'nuetral',
            },
            {
                label: 'Positive',
                value: 'positive',
            },
            {
                label: 'Warn',
                value: 'warn',
            },
        ],
        value: 'assist',
        placeholder: 'Choose a Tone',
    },
    {
        showComponent: true,
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
