import React, { useEffect, useRef, useState } from 'react';
import { FormField, Select } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';

import { useComponentStore } from 'src/store/ComponentStore';
import { SelectFieldNames } from 'src/constants/component-configs/SelectConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
};

type SelectStateData = {
    selectOptions: any[] | null;
    selectValue: string | undefined;
    componentPlaceHolder: string | undefined;
    componentWidth: number | undefined;
    componentLabel: string | null;
    componentState: 'default' | 'hover' | 'error' | 'disabled';
};

const initialState: SelectStateData = {
    selectOptions: null,
    selectValue: undefined,
    componentPlaceHolder: undefined,
    componentWidth: undefined,
    componentLabel: null,
    componentState: 'default',
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
            if (field.name === SelectFieldNames.WIDTH) {
                setSelectData((prevState) => {
                    return {
                        ...prevState,
                        componentWidth: field.value || undefined,
                    };
                });
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
            <div style={{ width: selectData.componentWidth + 'px' }}>
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

            <img
                src={require('assets/images/select.png')}
                alt="Image 2"
                style={{
                    position: 'absolute',
                    bottom: -15,
                    right: -25,
                }}
            />
        </div>
    );
};

export default SelectComponent;
