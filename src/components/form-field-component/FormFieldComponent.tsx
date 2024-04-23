import React from 'react';
import { FormField, TextInput } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';
import { Component } from 'src/models/component.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

const FormFieldComponent = ({ component, isProperty, onChange }: PropType) => {
    if (isProperty) {
        return (
            <FormField
                label={component.name}
                control={(props) => (
                    <TextInput
                        placeholder={component.placeholder}
                        value={component.value as string}
                        onChange={onChange}
                    />
                )}
            />
        );
    }
    return (
        <ExcessContainer dynamic={'300px'}>
            <FormField
                label={component.name}
                description={component.description}
                control={(props) => <TextInput {...props} />}
            />
        </ExcessContainer>
    );
};

export default FormFieldComponent;
