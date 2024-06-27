import { Component } from 'src/models/component.model';
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
import { FormTextInputConfig } from 'src/components/form-field-component/FormTextInputConfig';

export const components: Component[] = [
    {
        showComponent: true,
        type: ComponentType.BUTTON,
        name: 'Button',
        varient: 'primary',
        categoryId: 'action',
        fields: ButtonConfig,
    },
    {
        showComponent: true,
        type: ComponentType.ICON_BUTTON,
        name: 'Icon button',
        'icon-data': 'InfoIcon',
        varient: 'primary',
        categoryId: 'action',
        fields: IconButtonConfig,
    },
    {
        showComponent: true,
        type: ComponentType.PILL,
        name: 'Pill',
        categoryId: 'action',
        fields: PillConfig,
    },
    {
        showComponent: true,
        type: ComponentType.ALERT,
        name: 'Alert',
        placeholder: 'This is an Alert',
        categoryId: 'informational',
        fields: AlertConfig,
    },
    {
        showComponent: true,
        type: ComponentType.BADGE,
        name: 'Badge',
        text: 'Badge',
        categoryId: 'informational',
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
    //     fields: FormFieldConfig,
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
        fields: FormTextInputConfig,
    },
    {
        showComponent: true,
        type: ComponentType.CHECKBOX,
        name: FormControlNames.CHECKBOX_FIELD,
        defaultValue: true,
        categoryId: 'form',
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
        fields: RadioGroupConfig,
    },
    {
        showComponent: true,
        type: ComponentType.TEXT_INPUT,
        name: FormControlNames.TEXT_INPUT,
        categoryId: 'form',
        placeholder: 'Placeholder',
        fields: TextInputConfig,
    },
    {
        showComponent: true,
        type: ComponentType.MULTILINE_INPUT,
        name: FormControlNames.MULTILINE_INPUT,
        categoryId: 'form',
        max: 50,
        placeholder: 'Placeholder',
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
        fields: NumberInputConfig,
    },
    {
        showComponent: true,
        type: ComponentType.FILE_INPUT,
        name: 'File input',
        disabled: true,
        multiple: true,
        categoryId: 'form',
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
        fields: SelectConfig,
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: 'Switch',
        defaultValue: true,
        categoryId: 'form',
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
        fields: SwatchConfig,
    },
    {
        showComponent: true,
        type: ComponentType.COLOR_PICKER,
        name: 'Color picker',
        color: '#E0D9FC',
        categoryId: 'color',
        fields: ColorPickerConfig,
    },
    {
        showComponent: true,
        type: ComponentType.LOADING_INDICATOR,
        name: 'Loading indicator',
        size: 'large',
        categoryId: 'progress',
        fields: LoadingIndicatorConfig,
    },
    {
        showComponent: true,
        type: ComponentType.PLACEHOLDER,
        name: 'Placeholder',
        size: 'small',
        categoryId: 'progress',
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
        fields: AudioCardConfig,
    },
    {
        showComponent: true,
        type: ComponentType.IMAGE_CARD,
        name: 'Image card',
        borderRadius: 'standard',
        previewUrl:
            'https://www.canva.dev/example-assets/image-import/grass-image.jpg',
        categoryId: 'card',
        fields: ImageCardConfig,
    },
    {
        showComponent: true,
        type: ComponentType.TYPOGRAPHY_CARD,
        name: 'Typography card',
        placeholder: 'The quick brown fox',
        categoryId: 'card',
        fields: TypographyConfig,
    },
    {
        showComponent: true,
        type: ComponentType.VIDEO_CARD,
        name: 'Video card',
        thumbnailUrl:
            'https://www.canva.dev/example-assets/video-import/beach-thumbnail-image.jpg',
        durationInSeconds: 11,
        categoryId: 'card',
        fields: VideoCardConfig,
    },
    {
        showComponent: true,
        type: ComponentType.EMBED_CARD,
        name: 'Embed card',
        thumbnailUrl:
            'https://www.canva.dev/example-assets/images/puppyhood.jpg',
        title: 'This is a title',
        description: 'This is a subtitle',
        categoryId: 'card',
        fields: EmbedConfig,
    },
    {
        showComponent: true,
        type: ComponentType.TITLE,
        name: 'Title',
        placeholder: 'Title',
        categoryId: 'typography',
        fields: TitleConfig,
    },
    {
        showComponent: true,
        type: ComponentType.TEXT,
        name: 'Text',
        placeholder: 'Text',
        categoryId: 'typography',
        fields: TextConfig,
    },
    // {
    //     showComponent: true,
    //     type: ComponentType.LINK,
    //     name: 'Link',
    //     children: 'Go to Canva',
    //     categoryId: 'typography',
    //     fields: LinkConfig,
    // },**Temporarily Removed Link component**
];
