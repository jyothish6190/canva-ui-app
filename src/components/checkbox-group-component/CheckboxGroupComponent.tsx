import React, { useEffect, useState } from 'react';

import { CheckboxGroup } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { CheckboxGroupFieldNames } from 'src/constants/component-configs/CheckBoxGroupConfig';

type CheckBoxPropType = {
    component: Component;
    isProperty: boolean;
};

type CheckBoxStateData = {
    checkBoxWidth: string | undefined;
    checkBoxoption: any[];
    height: number;
};

const initialState: CheckBoxStateData = {
    checkBoxWidth: undefined,
    checkBoxoption: [],
    height: 0,
};

const CheckboxGroupComponent = ({
    component,
    isProperty,
}: CheckBoxPropType) => {
    const [checkboxData, setcheckboxData] =
        useState<CheckBoxStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === CheckboxGroupFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setcheckboxData((prevState) => {
                            return {
                                ...prevState,
                                checkBoxWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setcheckboxData((prevState) => {
                            return {
                                ...prevState,
                                checkBoxWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setcheckboxData((prevState) => {
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
            if (field.name === CheckboxGroupFieldNames.CHECKBOX_OPTIONS) {
                setcheckboxData((prevState) => {
                    return {
                        ...prevState,
                        checkBoxoption: field.options as any[],
                    };
                });
            }
        });
    }, [component]);

    useEffect(() => {
        Height();
    }, [checkboxData.checkBoxoption]);

    const Height = () => {
        const divelement = document.querySelector('#checkboxGroup');

        if (divelement) {
            setcheckboxData((prevState) => {
                return {
                    ...prevState,
                    height: (divelement as HTMLElement).offsetHeight,
                };
            });
        }
    };

    const getScale = () => {
        let scale = 1;
        if (checkboxData.height && checkboxData.height > 220) {
            scale = 220 / checkboxData.height;
        } else {
            scale = 1;
        }
        return scale.toString();
    };

    if (isProperty) {
        return (
            <div
                id={checkboxData.checkBoxoption ? 'checkboxGroup' : ''}
                style={{
                    width: checkboxData.checkBoxWidth
                        ? checkboxData.checkBoxWidth
                        : undefined,
                    scale: checkboxData.checkBoxoption ? getScale() : '',
                }}
            >
                <CheckboxGroup
                    options={checkboxData?.checkBoxoption}
                    value={[
                        ...checkboxData?.checkBoxoption
                            .filter((option) => option.checked !== false)
                            .map((option) => option.value),
                    ]}
                />
            </div>
        );
    } else {
        return (
            <CheckboxGroup
                defaultValue={['blueberry']}
                options={[
                    {
                        label: 'Blueberry',
                        value: 'blueberry',
                    },
                    {
                        label: 'Apple',
                        value: 'apple',
                    },
                    {
                        label: 'Strawberry',
                        value: 'strawberry',
                    },
                ]}
            />
        );
    }
};

export default CheckboxGroupComponent;
