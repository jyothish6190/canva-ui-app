import {
    TextAlignCenterIcon,
    TextAlignLeftIcon,
    TextAlignRightIcon,
} from '@canva/app-ui-kit';
import { ComponentType } from '../ComponentTypes';

export const TitleConfig = [
    {
        type: ComponentType.MULTILINE_INPUT,
        name: 'Text',
        placeholder: '',
        value: 'Example title',
    },
    {
        type: ComponentType.SELECT,
        name: 'Size',
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
        defaultValue: 'medium',
        placeholder: 'Choose a Size',
    },
    {
        type: ComponentType.SELECT,
        name: 'Tone',
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
