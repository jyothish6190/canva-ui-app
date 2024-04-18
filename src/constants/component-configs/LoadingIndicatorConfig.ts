import { ComponentType } from '../ComponentTypes';

export const LoadingIndicatorConfig = [
    {
        type: ComponentType.SEGMENTED_CONTROL,
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
        defaultValue: 'small',
        value: 'primary',
    },
];
