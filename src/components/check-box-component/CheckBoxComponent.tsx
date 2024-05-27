import React, { useEffect, useState } from 'react';

import { Checkbox } from '@canva/app-ui-kit';

import styles from './CheckBoxComponent.css';
import { Component } from 'src/models/component.model';
import { CheckBoxFieldNames } from 'src/constants/component-configs/CheckBoxConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

type CheckboxStateData = {
    checkedState: boolean;
    checkBoxLabel: string;
    checkBoxState: 'default' | 'hover' | 'pressed' | 'disabled' | 'error';
    checkBoxWidth: string | undefined;
};

const initialState: CheckboxStateData = {
    checkedState: true,
    checkBoxLabel: 'Checkbox',
    checkBoxState: 'default',
    checkBoxWidth: undefined,
};

const CheckBoxComponent = ({ component, isProperty, onChange }: PropType) => {
    const [checkboxDataState, setCheckboxDataState] =
        useState<CheckboxStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === CheckBoxFieldNames.CHECKED) {
                setCheckboxDataState((prevState) => {
                    return {
                        ...prevState,
                        checkedState: field.value,
                    };
                });
            }
            if (field.name === CheckBoxFieldNames.CHECKBOX_LABEL) {
                setCheckboxDataState((prevState) => {
                    return {
                        ...prevState,
                        checkBoxLabel: field.value ? field.value : 'Checkbox',
                    };
                });
            }
            if (field.name === CheckBoxFieldNames.STATE) {
                setCheckboxDataState((prevState) => {
                    return {
                        ...prevState,
                        checkBoxState: field.value ? field.value : 'default',
                    };
                });
            }
            if (field.name === CheckBoxFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setCheckboxDataState((prevState) => {
                            return {
                                ...prevState,
                                checkBoxWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setCheckboxDataState((prevState) => {
                            return {
                                ...prevState,
                                checkBoxWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setCheckboxDataState((prevState) => {
                            return {
                                ...prevState,
                                checkBoxWidth: field.value
                                    ? `${field.value}px`
                                    : undefined,
                            };
                        });
                    }
                }
            }
        });
    }, [component]);
    const renderedClass = () => {
        switch (checkboxDataState.checkBoxState) {
            case 'hover':
                return styles['Hover-checkbox'];
                break;
            case 'pressed':
                return styles['Pressed-checkbox'];
                break;
            case 'error':
                return styles['Error-checkbox'];
                break;
            default:
                return '';
                break;
        }
    };

    if (isProperty) {
        return (
            <div
                className={renderedClass()}
                style={{ width: checkboxDataState.checkBoxWidth }}
            >
                <Checkbox
                    checked={checkboxDataState.checkedState}
                    label={checkboxDataState.checkBoxLabel}
                    disabled={
                        checkboxDataState.checkBoxState === 'disabled'
                            ? true
                            : false
                    }
                />
            </div>
        );
    } else {
        return (
            <Checkbox checked={component.defaultValue} label={component.name} />
        );
    }
};
export default CheckBoxComponent;
