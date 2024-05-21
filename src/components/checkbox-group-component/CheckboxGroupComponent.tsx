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
};

const initialState: CheckBoxStateData = {
    checkBoxWidth: undefined,
    checkBoxoption: [],
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

    if (isProperty) {
        return (
            <div
                style={
                    checkboxData.checkBoxWidth
                        ? {
                              width: checkboxData.checkBoxWidth,
                          }
                        : {}
                }
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
