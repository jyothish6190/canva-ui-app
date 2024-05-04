import React, { useEffect, useState } from 'react';

import { RadioGroup, RadioOption, SelectOption } from '@canva/app-ui-kit';
import { Component } from 'src/models/component.model';
import { useOptionStore } from 'src/store/OptionListStore';
import { RadioConfigFieldNames } from 'src/constants/component-configs/RadioGroupConfig';

type RadioPropType = {
    component: Component;
    isProperty: boolean;
};

type RadioStateData = {
    radioWidth: number | undefined;
};

const initialState: RadioStateData = {
    radioWidth: undefined,
};

const RadioGroupComponent = ({ component, isProperty }: RadioPropType) => {
    const [radioData, setRadioData] = useState<RadioStateData>(initialState);

    const { OptionList } = useOptionStore();

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
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                style={{
                    width: radioData.radioWidth
                        ? radioData.radioWidth
                        : undefined,
                }}
            >
                <RadioGroup
                    defaultValue={'blueberry'}
                    options={[...OptionList]}
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
