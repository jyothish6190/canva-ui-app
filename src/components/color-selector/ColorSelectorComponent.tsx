import React, { useEffect, useState } from 'react';
import { ColorSelector, Swatch, Text } from '@canva/app-ui-kit';
import { Component } from 'src/models/component.model';
import styles from './colorSelector.css';
import { useComponentStore } from 'src/store/ComponentStore';
import { ColorFieldNames } from 'src/constants/component-configs/ColorPickerConfig';
type PropType = {
    component: Component;
    isProperty: boolean;
};
type ColorStateData = {
    color: string | undefined;
    colorlabel: string | undefined;
    activeState: boolean;
};
const initialState: ColorStateData = {
    color: undefined,
    colorlabel: undefined,
    activeState: false,
};
const ColorSelectorComponent = ({ component, isProperty }: PropType) => {
    const [colorData, setColorData] = useState<ColorStateData>(initialState);
    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === ColorFieldNames.COLOR_PICKER) {
                setColorData((prevState) => {
                    return {
                        ...prevState,
                        color: field.value || '#5BA1E7',
                        colorlabel: '  ',
                    };
                });
            }
            if (field.name === ColorFieldNames.ACTIVE) {
                setColorData((prevState) => {
                    return {
                        ...prevState,
                        activeState: field.value || false,
                    };
                });
            }
        });
    }, [component]);
    const { selectedComponent, setComponentField, setSelectedComponent } =
        useComponentStore();
    const changeHandler = (color: string) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = color;
            }
            setSelectedComponent({ ...selectedComponent });
            setColorData((prevState) => {
                return {
                    ...prevState,
                    color: color,
                };
            });
            return;
        });
        setComponentField(component, color);
    };
    if (isProperty) {
        return colorData.activeState === false ? (
            <div className={styles.container}>
                <Text variant="bold" size="medium">
                    {colorData.colorlabel
                        ? colorData.colorlabel
                        : component.name}
                </Text>
                <ColorSelector
                    color={
                        colorData.color
                            ? colorData.color
                            : (component.color as any)
                    }
                    onChange={changeHandler}
                />
            </div>
        ) : (
            <div
                style={{
                    position: 'relative',
                    width: 128,
                    height: 128,
                }}
            >
                <ColorSelector
                    color={
                        colorData.color
                            ? colorData.color
                            : (component.color as any)
                    }
                    onChange={() => {}}
                />
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
