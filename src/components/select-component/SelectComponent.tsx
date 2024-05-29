import React, { useEffect, useState } from 'react';
import {
    FormField,
    Select,
    SelectOption,
    CheckIcon,
    Text,
} from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import styles from './SelectComponent.css';
import { useComponentStore } from 'src/store/ComponentStore';
import SelectIcon from '../../../assets/icons/select.svg';
import {
    getActive,
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
    const [active, setActive] = useState<boolean>(false);
    const [width, setWidth] = useState<string | undefined>(undefined);
    const [selectedvValue, setSelectedValue] = useState('');

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
            setActive(getActive(component));
        }
    }, [component, component.value, component.options]);

    const renderedClass = () => {
        if (active) {
            return styles['Select'];
        } else if (selectState === 'hover') {
            return styles['Select-hover'];
        } else {
            return '';
        }
    };

    if (isProperty) {
        return (
            <div className={renderedClass()} style={{ width: width }}>
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
                {active && (
                    <div className={styles['Dropdown']}>
                        {options?.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${styles['Dropdown-item']} ${
                                        item.value === value
                                            ? styles['Selected-item']
                                            : ''
                                    }`}
                                >
                                    <Text variant="regular" size="medium">
                                        {item.label}
                                    </Text>
                                    <div className={styles['check']}>
                                        <CheckIcon />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
    return (
        <div className={styles['Home-select-container']}>
            <Select options={[{ label: 'Option 1', value: '1' }]} />
            <span>
                <SelectIcon className={styles.selectIcon} />
            </span>
        </div>
    );
};

export default SelectComponent;
