import {
    TextAlignCenterIcon,
    TextAlignLeftIcon,
    TextAlignRightIcon,
} from '@canva/app-ui-kit';
import { ComponentType } from '../ComponentTypes';

export const TextConfig = [
    {
        type: ComponentType.MULTILINE_INPUT,
        name: 'Text',
        placeholder: '',
        value: 'Example title',
    },
    {
        type: ComponentType.SELECT,
        name: 'State',
        options: [
            {
                label: 'Small',
                value: 'small',
            },
            {
                label: 'Medium',
                value: 'medium',
            },
            {
                label: 'Large',
                value: 'large',
            },
            {
                label: 'Custom',
                value: 'custom',
            },
        ],
        defaultValue: 'medium',
        placeholder: 'Choose a Size',
    },
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Variant',
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
        value: 'primary',
    },
    {
        type: ComponentType.SELECT,
        name: 'Tone',
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
        ],
        defaultValue: 'primary',
        value: 'primary',
    },
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Alignment',
        options: [
            {
                label: TextAlignLeftIcon(),
                value: 'left-icon',
            },
            {
                label: TextAlignCenterIcon(),
                value: 'center-icon',
            },
            {
                label: TextAlignRightIcon(),
                value: 'right-icon',
            },
        ],
        defaultValue: 'left-icon',
        value: 'primary',
    },
];
