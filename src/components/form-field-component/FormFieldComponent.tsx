import React from 'react';
import { FormField, TextInput } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';
import { Component } from 'src/models/coponent.model';

type FormFieldComponentType = {
    component: Component;
};

const FormFieldComponent = ({ component }: FormFieldComponentType) => {
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
