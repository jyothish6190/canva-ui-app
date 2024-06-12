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
                        color: field.value || ' #E0D9FC',
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
        if (!component.fields)
            setColorData((prevState) => {
                return {
                    ...prevState,
                    color: component.value ? component.value : component.color,
                };
            });
    }, [component]);
    const { selectedComponent, setComponentField, setSelectedComponent } =
        useComponentStore();
    const changeHandler = (color: string) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = color;
            }
            setSelectedComponent(
                { ...selectedComponent },
                'ColorSelectorComponent'
            );
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
            <div className={styles['Color-preview-container']}>
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
                    }}
                >
                    <ColorPickerLarge
                        className={styles['Color-picker']}
                        size="large"
                    />
                </span>
            </div>
        );
    }
    return (
        <div className={styles['Color-container']}>
            <ColorSelector color="#cfb9fa" onChange={() => {}} />
            <span style={{ color: '#3b00b3' }}>
                <ColorPicker className={styles['Color-picker']} size="large" />
            </span>
        </div>
    );
};
export default ColorSelectorComponent;
