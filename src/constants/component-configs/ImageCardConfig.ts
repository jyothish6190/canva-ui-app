import { ComponentType } from '../ComponentTypes';
export enum ImageCardFieldNames {
    ROUNDED_CORNER = 'Rounded Corners',
    WIDTH = 'Width ',
    HEIGHT = 'Height',
}
export const ImageCardConfig = [
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: ImageCardFieldNames.ROUNDED_CORNER,
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

        value: 'none',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: ImageCardFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Width',
        value: 160,
        min: 24,
        max: 1366,
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: ImageCardFieldNames.HEIGHT,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Height',
        value: 160,
        min: 24,
        max: 1366,
    },
];
