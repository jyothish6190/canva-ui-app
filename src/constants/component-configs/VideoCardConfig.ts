import { ComponentType } from '../ComponentTypes';

export const VideoCardConfig = [
    {
        type: ComponentType.FORM_FIELD,
        name: 'Duration in seconds',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Button',
        value: '11',
    },
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Rounded Corners',
        options: [
            {
                label: 'None',
                value: 'none',
            },
            {
                label: 'Standard',
                value: 'standard',
            },
        ],
        defaultValue: 'standard',
        value: 'primary',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Width',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Button',
        value: '256',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Height',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Button',
        value: '168',
    },
];
