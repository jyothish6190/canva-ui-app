import React, { useEffect, useState } from 'react';

import { CheckboxGroup, CheckboxOption } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { getOptions, getSelectedOptions, getWidth } from './CheckboxGroupUtils';

type CheckBoxPropType = {
    component: Component;
    isProperty: boolean;
};

const CheckboxGroupComponent = ({
    component,
    isProperty,
}: CheckBoxPropType) => {
    const [width, setWidth] = useState<string | undefined>(undefined);
    const [options, setOptions] = useState<CheckboxOption<string>[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    useEffect(() => {
        setWidth(getWidth(component));
        setOptions(getOptions(component));
        setSelectedOptions(getSelectedOptions(component));
    }, [component, component.fields, component.value]);

    if (isProperty) {
        return (
            <div
                style={
                    width
                        ? {
                              width: width,
                          }
                        : {}
                }
            >
                <CheckboxGroup options={options} value={selectedOptions} />
            </div>
        );
    } else {
        return (
            <CheckboxGroup
                defaultValue={['blueberry']}
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

export default CheckboxGroupComponent;
