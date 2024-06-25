import React from 'react';
import { FormField, TextInput, Title } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';

import { Component } from 'src/models/component.model';

import { useComponentStore } from 'src/store/ComponentStore';
import { FormControlNames, FormFieldNames } from './FormFieldConfig';
import MultilineInputComponent from '../multiline-input-component/MultilineInputComponent';
import ComponentItem from 'src/pages/home/component-list/component-item/ComponentItem';

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
            setSelectedComponent(
                { ...selectedComponent },
                'FormFieldComponent'
            );
            return;
        });
        setComponentField(component, value);
    };

    const getComponent = () => {
        let componentType = '';

        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === FormFieldNames.CONTROL) {
                componentType = field.value;
            }
        });

        // if (componentType === FormControlNames.FORM_MULTILINE_INPUT) {
        //     return (
        //         <ComponentItem
        //             component={selectedComponent as Component}
        //             isProperty={true}
        //         />
        //     );
        // } else {
        return (
            <TextInput
                placeholder={component.placeholder}
                value={component.value as string}
                onChange={changeHandler}
            />
        );
        // }
    };

    if (isProperty) {
        return (
            <div
                style={{
                    padding: '0.5px',
                }}
            >
                <FormField
                    label={
                        (
                            <Title children={component.name} size="xsmall" />
                        ) as any
                    }
                    control={(props) => getComponent()}
                />
            </div>
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
