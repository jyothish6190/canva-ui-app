import React from 'react';
import { Alert } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';
import { Component } from 'src/models/component.model';

type AlertType = {
    component: Component;
    isProperty: boolean;
};

const AlertComponent = ({ component, isProperty }: AlertType) => {
    if (isProperty) {
        return <Alert tone="positive">{component.name}</Alert>;
    }
    return (
        <ExcessContainer dynamic={'300px'}>
            <Alert tone="positive">{component.name}</Alert>
        </ExcessContainer>
    );
};

export default AlertComponent;
