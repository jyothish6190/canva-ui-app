import React, { useEffect, useState } from 'react';
import { Slider } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { SliderFieldNames } from 'src/constants/component-configs/SliderConfig';
import { useComponentStore } from 'src/store/ComponentStore';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: any) => void;
};

type SliderStateData = {
    sliderValue: number | undefined;
    maxValue: number;
    minValue: number;
};

const initialState: SliderStateData = {
    sliderValue: undefined,
    maxValue: 100,
    minValue: 0,
};

const SliderComponent = ({ component, isProperty, onChange }: PropType) => {
    const [sliderState, setSliderState] =
        useState<SliderStateData>(initialState);
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === SliderFieldNames.VALUE) {
                setSliderState((prevState) => {
                    return {
                        ...prevState,
                        sliderValue: field.value,
                    };
                });
            }
            if (field.name === SliderFieldNames.MINIMUM) {
                setSliderState((prevState) => {
                    return {
                        ...prevState,
                        minValue: field.value ? field.value : 0,
                    };
                });
            }
            if (field.name === SliderFieldNames.MAXIMUM) {
                setSliderState((prevState) => {
                    return {
                        ...prevState,
                        maxValue: field.value ? field.value : 100,
                    };
                });
            }
        });
    }, [component]);

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
            <div style={{ width: 250 }}>
                <Slider
                    defaultValue={component.defaultValue}
                    value={sliderState.sliderValue}
                    max={sliderState.maxValue}
                    min={sliderState.minValue}
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
