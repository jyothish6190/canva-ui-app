import React from 'react';

import ExcessContainer from '../CommonComponents/excessContainer';
import { Component } from 'src/models/coponent.model';
import { Alert } from '@canva/app-ui-kit';

type AlertType = {
    component: Component;
};

const AlertComponent = ({ component }: AlertType) => {
    return (
        <ExcessContainer dynamic={'300px'}>
            <Alert tone="positive">{component.name}</Alert>
        </ExcessContainer>
    );
};

export default AlertComponent;
