import React, { useEffect, useState } from 'react';

import {
    FormField,
    MultilineInput,
    WordCountDecorator,
} from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import ExcessContainer from '../CommonComponents/excessContainer';
import { useComponentStore } from 'src/store/ComponentStore';
import { MultilineInputFieldNames } from 'src/constants/component-configs/MultiLineInputConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
};

type MultilineInputStateData = {
    inputValue: string | undefined;
    maxCharacterCount: number | undefined;
    inputWidth: string | undefined;
    inputState: 'default' | 'hover' | 'active' | 'error' | 'disabled';
    inputLabel: string | undefined;
};

const initialState: MultilineInputStateData = {
    inputValue: undefined,
    inputLabel: undefined,
    maxCharacterCount: undefined,
    inputWidth: undefined,
    inputState: 'default',
};

const MultilineInputComponent = ({ component, isProperty }: PropType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();
    const [multilineInputData, setMultilineInputData] =
        useState<MultilineInputStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === MultilineInputFieldNames.TEXT) {
                setMultilineInputData((prevState) => {
                    return {
                        ...prevState,
                        inputValue: field.value,
                    };
                });
            }
            if (field.name === MultilineInputFieldNames.MAX_CHAR_COUNT) {
                setMultilineInputData((prevState) => {
                    return {
                        ...prevState,
                        maxCharacterCount: field.value
                            ? field.value
                            : undefined,
                    };
                });
            }
            if (field.name === MultilineInputFieldNames.WIDTH) {
                setMultilineInputData((prevState) => {
                    return {
                        ...prevState,
                        inputWidth: field.value as string,
                    };
                });
            }
            if (field.name === MultilineInputFieldNames.STATE) {
                setMultilineInputData((prevState) => {
                    return {
                        ...prevState,
                        inputState: field.value ? field.value : 'default',
                    };
                });
            }
        });
        setMultilineInputData((prevState) => {
            return {
                ...prevState,
                inputLabel: '',
            };
        });
    }, [component]);

    const changeHandler = (value: string) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = value;
            }
            setSelectedComponent({ ...selectedComponent });
            return;
        });
    };

    if (isProperty) {
        return (
            <div style={{ width: multilineInputData.inputWidth + 'px' }}>
                <FormField
                    label={component.name}
                    control={(props) => (
                        <MultilineInput
                            disabled={
                                multilineInputData.inputState === 'disabled'
                                    ? true
                                    : false
                            }
                            error={
                                multilineInputData.inputState === 'error'
                                    ? true
                                    : false
                            }
                            value={multilineInputData.inputValue}
                            autoGrow
                            footer={
                                multilineInputData.maxCharacterCount ? (
                                    <WordCountDecorator
                                        max={
                                            multilineInputData.maxCharacterCount
                                        }
                                    />
                                ) : null
                            }
                            minRows={1}
                            onChange={changeHandler}
                            placeholder={component.placeholder}
                        />
                    )}
                />
            </div>
        );
    }
    return (
        <ExcessContainer dynamic={'300px'}>
            <MultilineInput
                value={component.value as string}
                autoGrow
                minRows={2}
                placeholder={component.placeholder}
            />
        </ExcessContainer>
    );
};

export default MultilineInputComponent;
