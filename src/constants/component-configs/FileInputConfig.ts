import { ComponentType } from '../ComponentTypes';

export enum FileInputFieldNames {
    HUG_CONTENT = 'Hug content',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
    FILE_INPUT_ITEM = 'File input items',
    FILE_INPUT_OPTIONS = 'File input label',
}

export const FileInputConfig = [
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: FileInputFieldNames.HUG_CONTENT,
        defaultValue: true,
    },
    {
        showComponent: false,
        type: ComponentType.NUMBER_INPUT,
        name: FileInputFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
    },
    {
        showComponent: false,
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
                label: 'Small',
                value: 158,
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
                label: 'example file1.png',
                value: 'examplefile1.png',
            },
            {
                key: 2,
                label: 'example file2.png',
                value: 'examplefile2.png',
            },
        ],
    },
];
