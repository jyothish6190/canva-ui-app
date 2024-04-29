import React from 'react';
import { Switch } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';

import { useComponentStore } from 'src/store/ComponentStore';

type PropType = {
    component: Component;
    isProperty: boolean;
};

const SwitchComponent = ({ component, isProperty }: PropType) => {
    const { selectedComponent, setComponentField, setSelectedComponent } =
        useComponentStore();

    const changeHandler = (value: boolean) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = value;
                setSelectedComponent({ ...selectedComponent });
                return;
            }
        });

        setComponentField(component, value);
    };

    if (isProperty) {
        return (
            <Switch
                defaultValue={component.defaultValue}
                label={component.name}
                value={component.value}
                onChange={changeHandler}
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
