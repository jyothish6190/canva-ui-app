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
    inputWidth: number | undefined;
    inputState: 'default' | 'hover' | 'active' | 'error' | 'disabled';
    inputLabel: string | undefined;
    inputPlaceholder: string | undefined;
};

const initialState: MultilineInputStateData = {
    inputValue: undefined,
    inputLabel: undefined,
    maxCharacterCount: undefined,
    inputWidth: undefined,
    inputState: 'default',
    inputPlaceholder: undefined,
};

const MultilineInputComponent = ({ component, isProperty }: PropType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();
    const [multilineInputData, setMultilineInputData] =
        useState<MultilineInputStateData>(initialState);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const textarea = event.target;
            const cursorPos = textarea.selectionStart;
            const text = textarea.value;
            const newText =
                text.substring(0, cursorPos) + '\n' + text.substring(cursorPos);
            textarea.value = newText;
            textarea.setSelectionRange(cursorPos + 1, cursorPos + 1);
        }
    };

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
                        inputWidth: field.value || undefined,
                    };
                });
            }
            if (field.name === MultilineInputFieldNames.STATE) {
                setMultilineInputData((prevState) => {
                    return {
                        ...prevState,
                        inputState: field.value ? field.value : 'default',
                        inputLabel: ' ',
                    };
                });
            }
            if (field.name === MultilineInputFieldNames.PLACEHOLDER) {
                setMultilineInputData((prevState) => {
                    return {
                        ...prevState,
                        inputPlaceholder: field.value ? field.value : '   ',
                    };
                });
            }
        });
    }, [component]);

    const changeHandler = (value: string) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                console.log('value', value);
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
                    label={
                        multilineInputData.inputLabel
                            ? multilineInputData.inputLabel
                            : component.name
                    }
                    control={(props) => (
                        <MultilineInput
                            disabled={
                                multilineInputData.inputState === 'disabled'
                                    ? true
                                    : false
                            }
                            onKeyDown={handleKeyDown}
                            error={
                                multilineInputData.inputState === 'error'
                                    ? true
                                    : false
                            }
                            value={
                                component.value
                                    ? component.value
                                    : multilineInputData.inputValue
                            }
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
                            placeholder={
                                multilineInputData.inputPlaceholder
                                    ? multilineInputData.inputPlaceholder
                                    : component.placeholder
                            }
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
