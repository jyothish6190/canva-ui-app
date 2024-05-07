import React, { useEffect, useState } from 'react';

import { RadioGroup } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { RadioConfigFieldNames } from 'src/constants/component-configs/RadioGroupConfig';

type RadioPropType = {
    component: Component;
    isProperty: boolean;
};

type RadioStateData = {
    radioWidth: number | undefined;
    radioOptions: any[];
};

const initialState: RadioStateData = {
    radioWidth: undefined,
    radioOptions: [],
};

const RadioGroupComponent = ({ component, isProperty }: RadioPropType) => {
    const [radioData, setRadioData] = useState<RadioStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === RadioConfigFieldNames.WIDTH) {
                setRadioData((prevState) => {
                    return {
                        ...prevState,
                        radioWidth: field.value || undefined,
                    };
                });
            }
            if (field.name === RadioConfigFieldNames.RADIO_OPTIONS) {
                setRadioData((prevState) => {
                    return {
                        ...prevState,
                        radioOptions: field.options as any[],
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                style={{
                    width: radioData.radioWidth
                        ? radioData.radioWidth + 'px'
                        : undefined,
                }}
            >
                <RadioGroup
                    defaultValue={'blueberry'}
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
