import React from 'react';
import { Slider } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: any) => void;
};

const SliderComponent = ({ component, isProperty, onChange }: PropType) => {
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
