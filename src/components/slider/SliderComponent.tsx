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

const SliderComponent = ({ component, isProperty, onChange }: PropType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const [sliderValue, setSliderValue] = useState<number>();
    const [maxValue, setMaxvalue] = useState<number>(100);
    const [minValue, setMinvalue] = useState<number>(0);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === SliderFieldNames.VALUE) {
                setSliderValue(field.value ? field.value : 0);
            }
            if (field.name === SliderFieldNames.MAXIMUM) {
                setMaxvalue(field.value ? field.value : 100);
            }
            if (field.name === SliderFieldNames.MINIMUM) {
                setMinvalue(field.value ? field.value : 0);
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
                    value={sliderValue}
                    max={maxValue}
                    min={minValue}
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
