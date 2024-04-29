import React, { useEffect, useState } from 'react';

import { Checkbox } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { CheckBoxFieldNames } from 'src/constants/component-configs/CheckBoxConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

const CheckBoxComponent = ({ component, isProperty, onChange }: PropType) => {
    const [checkedState, setCheckedState] = useState<boolean>(true);
    const [checkBoxLabel, setCheckBoxLabel] = useState<string>('Checkbox');
    const [checkBoxState, setCheckBoxState] = useState<
        'default' | 'hover' | 'pressed' | 'disabled' | 'error'
    >('default');

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === CheckBoxFieldNames.CHECKED) {
                setCheckedState(field.value ? field.value : false);
            }
            if (field.name === CheckBoxFieldNames.CHECKBOX_LABEL) {
                setCheckBoxLabel(field.value ? field.value : 'Checkbox');
            }
            if (field.name === CheckBoxFieldNames.STATE) {
                setCheckBoxState(field.value ? field.value : 'default');
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <Checkbox
                checked={checkedState ? true : false}
                label={checkBoxLabel}
                disabled={checkBoxState === 'disabled' ? true : false}
            />
        );
    } else {
        return (
            <Checkbox checked={component.defaultValue} label={component.name} />
        );
    }
};
export default CheckBoxComponent;
