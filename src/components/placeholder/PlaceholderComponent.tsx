import React, { useEffect, useState } from 'react';
import {
    Placeholder,
    TextPlaceholder,
    TitlePlaceholder,
} from '@canva/app-ui-kit';
import { Component } from 'src/models/component.model';
import { PlaceHolderFieldNames } from 'src/constants/component-configs/PlaceholderComponentConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: any) => void;
};

type PlaceholderStateData = {
    placeholderStyle: 'text' | 'title' | 'shape';
    placeholderShape: 'circle' | 'square' | 'rectangle' | 'sharpRectangle';
    placeHolderSize: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
    placeholderWidth: number;
    placeholderHeight: number;
};

const initialState: PlaceholderStateData = {
    placeholderStyle: 'text',
    placeholderShape: 'circle',
    placeHolderSize: 'medium',
    placeholderWidth: 96,
    placeholderHeight: 96,
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
                setPlaceholderState((prevState) => {
                    return {
                        ...prevState,
                        placeholderHeight: field.value,
                    };
                });
            }
            if (field.name === PlaceHolderFieldNames.WIDTH) {
                setPlaceholderState((prevState) => {
                    return {
                        ...prevState,
                        placeholderWidth: field.value,
                    };
                });
            }
        });
    }, [component]);

    const renderPlaceHolderComponent = () => {
        switch (placeholderState.placeholderStyle) {
            case 'text':
                return (
                    <TextPlaceholder size={placeholderState.placeHolderSize} />
                );

            case 'title':
                return (
                    <TitlePlaceholder size={placeholderState.placeHolderSize} />
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
                    width: placeholderState.placeholderWidth + 'px',
                    height:
                        placeholderState.placeholderStyle === 'shape'
                            ? placeholderState.placeholderHeight + 'px'
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
