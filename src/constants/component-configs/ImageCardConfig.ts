import { ComponentType } from '../ComponentTypes';

export const ImageCardConfig = [
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Rounded Corners',
        options: [
            {
                label: 'Standard',
                value: 'standard',
            },
            {
                label: 'None',
                value: 'none',
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
