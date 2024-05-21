import React, { useEffect, useState } from 'react';
import { Button, InfoIcon } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { Variant } from '@canva/app-ui-kit/dist/cjs/ui/apps/developing/ui_kit/components/button/button';

import styles from './IconButton.css';
import { Icon } from 'src/models/icons.model';
import { IconButtonFieldNames } from 'src/constants/component-configs/IconButtonConfig';
import { useIconStore } from 'src/store/IconStore';

type IconIconButtonComponentType = {
    component: Component;
    isProperty: boolean;
};

type IconButtonStateData = {
    buttonVariant: Variant;
    buttonIcon: Icon | undefined;
    buttonState: 'default' | 'hover' | 'active' | 'loading' | 'disabled';
    buttonWidth: string | undefined;
};

const initialState: IconButtonStateData = {
    buttonVariant: 'primary',
    buttonIcon: undefined,
    buttonState: 'default',
    buttonWidth: undefined,
};

const IconButton = ({ component, isProperty }: IconIconButtonComponentType) => {
    const { setIconsList } = useIconStore();

    const [IconButtonState, setIconButtonState] =
        useState<IconButtonStateData>(initialState);

    useEffect(() => {
        IconButtonState.buttonState === undefined;
        setIconsList({
            icon: {
                value: 'info-icon',
                label: 'Info',
                Icon: InfoIcon,
            },
            componentId: 'Icon ',
        });
    }, []);
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
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setIconButtonState((prevState) => {
                            return {
                                ...prevState,
                                buttonWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setIconButtonState((prevState) => {
                            return {
                                ...prevState,
                                buttonWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setIconButtonState((prevState) => {
                            return {
                                ...prevState,
                                buttonWidth: field.value
                                    ? `${field.value}px`
                                    : undefined,
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
                    width: IconButtonState.buttonWidth,
                }}
            >
                <Button
                    variant={IconButtonState.buttonVariant}
                    stretch={IconButtonState.buttonWidth ? true : false}
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
    return <Button variant="primary" icon={InfoIcon} />;
};

export default IconButton;
