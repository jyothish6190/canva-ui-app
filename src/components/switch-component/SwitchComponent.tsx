import React from 'react';
import { Switch } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (changes: boolean) => void;
};

const SwitchComponent = ({ component, isProperty, onChange }: PropType) => {
    if (isProperty) {
        return (
            <Switch
                defaultValue={component.defaultValue}
                label={component.name}
                onChange={onChange}
            />
        );
    }
    return (
        <div style={{ padding: 16 }}>
            <Switch defaultValue={true} />
        </div>
    );
};

export default SwitchComponent;
