import { Component } from 'src/models/coponent.model';
import { ButtonConfig } from './component-configs/ButtonConfig';
import { ComponentType } from './ComponentTypes';
import { IconButtonConfig } from './component-configs/IconButtonConfig';
import { PillConfig } from './component-configs/PillConfig';
import { AlertConfig } from './component-configs/AlertConfig';
import { BadgeConfig } from './component-configs/BadgeConfig';
import { LinkConfig } from './component-configs/LinkConfig';
import { TextConfig } from './component-configs/TextConfig';
import { TitleConfig } from './component-configs/TitleConfig';
import { EmbedConfig } from './component-configs/EmbedConfig';
import { VideoCardConfig } from './component-configs/VideoCardConfig';
import { TypographyConfig } from './component-configs/TypographyConfig';
import { ImageCardConfig } from './component-configs/ImageCardConfig';
import { AudioCardConfig } from './component-configs/AudioCardConfig';
import { ProgressbarConfig } from './component-configs/ProgressbarComponentConfig';
import { PlaceholderComponentConfig } from './component-configs/PlaceholderComponentConfig';
import { LoadingIndicatorConfig } from './component-configs/LoadingIndicatorConfig';
import { ColorPickerConfig } from './component-configs/ColorPickerConfig';
import { SwatchConfig } from './component-configs/SwatchConfig';
import { SwitchConfig } from './component-configs/SwitchConfig';
import { MultiLineInputConfig } from './component-configs/MultiLineInputConfig';
import { RadioGroupConfig } from './component-configs/RadioGroupConfig';
import { NumberInputConfig } from './component-configs/NumberInputConfig';
import { SliderConfig } from './component-configs/SliderConfig';
import { SegmentedControlConfig } from './component-configs/SegmentedControlConfig';

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
        fields: AlertConfig,
    },
    {
        type: ComponentType.BADGE,
        name: 'Badge',
        text: 'Badge',
        categoryId: 'informational',
        fields: BadgeConfig,
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
        fields: RadioGroupConfig,
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
        max: 50,
        placeholder: 'Placeholder',
        fields: MultiLineInputConfig,
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
        defaultValue: 's',
        fields: SegmentedControlConfig,
    },
    {
        type: ComponentType.SLIDER,
        name: 'Slider',
        defaultValue: 25,
        min: 0,
        max: 100,
        disabled: true,
        categoryId: 'form',
        fields: SliderConfig,
    },
    {
        type: ComponentType.NUMBER_INPUT,
        name: 'Number input',
        defaultValue: 0,
        hasSpinButtons: true,
        step: 1,
        disabled: true,
        categoryId: 'form',
        fields: NumberInputConfig,
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
        fields: SwitchConfig,
    },
    {
        type: ComponentType.SWATCH,
        name: 'Swatch',
        fill: ['#E0D9FC'],
        size: 'small',
        variant: 'solid',
        categoryId: 'color',
        fields: SwatchConfig,
    },
    {
        type: ComponentType.COLOR_PICKER,
        name: 'Color picker',
        color: '#E0D9FC',
        categoryId: 'color',
        fields: ColorPickerConfig,
    },
    {
        type: ComponentType.LOADING_INDICATOR,
        name: 'Loading indicator',
        size: 'large',
        categoryId: 'progress',
        fields: LoadingIndicatorConfig,
    },
    {
        type: ComponentType.PLACEHOLDER,
        name: 'Placeholder',
        size: 'small',
        categoryId: 'progress',
        fields: PlaceholderComponentConfig,
    },
    {
        type: ComponentType.PROGRESS_BAR,
        name: 'Progress bar',
        value: 50,
        size: 'medium',
        tone: 'info',
        categoryId: 'progress',
        fields: ProgressbarConfig,
    },
    {
        type: ComponentType.AUDIO_CARD,
        name: 'Audio card',
        title: 'Card title',
        durationInSeconds: '86',
        previewUrl:
            'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',
        categoryId: 'card',
        fields: AudioCardConfig,
    },
    {
        type: ComponentType.IMAGE_CARD,
        name: 'Image card',
        borderRadius: 'standard',
        previewUrl:
            'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',
        categoryId: 'card',
        fields: ImageCardConfig,
    },
    {
        type: ComponentType.TYPOGRAPHY_CARD,
        name: 'Typography card',
        placeholder: 'The quick brown fox',
        categoryId: 'card',
        fields: TypographyConfig,
    },
    {
        type: ComponentType.VIDEO_CARD,
        name: 'Video card',
        thumbnailUrl:
            'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',
        durationInSeconds: 11,
        categoryId: 'card',
        fields: VideoCardConfig,
    },
    {
        type: ComponentType.EMBED_CARD,
        name: 'Embed card',
        thumbnailUrl:
            'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',
        title: 'This is a title',
        description: 'This is a subtitle',
        categoryId: 'card',
        fields: EmbedConfig,
    },
    {
        type: ComponentType.TITLE,
        name: 'Title',
        placeholder: 'Title',
        categoryId: 'typography',
        fields: TitleConfig,
    },
    {
        type: ComponentType.TEXT,
        name: 'Text',
        placeholder: 'Text',
        categoryId: 'typography',
        fields: TextConfig,
    },
    {
        type: ComponentType.LINK,
        name: 'Link',
        children: 'Go to Canva',
        categoryId: 'typography',
        fields: LinkConfig,
    },
];
