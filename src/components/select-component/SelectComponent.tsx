import React, { useEffect, useRef, useState } from 'react';
import { CheckIcon, FormField, Select, Text } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import styles from './SelectComponent.css';
import { useComponentStore } from 'src/store/ComponentStore';
import { SelectFieldNames } from 'src/constants/component-configs/SelectConfig';
import SelectIcon from '../../../assets/icons/select.svg';

type PropType = {
    component: Component;
    isProperty: boolean;
};

type SelectStateData = {
    selectOptions: any[] | null;
    selectValue: string | undefined;
    componentPlaceHolder: string | undefined;
    componentWidth: string | undefined;
    componentLabel: string | null;
    componentState: 'default' | 'hover' | 'error' | 'disabled';
    componentActive: boolean;
};

const initialState: SelectStateData = {
    selectOptions: null,
    selectValue: undefined,
    componentPlaceHolder: undefined,
    componentWidth: undefined,
    componentLabel: null,
    componentState: 'default',
    componentActive: false,
};

const SelectComponent = ({ component, isProperty }: PropType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const [selectData, setSelectData] = useState<SelectStateData>(initialState);

    const changeHandler = (value: string) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = value;
            }
            setSelectedComponent({ ...selectedComponent });
            return;
        });
    };

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === SelectFieldNames.PLACEHOLDER) {
                setSelectData((prevState) => {
                    return {
                        ...prevState,
                        componentPlaceHolder: field.value || ' ',
                        componentLabel: '  ',
                    };
                });
            }
            if (field.name === SelectFieldNames.ACTIVE) {
                setSelectData((prevState) => {
                    return {
                        ...prevState,
                        componentActive: field.value,
                    };
                });
            }
            if (field.name === SelectFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setSelectData((prevState) => {
                            return {
                                ...prevState,
                                componentWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setSelectData((prevState) => {
                            return {
                                ...prevState,
                                componentWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setSelectData((prevState) => {
                            return {
                                ...prevState,
                                componentWidth: field.value
                                    ? `${field.value}px`
                                    : undefined,
                            };
                        });
                    }
                }
            }
            if (field.name === SelectFieldNames.SELECT_OPTIONS) {
                setSelectData((prevState) => {
                    return {
                        ...prevState,
                        selectOptions: field.options as any[],
                        selectValue: field.value,
                    };
                });
            }
            if (field.name === SelectFieldNames.STATE) {
                setSelectData((prevState) => {
                    return {
                        ...prevState,
                        componentState: field.value,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                className={styles['Select']}
                style={{ width: selectData.componentWidth }}
            >
                <FormField
                    label={
                        selectData.componentLabel
                            ? selectData.componentLabel
                            : component.name
                    }
                    control={(props) => (
                        <Select
                            disabled={
                                selectData.componentState === 'disabled'
                                    ? true
                                    : false
                            }
                            error={
                                selectData.componentState === 'error'
                                    ? true
                                    : false
                            }
                            options={
                                selectData.selectOptions
                                    ? selectData.selectOptions
                                    : (component.options as any[])
                            }
                            stretch={true}
                            placeholder={
                                selectData.componentPlaceHolder
                                    ? selectData.componentPlaceHolder
                                    : component.placeholder
                            }
                            onChange={changeHandler}
                            value={
                                component.value
                                    ? component.value
                                    : selectData.selectValue
                            }
                        />
                    )}
                />
                {selectData.componentActive && (
                    <div className={styles['Dropdown']}>
                        {selectData.selectOptions?.map((item) => {
                            return (
                                <div className={styles['Dropdown-item']}>
                                    <Text variant="regular" size="medium">
                                        {item.label}
                                    </Text>
                                    {item.value == component.value && (
                                        <CheckIcon />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
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
