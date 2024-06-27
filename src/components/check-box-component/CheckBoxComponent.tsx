import React, { useEffect, useState } from 'react';

import { Checkbox } from '@canva/app-ui-kit';

import styles from './CheckBoxComponent.css';
import { Component } from 'src/models/component.model';
import { CheckBoxFieldNames } from 'src/constants/component-configs/CheckBoxConfig';
import {
    getLabel,
    getSelectedState,
    getState,
    getWidth,
} from './CheckboxUtils';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

const CheckBoxComponent = ({ component, isProperty, onChange }: PropType) => {
    const [label, setLabel] = useState('Checkbox');
    const [state, setState] = useState<
        'default' | 'hover' | 'pressed' | 'disabled'
    >('default');
    const [selected, setSelected] = useState(false);
    const [width, setWidth] = useState<string | undefined>(undefined);

    useEffect(() => {
        setLabel(getLabel(component));
        setState(getState(component));
        setSelected(getSelectedState(component));
        setWidth(getWidth(component));
    }, [component]);

    const renderedClass = () => {
        switch (state) {
            case 'hover':
                return styles['hover-checkbox'];
                break;
            case 'pressed':
                return styles['pressed-checkbox'];
                break;
            case 'disabled':
                return styles['disabled-checkbox'];
                break;
            default:
                return styles['checkbox'];
                break;
        }
    };

    if (isProperty) {
        return (
            <div className={renderedClass()} style={{ width: width }}>
                <Checkbox
                    checked={selected}
                    label={label}
                    disabled={state === 'disabled' ? true : false}
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
