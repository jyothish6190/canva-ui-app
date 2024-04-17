import { Component } from 'src/models/coponent.model';
import { ButtonConfig } from './component-configs/ButtonConfig';
import { ComponentType } from './ComponentTypes';
import { IconButtonConfig } from './component-configs/IconButtonConfig';
import { PillConfig } from './component-configs/PillConfig';

export const components: Component[] = [
    {
        type: ComponentType.BUTTON,
        name: 'Button',
        varient: 'primary',
        categoryId: 'action',
        fields: ButtonConfig,
    },
    {
        type: ComponentType.ICON_BUTTON,
        name: 'Icon Button',
        'icon-data': 'InfoIcon',
        varient: 'primary',
        categoryId: 'action',
        fields: IconButtonConfig,
    },
    {
        type: ComponentType.PILL,
        name: 'Pill',
        categoryId: 'action',
        fields: PillConfig,
    },
    {
        type: ComponentType.ALERT,
        name: 'Alert',
        placeholder: 'This is an Alert',
        categoryId: 'informational',
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.BADGE,
        name: 'Badge',
        text: 'Badge',
        categoryId: 'informational',
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Form field',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Placeholder',
        categoryId: 'form',
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.CHECKBOX,
        name: 'Checkbox',
        categoryId: 'form',
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.CHECKBOX_GROUP,
        name: 'Checkbox group',
        categoryId: 'form',
        options: [
            {
                value: 'blueberry',
                label: 'Blueberry',
            },
            {
                value: 'apple',
                label: 'Apple',
            },
            {
                value: 'strawberry',
                label: 'Strawberry',
            },
        ],
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.RADIO,
        name: 'Radio',
        categoryId: 'form',
        options: [
            {
                value: 'blueberry',
                label: 'Blueberry',
            },
            {
                value: 'apple',
                label: 'Apple',
            },
            {
                value: 'strawberry',
                label: 'Strawberry',
            },
        ],
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.TEXT_INPUT,
        name: 'Text Input',
        categoryId: 'form',
        placeholder: 'Placeholder',
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.MULTILINE_INPUT,
        name: 'Multiline Input',
        categoryId: 'form',
        placeholder: 'Placeholder',
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Segmented control',
        categoryId: 'form',
        options: [
            {
                value: 's',
                label: 'S',
            },
            {
                value: 'm',
                label: 'M',
            },
        ],
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
        defaultValue: 's',
    },
    {
        type: ComponentType.SLIDER,
        name: 'Slider',
        defaultValue: 0,
        min: -50,
        max: 50,
        disabled: true,
        categoryId: 'form',
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.NUMBER_INPUT,
        name: 'Number input',
        defaultValue: 0,
        hasSpinButtons: true,
        step: 1,
        disabled: true,
        categoryId: 'form',
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.FILE_INPUT,
        name: 'File input',
        disabled: true,
        multiple: true,
        categoryId: 'form',
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.SELECT,
        name: 'Select',
        stretch: true,
        categoryId: 'form',
        options: [
            {
                value: 'blueberry',
                label: 'Blueberry',
            },
            {
                value: 'apple',
                label: 'Apple',
            },
        ],
        fields: [
            {
                id: 'varient',
                selected: 'primary',
            },
            {
                id: 'text',
            },
            {
                id: 'icon',
                optional: true,
            },
            {
                id: 'state',
                selected: 'default',
            },
            {
                id: 'hug-content',
                selected: true,
            },
            {
                id: 'width',
                'default-value': '56',
                selected: 'small',
            },
        ],
    },
    {
        type: ComponentType.SWITCH,
        name: 'Switch',
        defaultValue: true,
        categoryId: 'form',
        fields: [
            {
                type: 'segmented-control',
                id: 'varient',
                title: 'Varient',
                options: [
                    {
                        value: 'primary',
                        label: 'Primary',
                        selected: true,
                    },
                    {
                        value: 'secondary',
                        label: 'Secondary',
                    },
                    {
                        value: 'tertiary',
                        label: 'Tertiary',
                    },
                ],
            },
            {
                type: 'text',
                title: 'Text',
                value: 'Button',
            },
            {
                type: 'icon',
                title: 'Icon',
                placeholder: 'Choose an icon',
                optional: true,
            },
            {
                type: 'state',
                title: 'State',
                options: [
                    {
                        value: 'default',
                        label: 'Default',
                        selected: true,
                    },
                    {
                        value: 'hover',
                        label: 'Hover',
                    },
                    {
                        value: 'active',
                        label: 'Active',
                    },
                    {
                        value: 'loading',
                        label: 'Loading',
                    },

                    {
                        value: 'disabled',
                        label: 'Disabled',
                    },
                ],
            },
            {
                type: 'width',
                title: 'Width',
                value: '56',
                options: [
                    {
                        value: 'small',
                        label: 'Small',
                        selected: true,
                    },
                    {
                        value: 'medium',
                        label: 'Medium',
                    },
                    {
                        value: 'large',
                        label: 'Large',
                    },
                    {
                        value: 'custom',
                        label: 'Custom',
                    },
                ],
            },
        ],
    },
    {
        type: ComponentType.SWATCH,
        name: 'Swatch',
        fill: ['#E0D9FC'],
        size: 'small',
        variant: 'solid',
        categoryId: 'color',
    },
    {
        type: ComponentType.COLOR_PICKER,
        name: 'Color picker',
        color: '#E0D9FC',
        categoryId: 'color',
    },
    {
        type: ComponentType.LOADING_INDICATOR,
        name: 'Loading indicator',
        size: 'large',
        categoryId: 'progress',
    },
    {
        type: ComponentType.PLACEHOLDER,
        name: 'Placeholder',
        size: 'small',
        categoryId: 'progress',
    },
    {
        type: ComponentType.PROGRESS_BAR,
        name: 'Progress bar',
        value: 50,
        size: 'medium',
        tone: 'info',
        categoryId: 'progress',
    },
    {
        type: ComponentType.AUDIO_CARD,
        name: 'Audio card',
        title: 'Card title',
        durationInSeconds: '86',
        previewUrl:
            'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',
        categoryId: 'card',
    },
    {
        type: ComponentType.IMAGE_CARD,
        name: 'Image card',
        borderRadius: 'standard',
        previewUrl:
            'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',
        categoryId: 'card',
    },
    {
        type: ComponentType.TYPOGRAPHY_CARD,
        name: 'Typography card',
        placeholder: 'The quick brown fox',
        categoryId: 'card',
    },
    {
        type: ComponentType.VIDEO_CARD,
        name: 'Video card',
        thumbnailUrl:
            'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',
        durationInSeconds: 11,
        categoryId: 'card',
    },
    {
        type: ComponentType.EMBED_CARD,
        name: 'Embed card',
        thumbnailUrl:
            'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',
        title: 'This is a title',
        description: 'This is a subtitle',
        categoryId: 'card',
    },
    {
        type: ComponentType.TITLE,
        name: 'Title',
        placeholder: 'Title',
        categoryId: 'typography',
    },
    {
        type: ComponentType.TEXT,
        name: 'Text',
        placeholder: 'Text',
        categoryId: 'typography',
    },
    {
        type: ComponentType.LINK,
        name: 'Link',
        children: 'Go to Canva',
        categoryId: 'typography',
    },
];
