import React, { useEffect, useState } from 'react';
import { TypographyCard, Text } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';
import { Component } from 'src/models/component.model';
import { TypographyFiledNames } from 'src/constants/component-configs/TypographyConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: any) => void;
};

type typographyStateData = {
    cardText: string;
    cardState: 'default' | 'hover';
    cardWidth: number;
};

const initialState: typographyStateData = {
    cardText: 'The quick brown fox',
    cardState: 'default',
    cardWidth: 296,
};

const TypographyComponent = ({ component, isProperty, onChange }: PropType) => {
    const [typographyState, setTypographyState] =
        useState<typographyStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === TypographyFiledNames.TEXT) {
                setTypographyState((prevState) => {
                    return {
                        ...prevState,
                        cardText: field.value || 'The quick brown fox',
                    };
                });
            }
            if (field.name === TypographyFiledNames.STATE) {
                setTypographyState((prevState) => {
                    return {
                        ...prevState,
                        cardState: field.value || 'default',
                    };
                });
            }
            if (field.name === TypographyFiledNames.WIDTH) {
                setTypographyState((prevState) => {
                    return {
                        ...prevState,
                        cardWidth: field.value || 296,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div style={{ width: typographyState.cardWidth + 'px' }}>
                <TypographyCard onClick={() => {}} ariaLabel="">
                    <Text lineClamp={1}>{typographyState.cardText}</Text>
                </TypographyCard>
            </div>
        );
    }
    return (
        <ExcessContainer dynamic="300px">
            <TypographyCard onClick={() => {}} ariaLabel="">
                <Text lineClamp={1}>The quick brown fox jumps</Text>
            </TypographyCard>
        </ExcessContainer>
    );
};

export default TypographyComponent;
