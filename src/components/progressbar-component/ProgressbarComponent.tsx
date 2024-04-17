import React from 'react';
import { ProgressBar } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';
import { Component } from 'src/models/coponent.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: any) => void;
};

const ProgressbarComponent = ({
    component,
    isProperty,
    onChange,
}: PropType) => {
    if (isProperty) {
        return (
            <div style={{ width: '100%' }}>
                <ProgressBar size="medium" tone="info" value={50} />;
            </div>
        );
    }
    return (
        <ExcessContainer dynamic="300px">
            <ProgressBar size="medium" tone="info" value={50} />
        </ExcessContainer>
    );
};

export default ProgressbarComponent;
