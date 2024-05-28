import { ComponentType } from '../ComponentTypes';

export enum FileInputFieldNames {
    HUG_CONTENT = 'Hug Content',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
    FILE_INPUT_ITEM = 'File input items',
    FILE_INPUT_OPTIONS = 'File input Label',
}

export const FileInputConfig = [
    {
        showComponent: false,
        type: ComponentType.SWITCH,
        name: FileInputFieldNames.HUG_CONTENT,
        defaultValue: false,
    },
    {
        showComponent: true,
        type: ComponentType.NUMBER_INPUT,
        name: FileInputFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
        value: 328,
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: FileInputFieldNames.WIDTH_OPTIONS,
        options: [
            {
                label: 'Small',
                value: 158,
            },
            {
                label: 'Medium',
                value: 328,
            },
            {
                label: 'Large',
                value: 600,
            },
            {
                label: 'Custom',
                value: 240,
            },
        ],
        selectedCategories: [
            {
                label: 'Medium',
                value: 328,
            },
        ],
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: FileInputFieldNames.FILE_INPUT_ITEM,
        defaultValue: false,
    },
    {
        showComponent: false,
        type: ComponentType.OPTIONS_LIST,
        name: FileInputFieldNames.FILE_INPUT_OPTIONS,
        options: [
            {
                key: 1,
                label: 'examplefile1.png',
                value: 'examplefile1.png',
            },
            {
                key: 2,
                label: 'examplefile2.png',
                value: 'examplefile2.png',
            },
        ],
    },
];
