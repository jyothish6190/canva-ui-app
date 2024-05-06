import React, { useEffect, useState } from 'react';

import { CheckboxGroup } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { CheckboxGroupFieldNames } from 'src/constants/component-configs/CheckBoxGroupConfig';

type CheckBoxPropType = {
    component: Component;
    isProperty: boolean;
};

type CheckBoxStateData = {
    checkBoxWidth: number | undefined;
    checkBoxOptions: any[];
};

const initialState: CheckBoxStateData = {
    checkBoxWidth: undefined,
    checkBoxOptions: [],
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
                setcheckboxData((prevState) => {
                    return {
                        ...prevState,
                        checkBoxWidth: field.value || undefined,
                    };
                });
            }
            if (field.name === CheckboxGroupFieldNames.CHECKBOX_OPTIONS) {
                setcheckboxData((prevState) => {
                    return {
                        ...prevState,
                        checkBoxOptions: field.value,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                style={{
                    width: checkboxData.checkBoxWidth
                        ? checkboxData.checkBoxWidth
                        : undefined,
                }}
            >
                <CheckboxGroup
                    options={
                        checkboxData.checkBoxOptions
                            ? checkboxData.checkBoxOptions
                            : []
                    }
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
