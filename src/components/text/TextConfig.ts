import { ComponentType } from 'src/constants/ComponentTypes';

export enum TextFieldNames {
    TEXT = 'Text',
    SIZE = 'Size',
    VARIANT = 'Variant',
    TONE = 'Tone',
    ALIGNMENT = 'Alignment',
}

export const TextConfig = [
    {
        showComponent: true,
        type: ComponentType.MULTILINE_INPUT,
        name: TextFieldNames.TEXT,
        placeholder: 'Enter your text',
        value: 'Example title',
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: TextFieldNames.SIZE,
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
        type: ComponentType.SEGMENTED_CONTROL,
        name: TextFieldNames.VARIANT,
        options: [
            {
                label: 'Regular',
                value: 'regular',
            },
            {
                label: 'Bold',
                value: 'bold',
            },
        ],
        defaultValue: 'regular',
        value: 'regular',
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: TextFieldNames.TONE,
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
                value: 'tertiary',
            },
            {
                label: 'Critical',
                value: 'critical',
            },
        ],
        defaultValue: 'primary',
        value: 'primary',
    },
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: TextFieldNames.ALIGNMENT,
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
        defaultValue: 'center',
        value: 'center',
    },
];
