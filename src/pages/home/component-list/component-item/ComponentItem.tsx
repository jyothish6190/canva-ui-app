import React from 'react';

import { Component } from 'src/models/component.model';
import { ComponentType } from 'src/constants/ComponentTypes';

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
import TextComponent from 'src/components/text/TextComponent';
import ButtonTypesComponent from 'src/components/button-types-component/ButtonTypesComponent';
import MultilineInputComponent from 'src/components/multiline-input-component/MultilineInputComponent';
import OptionsListComponent from 'src/components/options-list-component/OptionsListComponent';
import IconSelectionComponent from 'src/components/icon-selection-component/IconSelectionComponent';
import FileInputComponent from 'src/components/file-input-component/FileInputComponent';
import CheckBoxComponent from 'src/components/check-box-component/CheckBoxComponent';
import BadgeComponent from 'src/components/badge-component/BadgeComponent';
import PillComponent from 'src/components/pill-component/PillComponent';
import LoadingIndicatorComponent from 'src/components/loading-indicator-component/LoadingIndicatorComponent';
import TitleComponent from 'src/components/title/TitleComponent';
import FormSelectComponent from 'src/components/form-select-component/FormSelectComponent';

type PropType = {
    component: Component;
    isProperty: boolean;
};

const ComponentItem = ({ component, isProperty }: PropType) => {
    if (!component.showComponent) {
        return;
    }
    switch (component.type) {
        case ComponentType.BUTTON:
            return (
                <ButtonComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.ICON_BUTTON:
            return <IconButton component={component} isProperty={isProperty} />;
        case ComponentType.PILL:
            return (
                <PillComponent component={component} isProperty={isProperty} />
            );
        case ComponentType.ALERT:
            return (
                <AlertComponent component={component} isProperty={isProperty} />
            );
        case ComponentType.BADGE:
            return (
                <BadgeComponent component={component} isProperty={isProperty} />
            );
        case ComponentType.FORM_FIELD:
            return (
                <FormFieldComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.CHECKBOX:
            return (
                <CheckBoxComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.RADIO:
            return (
                <RadioGroupComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.CHECKBOX_GROUP:
            return (
                <CheckboxGroupComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.TEXT_INPUT:
            return (
                <TextInputComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.MULTILINE_INPUT:
            return (
                <MultilineInputComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.SEGMENTED_CONTROL:
            return (
                <SegmentedControlComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.SLIDER:
            return (
                <SliderComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.NUMBER_INPUT:
            return (
                <NumberInputComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.FILE_INPUT:
            return (
                <FileInputComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.SELECT:
            return (
                <SelectComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.SWITCH:
            return (
                <SwitchComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.SWATCH:
            return (
                <SwatchComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.COLOR_PICKER:
            return (
                <ColorSelectorComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.LOADING_INDICATOR:
            return (
                <LoadingIndicatorComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.PLACEHOLDER:
            return (
                <PlaceholderComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.PROGRESS_BAR:
            return (
                <ProgressbarComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.AUDIO_CARD:
            return (
                <AudioCardComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.IMAGE_CARD:
            return (
                <ImageCardComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.TYPOGRAPHY_CARD:
            return (
                <TypographyComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.VIDEO_CARD:
            return (
                <VideoCardComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.EMBED_CARD:
            return (
                <EmbedCardComponent
                    component={component}
                    isProperty={isProperty}
                />
            );
        case ComponentType.TITLE:
            return (
                <TitleComponent component={component} isProperty={isProperty} />
            );
        case ComponentType.TEXT:
            return (
                <TextComponent component={component} isProperty={isProperty} />
            );
        case ComponentType.LINK:
            return (
                <LinkComponent component={component} isProperty={isProperty} />
            );
        case ComponentType.CATEGORY:
            return <ButtonTypesComponent component={component} />;
        case ComponentType.OPTIONS_LIST:
            return (
                <OptionsListComponent
                    component={component}
                    isProprty={isProperty}
                />
            );
        case ComponentType.ICON_SELECTOR:
            return <IconSelectionComponent component={component} />;

        case ComponentType.FORM_SELECT:
            return (
                <FormSelectComponent
                    component={component}
                    isProprty={isProperty}
                />
            );

        default:
            return <></>;
    }
};

export default ComponentItem;
