import { ComponentType } from '../ComponentTypes';

export const LinkConfig = [
    {
        type: ComponentType.MULTILINE_INPUT,
        name: 'Text',
        placeholder: '',
        value: 'Go to Canva',
    },
    {
        type: ComponentType.SELECT,
        name: 'Size',
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
];
