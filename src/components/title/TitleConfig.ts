import { ComponentType } from '../../constants/ComponentTypes';

export enum TitleFieldNames {
    TEXT = 'Text',
    SIZE = 'Size',
    TONE = 'Tone',
    ALIGNMENT = 'Alignment',
}

export const TitleConfig = [
    {
        showComponent: true,
        type: ComponentType.MULTILINE_INPUT,
        name: TitleFieldNames.TEXT,
        placeholder: 'Enter your title',
        value: 'Example title',
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: TitleFieldNames.SIZE,
        options: [
            {
                label: 'X large',
                value: 'xlarge',
            },
            {
                label: 'Large',
                value: 'large',
            },

            {
                label: 'Medium',
                value: 'medium',
            },
            {
                label: 'Small',
                value: 'small',
            },
            {
                label: 'X small',
                value: 'xsmall',
            },
        ],
        value: 'medium',
        placeholder: 'Choose a Size',
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: TitleFieldNames.TONE,
        options: [
            {
                label: 'Primary',
                value: 'primary',
            },
            {
                label: 'Secondary',
                value: 'secondary',
            },
            {
                label: 'Tertiary',
                value: 'Tertiary',
            },
            {
                label: 'Critical',
                value: 'critical',
            },
        ],
        value: 'primary',
    },
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: TitleFieldNames.ALIGNMENT,
        options: [
            {
                Icon: 'text-align-left-icon',
                label: undefined,
                value: 'start',
            },
            {
                Icon: 'text-align-center-icon',
                label: undefined,
                value: 'center',
            },
            {
                Icon: 'text-align-right-icon',
                label: undefined,
                value: 'end',
            },
        ],
        value: 'center',
    },
];
