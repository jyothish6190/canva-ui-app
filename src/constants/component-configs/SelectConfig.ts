import { Component } from 'src/models/component.model';
import { ComponentType, OptionTypes } from '../ComponentTypes';
import { icons } from '../icons';

export const SelectConfig = [
    {
        type: ComponentType.FORM_FIELD,
        name: 'placeholder',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Select',
        tabId: 'control',
    },

    {
        type: ComponentType.SWITCH,
        name: 'Active',
        defaultValue: true,
        tabId: 'control',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Width',
        label: 'Label',
        description: 'Description text',
        value: '328',
        tabId: 'control',
    },

    {
        type: ComponentType.CATEGORY,
        tabId: 'control',
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
        type: ComponentType.SELECT,
        name: 'State',
        tabId: 'control',
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
        type: ComponentType.OPTIONS_LIST,
        tabId: 'options',
        name: 'Options',

        optionType: OptionTypes.RADIO,
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
    },
];
