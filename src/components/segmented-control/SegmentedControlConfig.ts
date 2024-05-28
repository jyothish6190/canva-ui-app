import { ComponentType, OptionTypes } from '../../constants/ComponentTypes';

export enum SegmentedControlFieldNames {
    TYPE = 'Type',
    WIDTH = 'Width',
    WIDTH_OPTION = 'Width options',
    OPTIONS = 'Options',
}

export const SegmentedControlConfig = [
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: SegmentedControlFieldNames.TYPE,
        options: [
            {
                label: 'Text',
                value: 'text',
            },
            {
                label: 'Icon',
                value: 'icon',
            },
        ],
        defaultValue: 'text',
        value: 'text',
    },
    {
        showComponent: true,
        type: ComponentType.NUMBER_INPUT,
        name: SegmentedControlFieldNames.WIDTH,
        label: 'Label',
        value: 328,
        min: 158,
        max: 1366,
        description: 'Description text',
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: SegmentedControlFieldNames.WIDTH_OPTION,
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
        type: ComponentType.OPTIONS_LIST,
        optionType: OptionTypes.RADIO,
        name: SegmentedControlFieldNames.OPTIONS,
        options: [
            {
                key: 1,
                label: 'S',
                value: 's',
                selected: true,
            },
            {
                key: 2,
                label: 'M',
                value: 'm',
                selected: false,
            },
            {
                key: 3,
                label: 'L',
                value: 'l',
                selected: false,
            },
        ],
        value: 's',
    },
];
