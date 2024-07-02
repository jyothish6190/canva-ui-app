import React, { useEffect, useState } from 'react';
import {
    CharacterCountDecorator,
    ClearDecorator,
    ClearIcon,
    Text,
    TextInput,
    WordCountDecorator,
} from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';

import styles from './TextInput.css';
import { Icon } from 'src/models/icons.model';
import { TextInputFieldNames } from './TextInputConfig';
import { getIcon } from 'src/component-utils/ComponentUtils';
import { getErrorState } from '../form-select-component/FormSelectComponentUtils';

type PropType = {
    component: Component;
    isProperty: boolean;
};

type TextInputStateData = {
    inputText: string;
    inputPlaceHolder: string;
    startDecorator: Icon | undefined;
    endDecorator: any;
    endText: string;
    characterCount: number;
    inputWidth: string | undefined;
    textInputState: 'disabled' | 'error' | 'active' | 'hover' | 'default';
};

const initialState: TextInputStateData = {
    inputText: '',
    inputPlaceHolder: '',
    startDecorator: undefined,
    endDecorator: null,
    endText: 'EndText',
    characterCount: 0,
    inputWidth: '240 px',
    textInputState: 'default',
};

const TextInputComponent = ({ component, isProperty }: PropType) => {
    const [textInputData, setTextInputData] =
        useState<TextInputStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === TextInputFieldNames.TEXT) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        inputText: field.value,
                    };
                });
            }
            if (field.name === TextInputFieldNames.START_DECORATOR) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        startDecorator: field.value
                            ? getIcon(field.value)
                            : undefined,
                    };
                });
            }
            if (field.name === TextInputFieldNames.END_DECORATOR) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        endDecorator: field.value,
                    };
                });
            }
            if (field.name === TextInputFieldNames.END_TEXT) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        endText: field.value,
                    };
                });
            }
            if (field.name === TextInputFieldNames.MAX_CHAR_COUNT) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        characterCount: field.value,
                    };
                });
            }
            if (field.name === TextInputFieldNames.STATE) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        textInputState: field.value ? field.value : 'default',
                    };
                });
            }
            if (field.name === TextInputFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setTextInputData((prevState) => {
                            return {
                                ...prevState,
                                inputWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setTextInputData((prevState) => {
                            return {
                                ...prevState,
                                inputWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setTextInputData((prevState) => {
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
            if (field.name === TextInputFieldNames.PLACEHOLDER) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        inputPlaceHolder: field.value || '  ',
                    };
                });
            }
        });
    }, [component]);

    const endRenderingComponent = () => {
        switch (textInputData.endDecorator) {
            case 'none':
                return null;
            case 'clear':
                return <ClearDecorator />;
            case 'text':
                return (
                    <div className={styles['End-text']}>
                        <Text
                            tone="tertiary"
                            size="small"
                            variant="regular"
                            children={textInputData.endText}
                        />
                    </div>
                );
            case 'character count':
                return (
                    <CharacterCountDecorator
                        max={textInputData.characterCount}
                    />
                );
            default:
        }
    };
    const renderedClass = () => {
        switch (textInputData.textInputState) {
            case 'hover':
                return styles['Input-hover'];
                break;
            case 'active':
                return styles['Input-active'];
                break;
            default:
                return '';
                break;
        }
    };

    if (isProperty) {
        return (
            <div
                className={`${renderedClass()} ${styles['text-input']}`}
                style={{ width: textInputData.inputWidth }}
            >
                <TextInput
                    disabled={
                        textInputData.textInputState === 'disabled'
                            ? true
                            : false
                    }
                    error={
                        textInputData.textInputState === 'error' ||
                        getErrorState(component)
                            ? true
                            : false
                    }
                    placeholder={
                        textInputData.inputPlaceHolder
                            ? textInputData.inputPlaceHolder
                            : component.placeholder
                    }
                    type={'text'}
                    value={textInputData.inputText}
                    start={textInputData.startDecorator?.Icon}
                    end={endRenderingComponent()}
                />
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <TextInput placeholder={component.placeholder} type={'text'} />
        </div>
    );
};

export default TextInputComponent;
