import { Component } from 'src/models/component.model';
import { ComponentType } from '../ComponentTypes';
import { icons } from '../icons';

export enum ButtonFieldNames {
    VARIANT = 'Variant',
    TEXT = 'Text',
    ICON_SELECTION = 'Icon (optional)',
    STATE = 'State',
    HUG_CONTENT = 'Hug Content',
    WIDTH = 'Width',
    WIDTH_OPTIONS = 'Width options',
}

export const ButtonConfig: Component[] = [
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: ButtonFieldNames.VARIANT,
        options: [
            {
                label: 'Primary',
                value: 'primary',
            },
            {
                label: 'Secondary',
                value: 'secondary',
            },
            {
                label: 'Tertiary',
                value: 'tertiary',
            },
        ],
        defaultValue: 'primary',
        value: 'primary',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: ButtonFieldNames.TEXT,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Button',
        value: 'Button',
    },
    {
        showComponent: true,
        type: ComponentType.ICON_SELECTOR,
        name: ButtonFieldNames.ICON_SELECTION,
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: ButtonFieldNames.STATE,
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
        name: ButtonFieldNames.HUG_CONTENT,
        defaultValue: true,
    },
    {
        showComponent: false,
        type: ComponentType.NUMBER_INPUT,
        name: ButtonFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        min: 80,
        max: 1366,
    },
    {
        showComponent: false,
        type: ComponentType.CATEGORY,
        name: ButtonFieldNames.WIDTH_OPTIONS,
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
