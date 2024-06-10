import React, { useEffect, useState } from 'react';
import { Switch, Title } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';

import styles from './SwitchComponent.css';
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
    switchWidth: string | undefined;
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
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setSwitchData((prevState) => {
                            return {
                                ...prevState,
                                switchWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setSwitchData((prevState) => {
                            return {
                                ...prevState,
                                switchWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setSwitchData((prevState) => {
                            return {
                                ...prevState,
                                switchWidth: field.value
                                    ? `${field.value}px`
                                    : undefined,
                            };
                        });
                    }
                }
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
                setSelectedComponent(
                    { ...selectedComponent },
                    'SwitchComponent'
                );
                return;
            }
        });

        setComponentField(component, value);
    };

    const renderedClass = () => {
        switch (switchData.switchState) {
            case 'hover':
                return styles['Switch-active'];
                break;

            default:
                return styles['Switch'];
                break;
        }
    };

    if (isProperty) {
        return (
            <div
                className={renderedClass()}
                style={{ width: switchData.switchWidth }}
            >
                <Switch
                    defaultValue={component.defaultValue}
                    disabled={
                        switchData.switchState === 'disabled' ? true : false
                    }
                    label={
                        (
                            <Title
                                children={
                                    switchData.switchLabel
                                        ? switchData.switchLabel
                                        : component.name
                                }
                                size="xsmall"
                            />
                        ) as any
                    }
                    value={
                        typeof component.value === 'boolean'
                            ? component.value
                            : switchData.switchValue
                    }
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
