import React from 'react';
import {
    Badge,
    Checkbox,
    FileInput,
    LoadingIndicator,
    Pill,
    Text,
    Title,
} from '@canva/app-ui-kit';

import { ComponentType } from 'src/constants/components';
import { Component } from 'src/models/coponent.model';

import ButtonComponent from 'src/components/button/ButtonComponent';
import IconButton from 'src/components/icon-button/IconButton';
import AlertComponent from 'src/components/alert-component/AlertComponent';
import FormFieldComponent from 'src/components/form-field-component/FormFieldComponent';
import CheckboxGroupComponent from 'src/components/checkbox-group-component/CheckboxGroupComponent';
import RadioGroupComponent from 'src/components/radio-group-component/RadioGroupComponent';
import TextInputComponent from 'src/components/text-input-component/TextInputComponent';
import LinkComponent from 'src/components/link-component/LinkComponent';
import EmbedCardComponent from 'src/components/embed-card-component/EmbedCardComponent';
import VideoCardComponent from 'src/components/video-card-component/VideoCardComponent';
import TypographyComponent from 'src/components/typography-component/TypographyComponent';
import ImageCardComponent from 'src/components/image-card/ImageCardComponent';
import AudioCardComponent from 'src/components/audio-card/AudioCardComponent';
import ProgressbarComponent from 'src/components/progressbar-component/ProgressbarComponent';
import PlaceholderComponent from 'src/components/placeholder/PlaceholderComponent';
import ColorSelectorComponent from 'src/components/color-selector/ColorSelectorComponent';
import SwatchComponent from 'src/components/swatch-component/SwatchComponent';
import SwitchComponent from 'src/components/switch-component/SwitchComponent';
import SelectComponent from 'src/components/select-component/SelectComponent';
import NumberInputComponent from 'src/components/number-input/NumberInputComponent';
import SliderComponent from 'src/components/slider/SliderComponent';
import SegmentedControlComponent from 'src/components/segmented-control/SegmentedControlComponent';
import MultiInputComponent from 'src/components/multi-input/MultiInputComponent';

type ComponentItemType = {
    component: Component;
};

const ComponentItem = ({ component }: ComponentItemType) => {
    switch (component.type) {
        case ComponentType.BUTTON:
            return <ButtonComponent component={component} />;
        case ComponentType.ICON_BUTTON:
            return <IconButton />;
        case ComponentType.PILL:
            return <Pill key={component.name} text={component.name} />;
        case ComponentType.ALERT:
            return <AlertComponent component={component} />;
        case ComponentType.BADGE:
            return <Badge text={component.name} tone="assist" />;
        case ComponentType.FORM_FIELD:
            return <FormFieldComponent component={component} />;
        case ComponentType.CHECKBOX:
            return <Checkbox label={component.name} />;
        case ComponentType.RADIO:
            return <RadioGroupComponent />;
        case ComponentType.CHECKBOX_GROUP:
            return <CheckboxGroupComponent />;
        case ComponentType.TEXT_INPUT:
            return <TextInputComponent component={component} />;
        case ComponentType.MULTILINE_INPUT:
            return <MultiInputComponent component={component} />;
        case ComponentType.SEGMENTED_CONTROL:
            return <SegmentedControlComponent />;
        case ComponentType.SLIDER:
            return <SliderComponent />;
        case ComponentType.NUMBER_INPUT:
            return <NumberInputComponent />;
        case ComponentType.FILE_INPUT:
            return <FileInput />;
        case ComponentType.SELECT:
            return <SelectComponent />;
        case ComponentType.SWITCH:
            return <SwitchComponent />;
        case ComponentType.SWATCH:
            return <SwatchComponent />;
        case ComponentType.COLOR_PICKER:
            return <ColorSelectorComponent />;
        case ComponentType.LOADING_INDICATOR:
            return <LoadingIndicator />;
        case ComponentType.PLACEHOLDER:
            return <PlaceholderComponent />;
        case ComponentType.PROGRESS_BAR:
            return <ProgressbarComponent />;
        case ComponentType.AUDIO_CARD:
            return <AudioCardComponent />;
        case ComponentType.IMAGE_CARD:
            return <ImageCardComponent />;
        case ComponentType.TYPOGRAPHY_CARD:
            return <TypographyComponent />;
        case ComponentType.VIDEO_CARD:
            return <VideoCardComponent />;
        case ComponentType.EMBED_CARD:
            return <EmbedCardComponent component={component} />;
        case ComponentType.TITLE:
            return <Title>{component.name}</Title>;
        case ComponentType.TEXT:
            return <Text>{component.name}</Text>;
        case ComponentType.LINK:
            return <LinkComponent />;

        default:
            return <></>;
    }
};

export default ComponentItem;
