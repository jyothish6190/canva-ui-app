import React from 'react';
import { FormField, TextInput, Title } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';

import { Component } from 'src/models/component.model';

import { useComponentStore } from 'src/store/ComponentStore';

type PropType = {
    component: Component;
    isProperty: boolean;
};

const FormFieldComponent = ({ component, isProperty }: PropType) => {
    const { selectedComponent, setSelectedComponent, setComponentField } =
        useComponentStore();

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
            <FormField
                label={
                    (<Title children={component.name} size="xsmall" />) as any
                }
                control={(props) => (
                    <TextInput
                        placeholder={component.placeholder}
                        value={component.value as string}
                        onChange={changeHandler}
                    />
                )}
            />
        );
    }
    return (
        <ExcessContainer dynamic={'300px'}>
            <FormField
                label={component.label as string}
                description={component.description}
                control={(props) => <TextInput {...props} />}
            />
        </ExcessContainer>
    );
};

export default FormFieldComponent;
