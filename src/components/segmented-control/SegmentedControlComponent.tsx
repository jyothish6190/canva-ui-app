import React, { useEffect, useState } from 'react';
import {
    FormField,
    SegmentedControl,
    SegmentedControlOption,
    Title,
} from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';

import { Component } from 'src/models/component.model';

import { useComponentStore } from 'src/store/ComponentStore';
import {
    getLabel,
    getOptions,
    getSelectedValue,
    getWidth,
    processSegementedFieldChange,
} from './SegmentedControlUtils';

type PropsType = {
    component: Component;
    isProperty: boolean;
};

const SegmentedControlComponent = ({ component, isProperty }: PropsType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();
    const [width, setWidth] = useState('');
    const [label, setLabel] = useState('');
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<SegmentedControlOption<string>[]>(
        []
    );

    useEffect(() => {
        if (component) {
            const width = getWidth(component);
            setWidth(width);

            const value = getSelectedValue(component);
            setValue(value);

            const optionsList = getOptions(component);
            console.log('🚀 ~ useEffect ~ optionsList:', optionsList);
            setOptions(optionsList);

            const title = getLabel(component);
            setLabel(title);
        }
    }, [component, component.options, component.value]);

    const changeHandler = (value: string) => {
        const updatedComponent = processSegementedFieldChange(
            selectedComponent as Component,
            component,
            value
        );

        setSelectedComponent({ ...updatedComponent });
    };

    if (isProperty) {
        console.log(
            '🚀 ~ SegmentedControlComponent ~ isProperty:',
            isProperty,
            options
        );

        return (
            <div
                style={{
                    width: width,
                }}
            >
                <FormField
                    label={(<Title children={label} size="xsmall" />) as any}
                    description=""
                    control={(props) => (
                        <SegmentedControl
                            options={options}
                            defaultValue={component.defaultValue}
                            value={value}
                            onChange={changeHandler}
                        />
                    )}
                />
            </div>
        );
    }

    console.log(
        '🚀 ~ SegmentedControlComponent ~ component.options:',
        component.options
    );
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
