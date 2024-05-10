import { ComponentType } from '../ComponentTypes';

export enum LinkFieldConfig {
    TEXT = 'Text',
    SIZE = 'Size',
    VARIANT = 'Variant',
}

export const LinkConfig = [
    {
        showComponent: true,
        type: ComponentType.MULTILINE_INPUT,
        name: 'Text',
        placeholder: 'Enter your link text',
        value: 'Go to Canva',
    },
    {
        showComponent: true,
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
        ],
        defaultValue: 'medium',
        placeholder: 'Choose a Size',
    },
    {
        showComponent: true,
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
        value: 'regular',
    },
];
