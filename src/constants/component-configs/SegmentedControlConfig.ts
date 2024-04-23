import { ComponentType, OptionTypes } from '../ComponentTypes';

export const SegmentedControlConfig = [
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Type',
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
        type: ComponentType.OPTIONS_LIST,
        optionType: OptionTypes.RADIO,
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
