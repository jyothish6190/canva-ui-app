import React, { useEffect, useState } from 'react';
import { TypographyCard, Text } from '@canva/app-ui-kit';

import styles from './TypographyComponent.css';
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
    cardWidth: string;
};

const initialState: typographyStateData = {
    cardText: 'The quick brown fox',
    cardState: 'default',
    cardWidth: '296 px',
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
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setTypographyState((prevState) => {
                            return {
                                ...prevState,
                                cardWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setTypographyState((prevState) => {
                            return {
                                ...prevState,
                                cardWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setTypographyState((prevState) => {
                            return {
                                ...prevState,
                                cardWidth: `${field.value}px`,
                            };
                        });
                    }
                }
            }
        });
    }, [component]);

    const renderedClass = () => {
        switch (typographyState.cardState) {
            case 'hover':
                return styles['Typography-active'];
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
                style={{ width: typographyState.cardWidth }}
            >
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
