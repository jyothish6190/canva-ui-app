import React from 'react';

import { NumberInput } from '@canva/app-ui-kit';

import { Component } from 'src/models/coponent.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

const NumberInputComponent = ({
    component,
    isProperty,
    onChange,
}: PropType) => {
    return (
        <div style={{ padding: 16 }}>
            <NumberInput
                defaultValue={component.defaultValue}
                decrementAriaLabel="decrease"
                incrementAriaLabel="increase"
                hasSpinButtons={true}
            />
        </div>
    );
};

export default NumberInputComponent;
