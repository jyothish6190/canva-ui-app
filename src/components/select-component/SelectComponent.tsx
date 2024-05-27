import React, { useEffect, useState } from 'react';
import { FormField, Select, SelectOption } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import styles from './SelectComponent.css';
import { useComponentStore } from 'src/store/ComponentStore';
import SelectIcon from '../../../assets/icons/select.svg';
import {
    getLabel,
    getOptions,
    getPlaceholder,
    getState,
    getValue,
    getWidth,
    selectOptionChangeHandler,
} from './SelectComponentUtils';

type PropType = {
    component: Component;
    isProperty: boolean;
};

export type SelectState = 'default' | 'hover' | 'error' | 'disabled';

const SelectComponent = ({ component, isProperty }: PropType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const [options, setOptions] = useState<SelectOption<string>[]>([]);
    const [value, setValue] = useState('');
    const [label, setLabel] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [selectState, setSlecteState] = useState<SelectState>('default');
    const [width, setWidth] = useState<string | undefined>(undefined);

    const changeHandler = (value: string) => {
        const updatedComponent = selectOptionChangeHandler(
            selectedComponent as Component,
            component,
            value
        );

        setSelectedComponent({ ...(updatedComponent as unknown as Component) });
    };

    useEffect(() => {
        if (component) {
            setValue(getValue(component));
            setOptions(getOptions(component));
            setSlecteState(getState(component));
            setLabel(getLabel(component));
            setPlaceholder(getPlaceholder(component));
            setWidth(getWidth(component));
        }
    }, [component, component.value]);

    if (isProperty) {
        return (
            <div style={{ width: width }}>
                <FormField
                    label={label ? label : component.name}
                    control={(props) => (
                        <Select
                            disabled={selectState === 'disabled' ? true : false}
                            error={selectState === 'error' ? true : false}
                            options={options}
                            stretch={true}
                            placeholder={
                                placeholder
                                    ? placeholder
                                    : component.placeholder
                            }
                            onChange={changeHandler}
                            value={value}
                        />
                    )}
                />
            </div>
        );
    }
    return (
        <div
            style={{
                position: 'relative',
                width: 128,
                height: 128,
            }}
        >
            <Select options={[{ label: 'Option 1', value: '1' }]} />

            <SelectIcon className={styles.selectIcon} />
        </div>
    );
};

export default SelectComponent;
