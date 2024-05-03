import React, { useEffect, useState } from 'react';
import { Switch } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';

import { useComponentStore } from 'src/store/ComponentStore';
import { SwitchFieldNames } from 'src/constants/component-configs/SwitchConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
};

type SwitchStateData = {
    switchValue: boolean | undefined;
    switchLabel: string | undefined;
    switchDescription: string | undefined;
    switchState: 'default' | 'disabled' | 'hover';
    switchWidth: number | undefined;
};

const initialState: SwitchStateData = {
    switchValue: undefined,
    switchLabel: undefined,
    switchDescription: undefined,
    switchState: 'default',
    switchWidth: undefined,
};

const SwitchComponent = ({ component, isProperty }: PropType) => {
    const [switchData, setSwitchData] = useState<SwitchStateData>(initialState);

    console.log('Switchcomponent', component);
    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === SwitchFieldNames.CHECKED) {
                setSwitchData((prevState) => {
                    return {
                        ...prevState,
                        switchValue: field.value,
                    };
                });
            }
            if (field.name === SwitchFieldNames.LABEL) {
                setSwitchData((prevState) => {
                    return {
                        ...prevState,
                        switchLabel: field.value || '  ',
                    };
                });
                console.log('Switchdata', switchData);
            }
            if (field.name === SwitchFieldNames.DESCRIPTION) {
                setSwitchData((prevState) => {
                    return {
                        ...prevState,
                        switchDescription: field.value,
                    };
                });
            }
            if (field.name === SwitchFieldNames.WIDTH) {
                setSwitchData((prevState) => {
                    return {
                        ...prevState,
                        switchWidth: field.value,
                    };
                });
            }
            if (field.name === SwitchFieldNames.STATE) {
                setSwitchData((prevState) => {
                    return {
                        ...prevState,
                        switchState: field.value,
                    };
                });
            }
        });
    }, [component]);

    const { selectedComponent, setComponentField, setSelectedComponent } =
        useComponentStore();

    const changeHandler = (value: boolean) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = value;
                setSelectedComponent({ ...selectedComponent });
                return;
            }
        });

        setComponentField(component, value);
    };

    if (isProperty) {
        return (
            <div style={{ width: switchData.switchWidth }}>
                <Switch
                    defaultValue={component.defaultValue}
                    disabled={
                        switchData.switchState === 'disabled' ? true : false
                    }
                    label={
                        switchData.switchLabel
                            ? switchData.switchLabel
                            : component.name
                    }
                    value={switchData.switchValue}
                    description={
                        switchData.switchDescription
                            ? switchData.switchDescription
                            : component.description
                    }
                    onChange={changeHandler}
                />
            </div>
        );
    }
    return (
        <div style={{ padding: 16 }}>
            <Switch defaultValue={true} />
        </div>
    );
};

export default SwitchComponent;
