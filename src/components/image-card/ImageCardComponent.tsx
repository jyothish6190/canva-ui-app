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
    cardHeight: number;
    cardWidth: number;
};

const initialState: ImageStateData = {
    cardBoderRadius: 'none',
    cardHeight: 160,
    cardWidth: 160,
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
                setImageCardState((prevState) => {
                    return {
                        ...prevState,
                        cardWidth: field.value || 160,
                    };
                });
            }
            if (field.name === ImageCardFieldNames.HEIGHT) {
                setImageCardState((prevState) => {
                    return {
                        ...prevState,
                        cardHeight: field.value || 160,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                style={{
                    width: imageCardState.cardWidth + 'px',
                    height: imageCardState.cardHeight + 'px',
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
