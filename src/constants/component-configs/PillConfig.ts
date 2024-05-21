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
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: PillFieldNames.TEXT,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Pill',
        value: 'Pill',
    },
    {
        showComponent: true,
        type: ComponentType.ICON_SELECTOR,
        name: PillFieldNames.START_ICON_SELECTION,
    },
    {
        showComponent: true,
        type: ComponentType.ICON_SELECTOR,
        name: PillFieldNames.END_ICON_SELECTION,
    },
    {
        showComponent: true,
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
        value: 'default',
        placeholder: 'Choose a State',
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: PillFieldNames.HUG_CONTENT,
        defaultValue: true,
    },
    {
        showComponent: false,
        type: ComponentType.FORM_FIELD,
        name: PillFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
    },
    {
        showComponent: false,
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
