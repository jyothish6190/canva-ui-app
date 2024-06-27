import React, { useEffect, useState } from 'react';

import { RadioGroup, RadioOption } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { getOptions, getValue, getWidth } from './RadioGroupComponentUtils';
import styles from './RadioGroupComponent.css';

type RadioPropType = {
    component: Component;
    isProperty: boolean;
};

const RadioGroupComponent = ({ component, isProperty }: RadioPropType) => {
    const [options, setOptions] = useState<RadioOption<string>[]>([]);
    const [value, setValue] = useState<string | undefined>(undefined);
    const [width, setWidth] = useState<string | undefined>(undefined);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setOptions(getOptions(component));
        setValue(getValue(component));
        setWidth(getWidth(component));
    }, [component, component.options]);

    useEffect(() => {
        getHeight();
    }, [options]);

    const getHeight = () => {
        const divelement = document.querySelector('#radioGroup');
        if (divelement) {
            setHeight((divelement as HTMLElement).offsetHeight);
        }
    };

    if (isProperty) {
        return (
            <div
                className={styles['radio-group']}
                id={options ? 'radioGroup' : ''}
                style={{
                    width: width,
                }}
            >
                <RadioGroup
                    defaultValue={value}
                    value={value}
                    options={options}
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
