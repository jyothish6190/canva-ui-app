import React, { useEffect, useState } from 'react';

import {
    CharacterCountDecorator,
    FormField,
    MultilineInput,
    Title,
} from '@canva/app-ui-kit';

import styles from './MultilineInputComponent.css';
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
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setMultilineInputData((prevState) => {
                            return {
                                ...prevState,
                                inputWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setMultilineInputData((prevState) => {
                            return {
                                ...prevState,
                                inputWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setMultilineInputData((prevState) => {
                            return {
                                ...prevState,
                                inputWidth: field.value
                                    ? `${field.value}px`
                                    : undefined,
                            };
                        });
                    }
                }
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
                field.value = value;
            }
            setSelectedComponent(
                { ...selectedComponent },
                'MultilineInputComponent'
            );
            return;
        });
    };

    const renderedClass = () => {
        switch (multilineInputData.inputState) {
            case 'hover':
                return styles['Multiline-hover'];
                break;
            case 'active':
                return styles['Multiline-active'];
                break;
            default:
                return '';
                break;
        }
    };

    if (isProperty) {
        return (
            <div
                className={renderedClass()}
                style={{ width: multilineInputData.inputWidth }}
            >
                <FormField
                    label={
                        (multilineInputData.inputLabel ? (
                            (undefined as any)
                        ) : (
                            <Title children={component.name} size="xsmall" />
                        )) as any
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
                                    <CharacterCountDecorator
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
