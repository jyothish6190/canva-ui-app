import { ComponentType } from '../ComponentTypes';
export enum VideoFieldNames {
    DURATION = 'Duration in seconds',
    ROUNDED_CORNER = 'Rounded Corners',
    WIDTH = 'Width ',
    HEIGHT = 'Height',
}

export const VideoCardConfig = [
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: VideoFieldNames.DURATION,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Duration',
        value: '11',
    },
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: VideoFieldNames.ROUNDED_CORNER,
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
        name: VideoFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Width',
        value: 256,
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: VideoFieldNames.HEIGHT,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Height',
        value: 168,
    },
];
