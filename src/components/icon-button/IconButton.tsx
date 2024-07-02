import React, { useEffect, useState } from 'react';
import { Button, InfoIcon } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { Variant } from '@canva/app-ui-kit/dist/cjs/ui/apps/developing/ui_kit/components/button/button';

import styles from './IconButton.css';
import { Icon } from 'src/models/icons.model';
import { IconButtonFieldNames } from 'src/constants/component-configs/IconButtonConfig';
import { useIconStore } from 'src/store/IconStore';
import { getIcon } from 'src/component-utils/ComponentUtils';

type IconIconButtonComponentType = {
    component: Component;
    isProperty: boolean;
};

type IconButtonStateData = {
    buttonVariant: Variant;
    buttonState: 'default' | 'hover' | 'active' | 'loading' | 'disabled';
    buttonWidth: string | undefined;
};

const initialState: IconButtonStateData = {
    buttonVariant: 'primary',
    buttonState: 'default',
    buttonWidth: undefined,
};

const IconButton = ({ component, isProperty }: IconIconButtonComponentType) => {
    console.log('🚀 ~ IconButton ~ component:', component);
    const { setIconsList } = useIconStore();

    const [IconButtonState, setIconButtonState] =
        useState<IconButtonStateData>(initialState);

    const [icon, setIcon] = useState<Icon | undefined>(undefined);

    useEffect(() => {
        IconButtonState.buttonState === undefined;
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
                setIcon(getIcon(field.value));
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
    const renderedClass = () => {
        switch (
            `${IconButtonState.buttonState}-${IconButtonState.buttonVariant}`
        ) {
            case 'hover-primary':
                return styles['Hover-button'];
                break;
            case 'hover-secondary':
                return styles['Hover-button-secondary'];
                break;
            case 'hover-tertiary':
                return styles['Hover-button-tertiary'];
                break;
            case 'active-primary':
                return styles['Active-button'];
                break;
            case 'active-secondary':
                return styles['Active-button-secondary'];
                break;
            case 'active-tertiary':
                return styles['Active-button-tertiary'];
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
                style={{
                    width: IconButtonState.buttonWidth,
                    padding: '0.5px',
                }}
            >
                <Button
                    variant={IconButtonState.buttonVariant}
                    stretch={IconButtonState.buttonWidth ? true : false}
                    icon={icon ? icon?.Icon : InfoIcon}
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
