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
    updateIconTextValue,
} from './SegmentedControlUtils';

import styles from './SegmentedControlComponent.css';

type PropsType = {
    component: Component;
    isProperty: boolean;
};

const SegmentedControlComponent = ({ component, isProperty }: PropsType) => {
    const { selectedComponent, updateComponentTrigger, setSelectedComponent } =
        useComponentStore();
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
            setOptions(optionsList);

            const title = getLabel(component);
            setLabel(title);
        }
    }, [component, component.options, component.value]);
    console.log(
        '🚀 ~ SegmentedControlComponent ~ component.options:',
        component.options
    );

    useEffect(() => {
        updateIconTextValue(selectedComponent as Component, value);
    }, [updateComponentTrigger]);

    const changeHandler = (value: string) => {
        const updatedComponent = processSegementedFieldChange(
            selectedComponent as Component,
            component,
            value
        );

        setSelectedComponent(
            { ...updatedComponent },
            'SegmentedControlComponent'
        );
    };

    if (isProperty) {
        return (
            <div
                style={{
                    width: width,
                    padding: '0.5px',
                }}
                className={styles['segmented-control']}
            >
                <FormField
                    label={
                        label == ''
                            ? (undefined as any)
                            : ((
                                  <Title children={label} size="xsmall" />
                              ) as any)
                    }
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
