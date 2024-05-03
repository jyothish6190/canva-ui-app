import React from 'react';

import { ColorSelector, Swatch, Text } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import styles from './colorSelector.css';
import { useComponentStore } from 'src/store/ComponentStore';

type PropType = {
    component: Component;
    isProperty: boolean;
};

const ColorSelectorComponent = ({ component, isProperty }: PropType) => {
    const { selectedComponent, setComponentField, setSelectedComponent } =
        useComponentStore();

    const changeHandler = (color: string) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = color;
            }
            setSelectedComponent({ ...selectedComponent });
            return;
        });
        setComponentField(component, color);
    };

    if (isProperty) {
        return (
            <div className={styles.container}>
                <Text variant="bold" size="medium">
                    {component?.name}
                </Text>
                <ColorSelector color="#5ba1e7" onChange={changeHandler} />
            </div>
        );
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
