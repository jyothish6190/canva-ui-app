import React from 'react';
import { FormField, SegmentedControl } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';

import { Component } from 'src/models/component.model';

import { useComponentStore } from 'src/store/ComponentStore';

type PropsType = {
    component: Component;
    isProperty: boolean;
};

const SegmentedControlComponent = ({ component, isProperty }: PropsType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const changeHandler = (value: string) => {
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
            <FormField
                label={component.name}
                description=""
                control={(props) => (
                    <SegmentedControl
                        options={component.options as any[]}
                        defaultValue={component.defaultValue}
                        value={component.value as string}
                        onChange={changeHandler}
                    />
                )}
            />
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
