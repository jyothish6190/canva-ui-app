import React, { useEffect, useState } from 'react';
import { FormField, Text } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { TextFieldNames } from 'src/constants/component-configs/TextConfig';
import { TypographySize } from '@canva/app-ui-kit/dist/cjs/ui/apps/developing/ui_kit/components/typography/typography';

type PropsType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};
type TextStateData = {
    inputText: string;
    textSize: TypographySize;
    textVarient: 'regular' | 'bold';
    textTone: 'primary' | 'secondary' | 'tertiary' | 'critical';
    textAlignment: 'center' | 'end' | 'inherit' | 'start';
};

const initialState: TextStateData = {
    inputText: 'Example Title',
    textSize: 'medium',
    textVarient: 'regular',
    textTone: 'primary',
    textAlignment: 'start',
};

const TextComponent = ({ component, isProperty }: PropsType) => {
    const [textState, setTextState] = useState<TextStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === TextFieldNames.TEXT) {
                setTextState((prevState) => {
                    return {
                        ...prevState,
                        inputText: field.value ? field.value : 'Example Title',
                    };
                });
            }
            if (field.name === TextFieldNames.SIZE) {
                setTextState((prevState) => {
                    return {
                        ...prevState,
                        textSize: field.value ? field.value : 'medium',
                    };
                });
            }
            if (field.name === TextFieldNames.VARIANT) {
                setTextState((prevState) => {
                    return {
                        ...prevState,
                        textVarient: field.value ? field.value : 'regular',
                    };
                });
            }
            if (field.name === TextFieldNames.TONE) {
                setTextState((prevState) => {
                    return {
                        ...prevState,
                        textTone: field.value ? field.value : 'primary',
                    };
                });
            }
            if (field.name === TextFieldNames.ALIGNMENT) {
                setTextState((prevState) => {
                    return {
                        ...prevState,
                        textAlignment: field.value ? field.value : 'center',
                    };
                });
            }
        });
    }, [component]);
    const inputText = textState.inputText.split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));

    if (isProperty) {
        return (
            <Text
                size={textState.textSize}
                variant={textState.textVarient as any}
                tone={textState.textTone}
                alignment={textState.textAlignment}
            >
                {inputText}
            </Text>
        );
    } else {
        return <Text>{component.name}</Text>;
    }
};

export default TextComponent;
