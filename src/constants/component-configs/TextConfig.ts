import {
    TextAlignCenterIcon,
    TextAlignLeftIcon,
    TextAlignRightIcon,
} from '@canva/app-ui-kit';
import { ComponentType } from '../ComponentTypes';

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
        placeholder: '',
        value: 'Example title',
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: TextFieldNames.SIZE,
        options: [
            {
                label: 'large',
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
        ],
        defaultValue: 'medium',
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
                label: 'primary',
                value: 'primary',
            },
            {
                label: 'secondary',
                value: 'secondary',
            },
            {
                label: 'tertiary',
                value: 'Tertiary',
            },
            {
                label: 'critical',
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
                label: TextAlignLeftIcon(),
                value: 'start',
            },
            {
                label: TextAlignCenterIcon(),
                value: 'center',
            },
            {
                label: TextAlignRightIcon(),
                value: 'end',
            },
        ],
        defaultValue: 'center',
        value: 'center',
    },
];
