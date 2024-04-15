import React from 'react';
import { Badge, Checkbox, Pill, Text, Title } from '@canva/app-ui-kit';

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
