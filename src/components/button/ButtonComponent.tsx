import React, { useEffect, useState } from 'react';
import { Button } from '@canva/app-ui-kit';

import styles from './Buttoncomponent.css';
import { Component } from 'src/models/component.model';
import { Variant } from '@canva/app-ui-kit/dist/cjs/ui/apps/developing/ui_kit/components/button/button';
import { ButtonFieldNames } from 'src/constants/component-configs/ButtonConfig';
import { Icon } from 'src/models/icons.model';
import { getIcon } from 'src/component-utils/ComponentUtils';

type PropType = {
    component: Component;
    isProperty: boolean;
};

const ButtonComponent = ({ component, isProperty }: PropType) => {
    const [variant, setVariant] = useState<Variant>('primary');
    const [showButton, setShowButton] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState('Button');
    const [icon, setIcon] = useState<Icon | undefined>(undefined);
    const [buttonState, setButtonState] = useState<
        'default' | 'loading' | 'disabled' | 'hover' | 'active'
    >('default');
    const [width, setWidth] = useState<string | undefined>(undefined);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === ButtonFieldNames.VARIANT) {
                setVariant(field.value);
            }
            if (field.name === ButtonFieldNames.TEXT) {
                setButtonText(field.value ? field.value : 'Button');
            }
            if (field.name === ButtonFieldNames.ICON_SELECTION) {
                setIcon(getIcon(field.value));
            }
            if (field.name === ButtonFieldNames.STATE) {
                setButtonState(field.value);
            }
            if (field.name === ButtonFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setWidth(`${field.max}px`);
                    } else if ((field.value as any) < field.min) {
                        setWidth(`${field.min}px`);
                    } else {
                        setWidth(field.value ? `${field.value}px` : undefined);
                    }
                }
            }
        });
        setShowButton(true);
    }, [component]);

    const renderedClass = () => {
        switch (`${buttonState}-${variant}`) {
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
            showButton && (
                <div
                    className={renderedClass()}
                    style={
                        width
                            ? { width: width, padding: '0.5px' }
                            : { width: undefined, padding: '0.5px' }
                    }
                >
                    <Button
                        key={component.name}
                        alignment="center"
                        stretch={true}
                        icon={icon?.Icon}
                        variant={variant}
                        loading={buttonState == 'loading' ? true : false}
                        disabled={buttonState == 'disabled' ? true : false}
                    >
                        {buttonText}
                    </Button>
                </div>
            )
        );
    }

    return (
        <Button key={component.name} alignment="center" variant="primary">
            {component.name}
        </Button>
    );
};

export default ButtonComponent;
