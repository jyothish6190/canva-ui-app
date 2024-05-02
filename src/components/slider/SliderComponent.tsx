import React from 'react';
import { Slider } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { useComponentStore } from 'src/store/ComponentStore';

type PropType = {
    component: Component;
    isProperty: boolean;
};

const SliderComponent = ({ component, isProperty }: PropType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const changeHandler = (value: number) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = value;
            }
            setSelectedComponent({ ...selectedComponent });
            return;
        });
    };
    if (isProperty) {
        return (
            <div
                style={{
                    width: '100%',
                }}
            >
                <Slider
                    defaultValue={component.defaultValue}
                    max={100}
                    min={0}
                    step={1}
                    onChange={changeHandler}
                />
            </div>
        );
    }
    return (
        <div style={{ width: '80%', paddingLeft: 17 }}>
            <Slider defaultValue={0} max={100} min={20} step={0} />
        </div>
    );
};

export default SliderComponent;
