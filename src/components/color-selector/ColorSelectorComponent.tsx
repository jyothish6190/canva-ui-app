import React, { useEffect, useState } from 'react';

import { ColorSelector, Text } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import styles from './colorSelector.css';
import { useComponentStore } from 'src/store/ComponentStore';
import ColorPicker from '../../../assets/icons/color-picker.svg';
import ColorPickerLarge from '../../../assets/icons/color-picker-large.svg';
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
            <div className={styles.colorContainer}>
                <ColorSelector
                    color={
                        colorData.color
                            ? colorData.color
                            : (component.color as any)
                    }
                    onChange={() => {}}
                />
                <span
                    style={{
                        color: colorData.color
                            ? colorData.color
                            : (component.color as any),
                        height: '200px',
                    }}
                >
                    <ColorPickerLarge
                        className={styles.colorPicker}
                        size="medium"
                    />
                </span>
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
            <span style={{ color: '#2900CC' }}>
                <ColorPicker className={styles.colorPicker} />
            </span>
        </div>
    );
};
export default ColorSelectorComponent;
