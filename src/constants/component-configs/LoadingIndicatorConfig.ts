import { ComponentType } from '../ComponentTypes';

export enum LoadingIndicatorFieldNames {
    SIZE = 'Size',
}

export const LoadingIndicatorConfig = [
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: LoadingIndicatorFieldNames.SIZE,
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
    },
];
