import React, { useEffect, useState } from 'react';
import { FormField, SegmentedControl } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';

import { Component } from 'src/models/component.model';

import { useComponentStore } from 'src/store/ComponentStore';
import { SegmentedControlFieldNames } from 'src/constants/component-configs/SegmentedControlConfig';

type PropsType = {
    component: Component;
    isProperty: boolean;
};

type SegmentedControlStateData = {
    segmentedControlLabel: string | undefined;
    segmentedControlOptions: any[] | undefined;
    segmentedControlWidth: string | undefined;
    segmentedControlvalue: string | undefined;
};

const initialState: SegmentedControlStateData = {
    segmentedControlLabel: undefined,
    segmentedControlOptions: undefined,
    segmentedControlWidth: undefined,
    segmentedControlvalue: undefined,
};

const SegmentedControlComponent = ({ component, isProperty }: PropsType) => {
    const [segmentedControlData, setSegmentedControlData] =
        useState<SegmentedControlStateData>(initialState);
    const { selectedComponent, setSelectedComponent, setComponentField } =
        useComponentStore();

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === SegmentedControlFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setSegmentedControlData((prevState) => {
                            return {
                                ...prevState,
                                segmentedControlWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setSegmentedControlData((prevState) => {
                            return {
                                ...prevState,
                                segmentedControlWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setSegmentedControlData((prevState) => {
                            return {
                                ...prevState,
                                segmentedControlWidth: field.value
                                    ? `${field.value}px`
                                    : undefined,
                            };
                        });
                    }
                }
            }
            if (field.name === SegmentedControlFieldNames.OPTIONS) {
                setSegmentedControlData((prevState) => {
                    return {
                        ...prevState,
                        segmentedControlOptions: field.options as any[],
                        segmentedControlLabel: '  ',
                        segmentedControlvalue: field.value,
                    };
                });
            }
        });
    }, [component, component.options]);

    const changeHandler = (value: string) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = value;
            }
            setSelectedComponent({ ...selectedComponent });
            return;
        });
        setComponentField(component, value);
    };

    if (isProperty) {
        return (
            <div
                style={{
                    width: segmentedControlData.segmentedControlWidth,
                }}
            >
                <FormField
                    label={
                        segmentedControlData.segmentedControlLabel
                            ? segmentedControlData.segmentedControlLabel
                            : component.name
                    }
                    description=""
                    control={(props) => (
                        <SegmentedControl
                            options={
                                segmentedControlData.segmentedControlOptions
                                    ? segmentedControlData.segmentedControlOptions
                                    : (component.options as any[])
                            }
                            defaultValue={component.defaultValue}
                            value={
                                component.value
                                    ? (component.value as string)
                                    : segmentedControlData.segmentedControlvalue
                            }
                            onChange={changeHandler}
                        />
                    )}
                />
            </div>
        );
    }

    return (
        <ExcessContainer dynamic="140px">
            <SegmentedControl
                options={component.options as any[]}
                defaultValue={component.defaultValue}
            />
        </ExcessContainer>
    );
};

export default SegmentedControlComponent;
