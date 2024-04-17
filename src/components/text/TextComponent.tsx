import React from 'react';
import { FormField, Text } from '@canva/app-ui-kit';

import { Component } from 'src/models/coponent.model';

type PropsType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

const TextComponent = ({ component, isProperty }: PropsType) => {
    if (isProperty) {
        <FormField
            label={component.name}
            description=""
            control={(props) => <Text>{component.name}</Text>}
        />;
    }
    return <Text>{component.name}</Text>;
};

export default TextComponent;
