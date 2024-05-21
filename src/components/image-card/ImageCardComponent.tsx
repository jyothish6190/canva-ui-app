import React, { useEffect, useState } from 'react';
import { ImageCard } from '@canva/app-ui-kit';

import styles from './ImageCard.css';
import { Component } from 'src/models/component.model';
import { ImageCardFieldNames } from 'src/constants/component-configs/ImageCardConfig';

type ImagePropType = {
    component: Component;
    isProperty: boolean;
};

type ImageStateData = {
    cardBoderRadius: 'none' | 'standard';
    cardHeight: string;
    cardWidth: string;
};

const initialState: ImageStateData = {
    cardBoderRadius: 'none',
    cardHeight: '160 px',
    cardWidth: '160 px',
};

const ImageCardComponent = ({ component, isProperty }: ImagePropType) => {
    const [imageCardState, setImageCardState] =
        useState<ImageStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === ImageCardFieldNames.ROUNDED_CORNER) {
                setImageCardState((prevState) => {
                    return {
                        ...prevState,
                        cardBoderRadius: field.value,
                    };
                });
            }
            if (field.name === ImageCardFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setImageCardState((prevState) => {
                            return {
                                ...prevState,
                                cardWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setImageCardState((prevState) => {
                            return {
                                ...prevState,
                                cardWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setImageCardState((prevState) => {
                            return {
                                ...prevState,
                                cardWidth: `${field.value}px`,
                            };
                        });
                    }
                }
            }
            if (field.name === ImageCardFieldNames.HEIGHT) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setImageCardState((prevState) => {
                            return {
                                ...prevState,
                                cardHeight: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setImageCardState((prevState) => {
                            return {
                                ...prevState,
                                cardHeight: `${field.min}px`,
                            };
                        });
                    } else {
                        setImageCardState((prevState) => {
                            return {
                                ...prevState,
                                cardHeight: `${field.value}px`,
                            };
                        });
                    }
                }
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                style={{
                    width: imageCardState.cardWidth,
                    height: imageCardState.cardHeight,
                }}
            >
                <ImageCard
                    alt="grass image"
                    ariaLabel="Add image to design"
                    borderRadius={imageCardState.cardBoderRadius}
                    onClick={() => {}}
                    onDragStart={() => {}}
                    thumbnailUrl={require('assets/images/default.png')}
                />
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
                <ImageCard
                    alt="grass image"
                    ariaLabel="Add image to design"
                    borderRadius="standard"
                    onClick={() => {}}
                    onDragStart={() => {}}
                    thumbnailUrl={require('assets/images/default.png')}
                />
            </div>
        );
    }
};

export default ImageCardComponent;
