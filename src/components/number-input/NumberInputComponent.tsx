import React, { useEffect, useState } from 'react';

import { NumberInput } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { NumberInputFieldNames } from 'src/constants/component-configs/NumberInputConfig';

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
    const [inputValue, setInputValue] = useState<number>(0);
    const [spinButtonValue, setSpinButtonValue] = useState<boolean>(true);
    const [numberInputState, setNumberInputState] = useState<
        'default' | 'hover' | 'active' | 'error' | 'disabled'
    >('default');

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === NumberInputFieldNames.VALUE) {
                setInputValue(field.value ? field.value : 0);
            }
            if (field.name === NumberInputFieldNames.SPIN_BUTTONS) {
                setSpinButtonValue(field.value ? field.value : false);
            }
            if (field.name === NumberInputFieldNames.STATE) {
                setNumberInputState(field.value ? field.value : 'default');
            }
        });
    }, [component]);

    if (isProperty) {
        if (spinButtonValue === true) {
            return (
                <div style={{ padding: 16 }}>
                    <NumberInput
                        defaultValue={0}
                        value={inputValue}
                        disabled={
                            numberInputState === 'disabled' ? true : false
                        }
                        error={numberInputState === 'error' ? true : false}
                        decrementAriaLabel={'Decrease'}
                        incrementAriaLabel={'Increase '}
                        hasSpinButtons={true}
                    />
                </div>
            );
        } else {
            return (
                <div style={{ padding: 16 }}>
                    <NumberInput
                        defaultValue={0}
                        value={inputValue}
                        disabled={
                            numberInputState === 'disabled' ? true : false
                        }
                        error={numberInputState === 'error' ? true : false}
                    />
                </div>
            );
        }
    } else {
        return (
            <div style={{ padding: 16 }}>
                <NumberInput
                    defaultValue={component.defaultValue}
                    hasSpinButtons={true}
                    decrementAriaLabel="decrease"
                    incrementAriaLabel="increase"
                />
            </div>
        );
    }
};

export default NumberInputComponent;
