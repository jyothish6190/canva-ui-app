import { ChevronDownIcon, ClearIcon, SearchIcon } from '@canva/app-ui-kit';
import { ComponentType } from '../ComponentTypes';

export enum TextInputSearchFieldNames {
    TEXT = 'Text',
    WITH_TEXT = 'With Text',
    START_DECORATOR = 'Start decorator (optional)',
    END_DECORATOR = 'End decorator',
    END_TEXT = 'End text',
    MAX_CHAR_COUNT = 'Maximum character count',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width option',
    STATE = 'State',
}

export const TextInputConfig = [
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: TextInputSearchFieldNames.TEXT,
        value: 'Hello world',
        placeholder: 'Placeholder',
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: TextInputSearchFieldNames.WITH_TEXT,
        NoneValue: true,
    },
    {
        showComponent: true,
        type: ComponentType.ICON_SELECTOR,
        name: TextInputSearchFieldNames.START_DECORATOR,
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: TextInputSearchFieldNames.END_DECORATOR,
        options: [
            {
                label: 'None',
                value: 'none',
            },
            {
                label: 'Clear',
                value: 'clear',
            },
            {
                label: 'Text',
                value: 'text',
            },
            {
                label: 'Character count',
                value: 'character count',
            },
        ],
        value: 'none',
    },
    {
        showComponent: false,
        type: ComponentType.FORM_FIELD,
        name: TextInputSearchFieldNames.END_TEXT,
        label: 'Label',
        value: 'End Text',
        description: 'Description text',
    },
    {
        showComponent: false,
        type: ComponentType.FORM_FIELD,
        name: TextInputSearchFieldNames.MAX_CHAR_COUNT,
        label: 'Label',
        description: 'Description text',
    },

    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: TextInputSearchFieldNames.WIDTH,
        label: 'Label',
        value: '328',
        description: 'Description text',
    },
    {
        showComponent: true,
        type: ComponentType.CATEGORY,
        name: TextInputSearchFieldNames.WIDTH_OPTIONS,
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
        type: ComponentType.SELECT,
        name: TextInputSearchFieldNames.STATE,
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
                label: 'Error',
                value: 'error',
            },
            {
                label: 'Disabled',
                value: 'disabled',
            },
        ],
        value: 'none',
        placeholder: 'Choose a State',
    },
];
