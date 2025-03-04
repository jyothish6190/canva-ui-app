import React, { useEffect, useState } from 'react';
import { Swatch } from '@canva/app-ui-kit';
import { Component } from 'src/models/component.model';
import { SwatchFieldnames } from 'src/constants/component-configs/SwatchConfig';
import styles from './SwatchComponent.css';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

type SwatchStateData = {
    swatchColor: string | undefined;
    swatchVariant: 'solid' | 'outline';
    activeState: boolean;
};
const initialState: SwatchStateData = {
    swatchColor: '#E0D9FC',
    swatchVariant: 'solid',
    activeState: false,
};

const SwatchComponent = ({ component, isProperty, onChange }: PropType) => {
    const [swatchData, setSwatchData] = useState<SwatchStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === SwatchFieldnames.COLOR_PICKER) {
                setSwatchData((prevState) => {
                    return {
                        ...prevState,
                        swatchColor: field.value || initialState.swatchColor,
                    };
                });
            }

            if (field.name === SwatchFieldnames.VARIANT) {
                setSwatchData((prevState) => {
                    return {
                        ...prevState,
                        swatchVariant:
                            field.value || initialState.swatchVariant,
                    };
                });
            }
            if (field.name === SwatchFieldnames.ACTIVE) {
                setSwatchData((prevState) => {
                    return {
                        ...prevState,
                        activeState: field.value || initialState.activeState,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                className={`${styles['swatch-component']} ${
                    swatchData.activeState && styles['swatch-component-active']
                }`}
            >
                <Swatch
                    fill={[swatchData.swatchColor]}
                    onClick={() => {}}
                    variant={swatchData.swatchVariant}
                    active={swatchData.activeState}
                />
            </div>
        );
    } else {
        return (
            <Swatch
                fill={['#cfb9fa']}
                onClick={() => {}}
                size="small"
                variant="solid"
            />
        );
    }
};

export default SwatchComponent;
