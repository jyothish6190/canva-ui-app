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
    numberInputWidth: string;
};

const initialState: NumberInputStateData = {
    inputValue: 0,
    spinButtonValue: false,
    numberInputState: 'default',
    numberInputWidth: '328px',
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
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setNumberInputData((prevState) => {
                            return {
                                ...prevState,
                                numberInputWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setNumberInputData((prevState) => {
                            return {
                                ...prevState,
                                numberInputWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setNumberInputData((prevState) => {
                            return {
                                ...prevState,
                                numberInputWidth: `${field.value}px`,
                            };
                        });
                    }
                }
            }
        });
    }, [component]);

    if (isProperty) {
        if (numberInputData.spinButtonValue === true) {
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
