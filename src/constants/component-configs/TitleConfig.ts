import {
    TextAlignCenterIcon,
    TextAlignLeftIcon,
    TextAlignRightIcon,
} from '@canva/app-ui-kit';
import { ComponentType } from '../ComponentTypes';

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
                label: 'xlarge',
                value: 'xlarge',
            },
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
            {
                label: 'xsmall',
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
                Icon: TextAlignLeftIcon,
                label: undefined,
                value: 'start',
            },
            {
                Icon: TextAlignCenterIcon,
                label: undefined,
                value: 'center',
            },
            {
                Icon: TextAlignRightIcon,
                label: undefined,
                value: 'end',
            },
        ],
        value: 'center',
    },
];
