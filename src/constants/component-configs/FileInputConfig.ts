import { option } from 'yargs';
import { ComponentType } from '../ComponentTypes';

export const FileInputConfig = [
    {
        type: ComponentType.SWITCH,
        name: 'Hug content',
        defaultValue: false,
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Width',
        label: 'Label',
        value: '328',
        description: 'Description text',
    },
    {
        type: ComponentType.CATEGORY,

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
        selectedCategories: [
            {
                label: 'Medium',
                value: 'medium',
            },
        ],
    },
    {
        type: ComponentType.SWITCH,
        name: 'File input items',
        defaultValue: true,
    },
    {
        type: ComponentType.OPTIONS_LIST,
        name: 'File input Label',
        options: [
            {
                label: 'examplefile.png',
                value: 'examplefile.png',
            },
            {
                label: 'examplefile.png',
                value: 'examplefile.png',
            },
        ],
    },
];
