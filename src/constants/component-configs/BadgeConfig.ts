import { ComponentType } from '../ComponentTypes';
import { icons } from '../icons';

export const BadgeConfig = [
    {
        type: ComponentType.FORM_FIELD,
        name: 'Text',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Badge',
    },
    {
        type: ComponentType.SELECT,
        name: 'Tone',
        options: [
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
                label: 'assist',
                value: 'assist',
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
        defaultValue: 'critical',
        placeholder: 'Choose a Tone',
    },
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Shape',
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
