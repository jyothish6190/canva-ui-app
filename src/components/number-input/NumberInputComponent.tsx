import React, { useEffect, useState } from 'react';

import { NumberInput } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { NumberInputFieldNames } from 'src/constants/component-configs/NumberInputConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

type NumberInputStateData = {
    inputValue: number;
    spinButtonValue: boolean;
    numberInputState: 'default' | 'hover' | 'active' | 'error' | 'disabled';
    numberInputWidth: number;
};

const initialState: NumberInputStateData = {
    inputValue: 0,
    spinButtonValue: false,
    numberInputState: 'default',
    numberInputWidth: 328,
};

const NumberInputComponent = ({
    component,
    isProperty,
    onChange,
}: PropType) => {
    const [numberInputData, setNumberInputData] =
        useState<NumberInputStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === NumberInputFieldNames.VALUE) {
                setNumberInputData((prevState) => {
                    return {
                        ...prevState,
                        inputValue: field.value ? field.value : 0,
                    };
                });
            }
            if (field.name === NumberInputFieldNames.SPIN_BUTTONS) {
                setNumberInputData((prevState) => {
                    return {
                        ...prevState,
                        spinButtonValue: field.value ? field.value : false,
                    };
                });
            }
            if (field.name === NumberInputFieldNames.STATE) {
                setNumberInputData((prevState) => {
                    return {
                        ...prevState,
                        numberInputState: field.value ? field.value : 'default',
                    };
                });
            }
            if (field.name === NumberInputFieldNames.WIDTH) {
                setNumberInputData((prevState) => {
                    return {
                        ...prevState,
                        numberInputWidth: field.value ? field.value : 328,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        if (numberInputData.spinButtonValue === true) {
            return (
                <div
                    style={{
                        padding: 16,
                        width: numberInputData.numberInputWidth + 'px',
                    }}
                >
                    <NumberInput
                        defaultValue={0}
                        value={numberInputData.inputValue}
                        disabled={
                            numberInputData.numberInputState === 'disabled'
                                ? true
                                : false
                        }
                        error={
                            numberInputData.numberInputState === 'error'
                                ? true
                                : false
                        }
                        decrementAriaLabel={'Decrease'}
                        incrementAriaLabel={'Increase '}
                        hasSpinButtons={true}
                    />
                </div>
            );
        } else {
            return (
                <div
                    style={{
                        padding: 16,
                        width: numberInputData.numberInputWidth,
                    }}
                >
                    <NumberInput
                        defaultValue={0}
                        value={numberInputData.inputValue}
                        disabled={
                            numberInputData.numberInputState === 'disabled'
                                ? true
                                : false
                        }
                        error={
                            numberInputData.numberInputState === 'error'
                                ? true
                                : false
                        }
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
