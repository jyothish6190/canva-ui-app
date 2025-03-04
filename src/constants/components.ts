import { Component } from 'src/models/component.model';
import { ButtonConfig } from './component-configs/ButtonConfig';
import { ComponentType } from './ComponentTypes';
import { IconButtonConfig } from './component-configs/IconButtonConfig';
import { PillConfig } from './component-configs/PillConfig';
import { AlertConfig } from './component-configs/AlertConfig';
import { BadgeConfig } from './component-configs/BadgeConfig';
import { LinkConfig } from './component-configs/LinkConfig';
import { TitleConfig } from '../components/title/TitleConfig';
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
import { SegmentedControlConfig } from '../components/segmented-control/SegmentedControlConfig';
import { FileInputConfig } from './component-configs/FileInputConfig';
import { CheckBoxConfig } from './component-configs/CheckBoxConfig';
import { CheckBoxGroupConfig } from './component-configs/CheckBoxGroupConfig';
import { TextInputConfig } from '../components/text-input-component/TextInputConfig';
import { SelectConfig } from 'src/components/select-component/SelectConfig';
import {
    FormControlNames,
    FormFieldConfig,
    FormTabs,
} from 'src/components/form-field-component/FormFieldConfig';
import {
    FormFieldSelectConfig,
    FormSelectTabs,
} from 'src/components/form-select-component/FormSelectConfig';
import { TextConfig } from 'src/components/text/TextConfig';
import { FormTextInputConfig } from 'src/components/form-field-component/FormTextInputConfig';

export const components: Component[] = [
    {
        showComponent: true,
        type: ComponentType.BUTTON,
        name: 'Button',
        varient: 'primary',
        categoryId: 'action',
        theme: 'light',
        fields: ButtonConfig,
    },
    {
        showComponent: true,
        type: ComponentType.ICON_BUTTON,
        name: 'Icon button',
        'icon-data': 'InfoIcon',
        varient: 'primary',
        categoryId: 'action',
        theme: 'light',
        fields: IconButtonConfig,
    },
    {
        showComponent: true,
        type: ComponentType.PILL,
        name: 'Pill',
        categoryId: 'action',
        theme: 'light',
        fields: PillConfig,
    },
    {
        showComponent: true,
        type: ComponentType.ALERT,
        name: 'Alert',
        placeholder: 'This is an Alert',
        categoryId: 'informational',
        theme: 'light',
        fields: AlertConfig,
    },
    {
        showComponent: true,
        type: ComponentType.BADGE,
        name: 'Badge',
        text: 'Badge',
        categoryId: 'informational',
        theme: 'light',
        fields: BadgeConfig,
    },
    // {
    //     showComponent: false,
    //     type: ComponentType.FORM_FIELD,
    //     name: 'Form field',
    //     label: 'Label',
    //     description: 'Description text',
    //     placeholder: 'Placeholder',
    //     categoryId: 'form',
    //     tabs: [
    //         {
    //             label: 'Form field',
    //             value: 'form field',
    //         },
    //         {
    //             label: 'Control',
    //             value: 'control',
    //         },
    //     ],
    //     defaultTabValue: 'form field',
    // theme:'light',//
    // fields: FormFieldConfig,
    // },
    {
        showComponent: true,
        type: ComponentType.FORM_SELECT,
        name: FormControlNames.FORM_FIELD,
        label: 'Label',
        description: 'Description text',
        errorState: false,
        placeholder: 'Placeholder',
        categoryId: 'form',
        tabs: FormTabs,
        defaultTabValue: 'form field',
        tabValue: 'form field',
        theme: 'light',
        fields: FormTextInputConfig,
    },
    {
        showComponent: true,
        type: ComponentType.CHECKBOX,
        name: FormControlNames.CHECKBOX_FIELD,
        defaultValue: true,
        categoryId: 'form',
        theme: 'light',
        fields: CheckBoxConfig,
    },
    {
        showComponent: true,
        type: ComponentType.CHECKBOX_GROUP,
        name: FormControlNames.CHECKBOX_GROUP,
        categoryId: 'form',
        options: [
            {
                key: 1,
                value: 'blueberry',
                label: 'Blueberry',
                selected: false,
            },
            {
                key: 2,
                value: 'apple',
                label: 'Apple',
                selected: false,
            },
            {
                key: 3,
                value: 'strawberry',
                label: 'Strawberry',
                selected: false,
            },
        ],
        theme: 'light',
        fields: CheckBoxGroupConfig,
    },
    {
        showComponent: true,
        type: ComponentType.RADIO,
        name: FormControlNames.RADIO,
        categoryId: 'form',
        options: [
            {
                key: 1,
                value: 'blueberry',
                label: 'Blueberry',
                selected: false,
            },
            {
                key: 2,
                value: 'apple',
                label: 'Apple',
                selected: false,
            },
            {
                key: 3,
                value: 'strawberry',
                label: 'Strawberry',
                selected: false,
            },
        ],
        theme: 'light',
        fields: RadioGroupConfig,
    },
    {
        showComponent: true,
        type: ComponentType.TEXT_INPUT,
        name: FormControlNames.TEXT_INPUT,
        categoryId: 'form',
        placeholder: 'Enter your text',
        theme: 'light',
        fields: TextInputConfig,
    },
    {
        showComponent: true,
        type: ComponentType.MULTILINE_INPUT,
        name: FormControlNames.MULTILINE_INPUT,
        categoryId: 'form',
        max: 50,
        placeholder: 'Enter your text',
        theme: 'light',
        fields: MultiLineInputConfig,
    },
    {
        showComponent: true,
        type: ComponentType.SEGMENTED_CONTROL,
        name: FormControlNames.SEGMENTED_CONTROL,
        categoryId: 'form',
        options: [
            {
                key: 's',
                value: 's',
                label: 'S',
                selected: true,
            },
            {
                key: 'm',
                value: 'm',
                label: 'M',
                selected: false,
            },
        ],
        defaultValue: 's',
        optionContentType: 'text',
        theme: 'light',
        fields: SegmentedControlConfig,
    },
    {
        showComponent: true,
        type: ComponentType.SLIDER,
        name: 'Slider',
        defaultValue: 25,
        min: 0,
        max: 100,
        disabled: true,
        categoryId: 'form',
        theme: 'light',
        fields: SliderConfig,
    },
    {
        showComponent: true,
        type: ComponentType.NUMBER_INPUT,
        name: FormControlNames.NUMBER_INPUT,
        defaultValue: 0,
        hasSpinButtons: true,
        step: 1,
        disabled: true,
        categoryId: 'form',
        theme: 'light',
        fields: NumberInputConfig,
    },
    {
        showComponent: true,
        type: ComponentType.FILE_INPUT,
        name: 'File input',
        disabled: true,
        multiple: true,
        categoryId: 'form',
        theme: 'light',
        fields: FileInputConfig,
    },
    {
        showComponent: true,
        type: ComponentType.SELECT,
        name: FormControlNames.SELECT,
        stretch: true,
        categoryId: 'form',
        tabs: [
            {
                label: 'Control',
                value: 'control',
            },
            {
                label: 'Options',
                value: 'options',
            },
        ],
        defaultTabValue: 'control',
        tabValue: 'control',
        options: [
            {
                key: 1,
                value: 'blueberry',
                label: 'Blueberry',
                selected: false,
            },
            {
                key: 2,
                value: 'apple',
                label: 'Apple',
                selected: false,
            },
        ],
        theme: 'light',
        fields: SelectConfig,
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: 'Switch',
        defaultValue: true,
        categoryId: 'form',
        theme: 'light',
        fields: SwitchConfig,
    },
    {
        showComponent: true,
        type: ComponentType.SWATCH,
        name: 'Swatch',
        fill: ['#E0D9FC'],
        size: 'small',
        variant: 'solid',
        categoryId: 'color',
        theme: 'light',
        fields: SwatchConfig,
    },
    {
        showComponent: true,
        type: ComponentType.COLOR_PICKER,
        name: 'Color picker',
        color: '#E0D9FC',
        categoryId: 'color',
        theme: 'light',
        fields: ColorPickerConfig,
    },

    {
        showComponent: true,
        type: ComponentType.PLACEHOLDER,
        name: 'Placeholder',
        size: 'small',
        categoryId: 'progress',
        theme: 'light',
        fields: PlaceholderComponentConfig,
    },
    {
        showComponent: true,
        type: ComponentType.PROGRESS_BAR,
        name: 'Progress bar',
        value: 50,
        size: 'medium',
        tone: 'info',
        categoryId: 'progress',
        theme: 'light',
        fields: ProgressbarConfig,
    },
    {
        showComponent: true,
        type: ComponentType.AUDIO_CARD,
        name: 'Audio card',
        title: 'Card title',
        durationInSeconds: '86',
        previewUrl:
            'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',
        categoryId: 'card',
        theme: 'light',
        fields: AudioCardConfig,
    },

    {
        showComponent: true,
        type: ComponentType.TYPOGRAPHY_CARD,
        name: 'Typography card',
        placeholder: 'The quick brown fox',
        categoryId: 'card',
        theme: 'light',
        fields: TypographyConfig,
    },

    {
        showComponent: true,
        type: ComponentType.TITLE,
        name: 'Title',
        placeholder: 'Title',
        categoryId: 'typography',
        theme: 'light',
        fields: TitleConfig,
    },
    {
        showComponent: true,
        type: ComponentType.TEXT,
        name: 'Text',
        placeholder: 'Text',
        categoryId: 'typography',
        theme: 'light',
        fields: TextConfig,
    },
    // {
    //     showComponent: true,
    //     type: ComponentType.IMAGE_CARD,
    //     name: 'Image card',
    //     borderRadius: 'standard',
    //     previewUrl:
    //         'https://www.canva.dev/example-assets/image-import/grass-image.jpg',
    //     categoryId: 'card',
    //     theme: 'light',
    //     fields: ImageCardConfig,
    // },
    // {
    //     showComponent: true,
    //     type: ComponentType.VIDEO_CARD,
    //     name: 'Video card',
    //     thumbnailUrl:
    //         'https://www.canva.dev/example-assets/video-import/beach-thumbnail-image.jpg',
    //     durationInSeconds: 11,
    //     categoryId: 'card',
    //     theme: 'light',
    //     fields: VideoCardConfig,
    // },
    // {
    //     showComponent: true,
    //     type: ComponentType.EMBED_CARD,
    //     name: 'Embed card',
    //     thumbnailUrl:
    //         'https://www.canva.dev/example-assets/images/puppyhood.jpg',
    //     title: 'This is a title',
    //     description: 'This is a subtitle',
    //     categoryId: 'card',
    //     theme: 'light',
    //     fields: EmbedConfig,
    // },
    // {
    //     showComponent: true,
    //     type: ComponentType.LINK,
    //     name: 'Link',
    //     children: 'Go to Canva',
    //     categoryId: 'typography',
    // theme:'light',//
    // fields: LinkConfig,
    // },**Temporarily Removed LinkComponent,VedioCard, ImageCard and EmbededCard***
];
