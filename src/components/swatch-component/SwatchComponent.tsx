import React, { useEffect, useState } from 'react';
import { Swatch } from '@canva/app-ui-kit';
import { Component } from 'src/models/component.model';
import { SwatchFieldnames } from 'src/constants/component-configs/SwatchConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

type SwatchStateData = {
    swatchColor: string | undefined;
    swatchSize: 'xsmall' | 'small';
    swatchVariant: 'solid' | 'outline';
    activeState: boolean;
};
const initialState: SwatchStateData = {
    swatchColor: '#E0D9FC',
    swatchSize: 'small',
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
                console.log('color', field.value);
            }

            if (field.name === SwatchFieldnames.SIZE) {
                setSwatchData((prevState) => {
                    return {
                        ...prevState,
                        swatchSize: field.value || 'small',
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
            <Swatch
                fill={[swatchData.swatchColor]}
                onClick={() => {}}
                size={swatchData.swatchSize}
                variant={swatchData.swatchVariant}
                active={swatchData.activeState}
            />
        );
    } else {
        return (
            <Swatch
                fill={['#E0D9FC']}
                onClick={() => {}}
                size="small"
                variant="solid"
            />
        );
    }
};

export default SwatchComponent;
