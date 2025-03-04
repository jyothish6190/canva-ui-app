import React, { useEffect, useState } from 'react';
import { FormField, Slider, Title } from '@canva/app-ui-kit';

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
    maxValue: number | undefined;
    minValue: number | undefined;
    sliderLabel: string | undefined;
    sliderWidth: string | undefined;
};

const initialState: SliderStateData = {
    sliderValue: undefined,
    maxValue: undefined,
    minValue: undefined,
    sliderLabel: undefined,
    sliderWidth: undefined,
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
                        sliderLabel: ' ',
                    };
                });
            }
            if (field.name === SliderFieldNames.MINIMUM) {
                setSliderState((prevState) => {
                    return {
                        ...prevState,
                        minValue: field.value,
                    };
                });
            }
            if (field.name === SliderFieldNames.MAXIMUM) {
                setSliderState((prevState) => {
                    return {
                        ...prevState,
                        maxValue: field.value,
                    };
                });
            }
            if (field.name === SliderFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setSliderState((prevState) => {
                            return {
                                ...prevState,
                                sliderWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setSliderState((prevState) => {
                            return {
                                ...prevState,
                                sliderWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setSliderState((prevState) => {
                            return {
                                ...prevState,
                                sliderWidth: field.value
                                    ? `${field.value}px`
                                    : undefined,
                            };
                        });
                    }
                }
            }
        });
    }, [component]);

    const changeHandler = (value: number) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = value;
            }
            setSelectedComponent({ ...selectedComponent }, 'SliderComponent');
            return;
        });
    };
    const addCustomPadding = () => {
        let value = getSliderValue(sliderState, component);
        let valueLength = value?.toString().length;

        let initialPadding = '11px';

        switch (valueLength) {
            case 1:
                initialPadding = '16px';
                break;
            case 2:
                initialPadding = '11px';
                break;
            case 3:
                initialPadding = '6px';
                break;
        }

        document.documentElement.style.setProperty(
            '--slider-input-padding-left',
            initialPadding
        );
    };

    useEffect(() => {
        addCustomPadding();
    }, [sliderState]);

    const getSliderValue = (sliderState, component) => {
        if (sliderState.sliderValue) {
            if (sliderState.sliderValue > sliderState.maxValue) {
                return sliderState.maxValue;
            } else if (sliderState.sliderValue < sliderState.minValue) {
                return sliderState.minValue;
            } else {
                return sliderState.sliderValue;
            }
        } else {
            if (component.value > component.max) {
                return component.max;
            } else if (component.value < component.min) {
                return component.min;
            } else {
                return component.value;
            }
        }
    };

    if (isProperty) {
        return (
            <div
                id="sliderInput"
                className=""
                style={{
                    width: sliderState.sliderWidth,
                }}
            >
                <FormField
                    label={
                        (sliderState.sliderLabel ? (
                            (undefined as any)
                        ) : (
                            <Title children={component.name} size="xsmall" />
                        )) as any
                    }
                    control={(props) => (
                        <Slider
                            defaultValue={
                                sliderState.minValue || component.defaultValue
                            }
                            value={getSliderValue(sliderState, component)}
                            max={
                                sliderState.maxValue
                                    ? sliderState.maxValue
                                    : (component.max as number)
                            }
                            min={
                                sliderState.minValue
                                    ? sliderState.minValue
                                    : (component.min as number)
                            }
                            onChange={changeHandler}
                        />
                    )}
                />
            </div>
        );
    }
    return (
        <div style={{ width: 10 + 'rem', paddingLeft: 17 }}>
            <Slider defaultValue={0} max={100} min={20} step={0} />
        </div>
    );
};

export default SliderComponent;
