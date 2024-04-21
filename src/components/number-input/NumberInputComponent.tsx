import React from 'react';

import { NumberInput } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';

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
    if (component.hasSpinButtons) {
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
    }
    return (
        <div style={{ padding: 16 }}>
            <NumberInput defaultValue={component.defaultValue} />
        </div>
    );
};

export default NumberInputComponent;
