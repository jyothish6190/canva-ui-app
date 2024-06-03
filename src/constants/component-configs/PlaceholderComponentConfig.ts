import { ComponentType } from '../ComponentTypes';

export enum PlaceHolderFieldNames {
    STYLE = 'Style',
    SIZE = 'Size',
    SHAPE = 'Shape',
    WIDTH = 'Width',
    HEIGHT = 'Height',
}

export const PlaceholderComponentConfig = [
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: PlaceHolderFieldNames.STYLE,
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
        value: 'text',
    },

    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: PlaceHolderFieldNames.SIZE,
        options: [
            {
                label: 'X large',
                value: 'xlarge',
            },
            {
                label: 'Large',
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
                label: 'X small',
                value: 'xsmall',
            },
        ],
        value: 'medium',
        placeholder: 'Choose a Size',
    },
    {
        showComponent: false,
        type: ComponentType.SELECT,
        name: PlaceHolderFieldNames.SHAPE,
        options: [
            {
                label: 'Circle',
                value: 'circle',
            },
            {
                label: 'Square',
                value: 'square',
            },

            {
                label: 'Rectangle',
                value: 'rectangle',
            },
            {
                label: 'Sharp rectangle',
                value: 'sharpRectangle',
            },
        ],
        defaultValue: 'circle',
        placeholder: 'Choose a Shape',
    },

    {
        showComponent: true,
        type: ComponentType.NUMBER_INPUT,
        name: PlaceHolderFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        value: '258',
        min: 24,
        max: 1366,
    },
    {
        showComponent: false,
        type: ComponentType.NUMBER_INPUT,
        name: PlaceHolderFieldNames.HEIGHT,
        label: 'Label',
        description: 'Description text',
        value: '258',
        min: 24,
        max: 1366,
    },
];
