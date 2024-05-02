import React, { useEffect, useState } from 'react';
import { Button, InfoIcon } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { Variant } from '@canva/app-ui-kit/dist/cjs/ui/apps/developing/ui_kit/components/button/button';

import styles from './IconButton.css';
import { Icon } from 'src/models/icons.model';
import { IconButtonFieldNames } from 'src/constants/component-configs/IconButtonConfig';

type IconIconButtonComponentType = {
    component: Component;
    isProperty: boolean;
};

type IconButtonStateData = {
    buttonVariant: Variant;
    buttonIcon: Icon | undefined;
    buttonState: 'default' | 'hover' | 'active' | 'loading' | 'disabled';
    buttonWidth: number | undefined;
};

const initialState: IconButtonStateData = {
    buttonVariant: 'primary',
    buttonIcon: undefined,
    buttonState: 'default',
    buttonWidth: undefined,
};

const IconButton = ({ component, isProperty }: IconIconButtonComponentType) => {
    const [IconButtonState, setIconButtonState] =
        useState<IconButtonStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === IconButtonFieldNames.VARIANT) {
                setIconButtonState((prevState) => {
                    return {
                        ...prevState,
                        buttonVariant: field.value ? field.value : 'primary',
                    };
                });
            }

            if (field.name === IconButtonFieldNames.ICON_SELECTION) {
                setIconButtonState((prevState) => {
                    return {
                        ...prevState,
                        buttonIcon: field.value ? field.value : InfoIcon,
                    };
                });
            }
            if (field.name === IconButtonFieldNames.STATE) {
                setIconButtonState((prevState) => {
                    return {
                        ...prevState,
                        buttonState: field.value ? field.value : 'default',
                    };
                });
            }
            if (field.name === IconButtonFieldNames.WIDTH) {
                setIconButtonState((prevState) => {
                    return {
                        ...prevState,
                        buttonWidth: field.value ? field.value : 100,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div style={{ width: IconButtonState.buttonWidth }}>
                <Button
                    variant={IconButtonState.buttonVariant}
                    stretch={true}
                    icon={IconButtonState.buttonIcon?.Icon || InfoIcon}
                    key={component.name}
                    alignment="center"
                    loading={
                        IconButtonState.buttonState == 'loading' ? true : false
                    }
                    disabled={
                        IconButtonState.buttonState == 'disabled' ? true : false
                    }
                ></Button>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <InfoIcon />
        </div>
    );
};

export default IconButton;
