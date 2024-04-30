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
        value: 'primary',
    },
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: TitleFieldNames.ALIGNMENT,
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
        value: 'center',
    },
];
