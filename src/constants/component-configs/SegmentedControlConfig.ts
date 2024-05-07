import { ComponentType, OptionTypes } from '../ComponentTypes';

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
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: SegmentedControlFieldNames.WIDTH,
        label: 'Label',
        value: 328,
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
                label: 'S',
                value: 's',
            },
            {
                label: 'M',
                value: 'm',
            },
            {
                label: 'L',
                value: 'l',
            },
        ],
    },
];
