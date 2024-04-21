import React from 'react';
import { ColorSelector, Swatch } from '@canva/app-ui-kit';
import { Component } from 'src/models/component.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

const ColorSelectorComponent = ({
    component,
    isProperty,
    onChange,
}: PropType) => {
    if (isProperty) {
        return <ColorSelector color="#143F6B" onChange={() => {}} />;
    }

    return (
        <div
            style={{
                position: 'relative',
                width: 128,
                height: 128,
            }}
        >
            <ColorSelector color="#143F6B" onChange={() => {}} />
            <img
                src={require('assets/images/ColorPicker.png')}
                alt="Image 2"
                style={{
                    position: 'absolute',
                    bottom: -15,
                    right: -25,
                }}
            />
        </div>
    );
};

export default ColorSelectorComponent;
