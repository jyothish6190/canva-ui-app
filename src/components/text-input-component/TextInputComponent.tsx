import React, { useEffect, useState } from 'react';
import { ClearIcon, TextInput, WordCountDecorator } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';

import styles from './TextInput.css';
import { Icon } from 'src/models/icons.model';
import { TextInputSearchFieldNames } from 'src/constants/component-configs/TextInputConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
};

type TextInputStateData = {
    inputText: string;
    startDecorator: Icon | undefined;
    endDecorator: any;
    endText: string;
    characterCount: number;
    inputWidth: number;
    textInputState: 'disabled' | 'error' | 'active' | 'hover' | 'default';
};

const initialState: TextInputStateData = {
    inputText: '',
    startDecorator: undefined,
    endDecorator: null,
    endText: 'EndText',
    characterCount: 0,
    inputWidth: 240,
    textInputState: 'default',
};

const TextInputComponent = ({ component, isProperty }: PropType) => {
    const [textInputData, setTextInputData] =
        useState<TextInputStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === TextInputSearchFieldNames.TEXT) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        inputText: field.value,
                    };
                });
            }
            if (field.name === TextInputSearchFieldNames.START_DECORATOR) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        startDecorator: field.value ? field.value : undefined,
                    };
                });
            }
            if (field.name === TextInputSearchFieldNames.END_DECORATOR) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        endDecorator: field.value,
                    };
                });
            }
            if (field.name === TextInputSearchFieldNames.END_TEXT) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        endText: field.value,
                    };
                });
            }
            if (field.name === TextInputSearchFieldNames.MAX_CHAR_COUNT) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        characterCount: field.value,
                    };
                });
            }
            if (field.name === TextInputSearchFieldNames.STATE) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        textInputState: field.value ? field.value : 'default',
                    };
                });
            }
            if (field.name === TextInputSearchFieldNames.WIDTH) {
                setTextInputData((prevState) => {
                    return {
                        ...prevState,
                        inputWidth: field.value ? field.value : undefined,
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
                return ClearIcon;
            case 'text':
                return textInputData.endText;
            case 'character count':
                return (
                    <WordCountDecorator max={textInputData.characterCount} />
                );
            default:
        }
    };

    if (isProperty) {
        return (
            <div style={{ width: textInputData.inputWidth + 'px' }}>
                <TextInput
                    disabled={
                        textInputData.textInputState === 'disabled'
                            ? true
                            : false
                    }
                    error={
                        textInputData.textInputState === 'error' ? true : false
                    }
                    placeholder={component.placeholder}
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
