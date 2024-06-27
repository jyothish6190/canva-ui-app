import React, { useEffect, useState } from 'react';

import { Title } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { TitleFieldNames } from './TitleConfig';

type TitleProps = {
    component: Component;
    isProperty: boolean;
};

type TitleStateData = {
    tilteText: string;
    titleTone: 'primary' | 'secondary' | 'tertiary' | 'critical';
    titleSize: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
    titleAlignment: 'center' | 'end' | 'start';
};

const initialState: TitleStateData = {
    tilteText: 'Example title',
    titleTone: 'primary',
    titleSize: 'medium',
    titleAlignment: 'center',
};

const TitleComponent = ({ component, isProperty }: TitleProps) => {
    const [titleState, setTitleState] = useState<TitleStateData>(initialState);

    useEffect(() => {
        component?.fields?.forEach((field: Component) => {
            if (field.name === TitleFieldNames.TEXT) {
                setTitleState((prevState) => {
                    return {
                        ...prevState,
                        tilteText: field?.value || 'Example title',
                    };
                });
            }
            if (field.name === TitleFieldNames.SIZE) {
                setTitleState((prevState) => {
                    return {
                        ...prevState,
                        titleSize: field?.value || prevState.titleSize,
                    };
                });
            }
            if (field.name === TitleFieldNames.TONE) {
                setTitleState((prevState) => {
                    return {
                        ...prevState,
                        titleTone: field?.value || prevState.titleTone,
                    };
                });
            }
            if (field.name === TitleFieldNames.ALIGNMENT) {
                setTitleState((prevState) => {
                    return {
                        ...prevState,
                        titleAlignment:
                            field?.value || prevState.titleAlignment,
                    };
                });
            }
        });
    }, [component]);
    const inputText = titleState.tilteText.split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));
    if (isProperty) {
        return (
            <Title
                size={titleState.titleSize}
                tone={titleState.titleTone}
                alignment={titleState.titleAlignment}
            >
                {inputText}
            </Title>
        );
    } else {
        return <Title size="large">Title</Title>;
    }
};

export default TitleComponent;
