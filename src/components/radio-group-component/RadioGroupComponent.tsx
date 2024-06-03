import React, { useEffect, useState } from 'react';

import { RadioGroup } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { RadioConfigFieldNames } from 'src/constants/component-configs/RadioGroupConfig';

type RadioPropType = {
    component: Component;
    isProperty: boolean;
};

type RadioStateData = {
    radioWidth: string | undefined;
    radioOptions: any[];
    radioValue: string;
    height: number;
};

const initialState: RadioStateData = {
    radioWidth: undefined,
    radioOptions: [],
    radioValue: '',
    height: 0,
};

const RadioGroupComponent = ({ component, isProperty }: RadioPropType) => {
    const [radioData, setRadioData] = useState<RadioStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === RadioConfigFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setRadioData((prevState) => {
                            return {
                                ...prevState,
                                radioWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setRadioData((prevState) => {
                            return {
                                ...prevState,
                                radioWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setRadioData((prevState) => {
                            return {
                                ...prevState,
                                radioWidth: field.value
                                    ? `${field.value}px`
                                    : undefined,
                            };
                        });
                    }
                }
            }
            if (field.name === RadioConfigFieldNames.RADIO_OPTIONS) {
                setRadioData((prevState) => {
                    return {
                        ...prevState,
                        radioOptions: field.options as any[],
                        radioValue: field.value,
                    };
                });
            }
        });
    }, [component]);

    useEffect(() => {
        Height();
    }, [radioData.radioOptions]);

    const Height = () => {
        const divelement = document.querySelector('#radioGroup');

        if (divelement) {
            setRadioData((prevState) => {
                return {
                    ...prevState,
                    height: (divelement as HTMLElement).offsetHeight,
                };
            });
        }
    };

    const getScale = () => {
        let scale = 1;
        if (radioData.height && radioData.height > 220) {
            scale = 220 / radioData.height;
        } else {
            scale = 1;
        }
        return scale.toString();
    };

    if (isProperty) {
        return (
            <div
                id={radioData.radioOptions ? 'radioGroup' : ''}
                style={{
                    width: radioData.radioWidth
                        ? radioData.radioWidth
                        : undefined,
                    scale: radioData.radioOptions ? getScale() : '',
                }}
            >
                <RadioGroup
                    defaultValue={component.value}
                    value={
                        component.value ? component.value : radioData.radioValue
                    }
                    options={radioData.radioOptions}
                />
            </div>
        );
    } else {
        return (
            <RadioGroup
                defaultValue={'blueberry'}
                options={[
                    {
                        label: 'Blueberry',
                        value: 'blueberry',
                    },
                    {
                        label: 'Apple',
                        value: 'apple',
                    },
                    {
                        label: 'Strawberry',
                        value: 'strawberry',
                    },
                ]}
            />
        );
    }
};

export default RadioGroupComponent;
