import React, { useEffect, useState } from 'react';

import { Checkbox } from '@canva/app-ui-kit';

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
    checkBoxWidth: number | undefined;
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
                setCheckboxDataState((prevState) => {
                    return {
                        ...prevState,
                        checkBoxWidth: field.value,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div style={{ width: checkboxDataState.checkBoxWidth }}>
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
