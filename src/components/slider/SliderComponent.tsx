import React from 'react';
import { Slider } from '@canva/app-ui-kit';

import { Component } from 'src/models/coponent.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: any) => void;
};

const SliderComponent = ({ component, isProperty, onChange }: PropType) => {
    if (isProperty) {
        return (
            <Slider
                defaultValue={component.defaultValue}
                max={100}
                min={0}
                step={1}
            />
        );
    }
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div style={{ width: '80%', paddingLeft: 17 }}>
                <Slider defaultValue={0} max={100} min={0} step={1} />
            </div>
        </div>
    );
};

export default SliderComponent;
