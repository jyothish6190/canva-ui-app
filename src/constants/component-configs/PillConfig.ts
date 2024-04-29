import { ComponentType } from '../ComponentTypes';

export enum PillFieldNames {
    TEXT = 'Text',
    START_ICON_SELECTION = 'Start decorator (optional)',
    END_ICON_SELECTION = 'End decorator (optional)',
    STATE = 'State',
    HUG_CONTENT = 'Hug Content',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
}
export const PillConfig = [
    {
        type: ComponentType.FORM_FIELD,
        name: PillFieldNames.TEXT,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Pill',
    },
    {
        type: ComponentType.ICON_SELECTOR,
        name: PillFieldNames.START_ICON_SELECTION,
    },
    {
        type: ComponentType.ICON_SELECTOR,
        name: PillFieldNames.END_ICON_SELECTION,
    },
    {
        type: ComponentType.SELECT,
        name: PillFieldNames.STATE,
        options: [
            {
                label: 'Default',
                value: 'default',
            },
            {
                label: 'Hover',
                value: 'hover',
            },
            {
                label: 'Active',
                value: 'active',
            },
            {
                label: 'Loading',
                value: 'loading',
            },
            {
                label: 'Disabled',
                value: 'disabled',
            },
        ],
        defaultValue: 'default',
        placeholder: 'Choose a State',
    },
    {
        type: ComponentType.SWITCH,
        name: PillFieldNames.HUG_CONTENT,
        defaultValue: true,
    },
    {
        type: ComponentType.FORM_FIELD,
        name: PillFieldNames.WIDTH,
        label: 'Label',
        vlue: '158',
        description: 'Description text',
    },
    {
        type: ComponentType.CATEGORY,
        name: PillFieldNames.WIDTH_OPTIONS,
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
];
