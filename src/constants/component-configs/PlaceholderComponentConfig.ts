import { ComponentType } from '../ComponentTypes';

export const PlaceholderComponentConfig = [
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Style',
        options: [
            {
                label: 'Text',
                value: 'text',
            },
            {
                label: 'Title',
                value: 'title',
            },
            {
                label: 'Shape',
                value: 'shape',
            },
        ],
        defaultValue: 'text',
        value: 'small',
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
        type: ComponentType.FORM_FIELD,
        name: 'Width',
        label: 'Label',
        description: 'Description text',
        value: '258',
    },
];
