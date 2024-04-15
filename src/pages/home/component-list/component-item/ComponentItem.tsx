import React from 'react';

import { ComponentType } from 'src/constants/components';
import { Component } from 'src/models/coponent.model';

import ButtonComponent from 'src/components/button/ButtonComponent';
import IconButton from 'src/components/icon-button/IconButton';

type ComponentItemType = {
    component: Component;
};

const ComponentItem = ({ component }: ComponentItemType) => {
    switch (component.type) {
        case ComponentType.BUTTON:
            return <ButtonComponent component={component} />;
        case ComponentType.ICON_BUTTON:
            return <IconButton />;
        default:
            return <ButtonComponent component={component} />;
    }
};

export default ComponentItem;
