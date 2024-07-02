import React, { useEffect, useState } from 'react';
import {
    Placeholder,
    TextPlaceholder,
    TitlePlaceholder,
} from '@canva/app-ui-kit';
import { Component } from 'src/models/component.model';
import { PlaceHolderFieldNames } from 'src/constants/component-configs/PlaceholderComponentConfig';
import styles from './PlaceholderComponent.css';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: any) => void;
};

type PlaceholderStateData = {
    placeholderStyle: 'text' | 'title' | 'shape';
    placeholderShape: 'circle' | 'square' | 'rectangle' | 'sharpRectangle';
    placeHolderSize: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
    placeholderWidth: string;
    placeholderHeight: string;
};

const initialState: PlaceholderStateData = {
    placeholderStyle: 'text',
    placeholderShape: 'circle',
    placeHolderSize: 'medium',
    placeholderWidth: ' 96 px',
    placeholderHeight: '96 px',
};

const PlaceholderComponent = ({ component, isProperty }: PropType) => {
    const [placeholderState, setPlaceholderState] =
        useState<PlaceholderStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === PlaceHolderFieldNames.STYLE) {
                setPlaceholderState((prevState) => {
                    return {
                        ...prevState,
                        placeholderStyle: field.value || 'text',
                    };
                });
            }
            if (field.name === PlaceHolderFieldNames.SHAPE) {
                setPlaceholderState((prevState) => {
                    return {
                        ...prevState,
                        placeholderShape: field.value || 'circle',
                    };
                });
            }
            if (field.name === PlaceHolderFieldNames.SIZE) {
                setPlaceholderState((prevState) => {
                    return {
                        ...prevState,
                        placeHolderSize: field.value || 'medium',
                    };
                });
            }
            if (field.name === PlaceHolderFieldNames.HEIGHT) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setPlaceholderState((prevState) => {
                            return {
                                ...prevState,
                                placeholderHeight: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setPlaceholderState((prevState) => {
                            return {
                                ...prevState,
                                placeholderHeight: `${field.min}px`,
                            };
                        });
                    } else {
                        setPlaceholderState((prevState) => {
                            return {
                                ...prevState,
                                placeholderHeight: `${field.value}px`,
                            };
                        });
                    }
                }
            }
            if (field.name === PlaceHolderFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setPlaceholderState((prevState) => {
                            return {
                                ...prevState,
                                placeholderWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setPlaceholderState((prevState) => {
                            return {
                                ...prevState,
                                placeholderWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setPlaceholderState((prevState) => {
                            return {
                                ...prevState,
                                placeholderWidth: `${field.value}px`,
                            };
                        });
                    }
                }
            }
        });
    }, [component]);

    const renderPlaceHolderComponent = () => {
        switch (placeholderState.placeholderStyle) {
            case 'text':
                return (
                    <div className={styles['placeholder']}>
                        <TextPlaceholder
                            size={placeholderState.placeHolderSize}
                        />
                    </div>
                );

            case 'title':
                return (
                    <div className={styles['placeholder']}>
                        <TitlePlaceholder
                            size={placeholderState.placeHolderSize}
                        />
                    </div>
                );

            case 'shape':
                return (
                    <Placeholder shape={placeholderState.placeholderShape} />
                );

            default:
                break;
        }
    };

    if (isProperty) {
        return (
            <div
                style={{
                    width: placeholderState.placeholderWidth,
                    height:
                        placeholderState.placeholderStyle === 'shape'
                            ? placeholderState.placeholderHeight
                            : undefined,
                }}
            >
                {renderPlaceHolderComponent()}
            </div>
        );
    }
    return (
        <div style={{ width: 11 + 'rem' }}>
            <TextPlaceholder size="small" />
            <TextPlaceholder size="small" />
            <div style={{ width: 70 + '%' }}>
                <TextPlaceholder size="small" />
            </div>
        </div>
    );
};

export default PlaceholderComponent;
