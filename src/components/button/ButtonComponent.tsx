import React, { useEffect, useState } from 'react';
import { Button } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { Variant } from '@canva/app-ui-kit/dist/cjs/ui/apps/developing/ui_kit/components/button/button';
import { ButtonFieldNames } from 'src/constants/component-configs/ButtonConfig';
import { Icon } from 'src/models/icons.model';

type PropType = {
    component: Component;
    isProperty: boolean;
};

const ButtonComponent = ({ component, isProperty }: PropType) => {
    const [variant, setVariant] = useState<Variant>('primary');
    const [buttonText, setButtonText] = useState('Button');
    const [icon, setIcon] = useState<Icon | undefined>(undefined);
    const [buttonState, setButtonState] = useState<
        'default' | 'loading' | 'disabled'
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
                setIcon(field.value);
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
    }, [component]);

    if (isProperty) {
        return (
            <div style={width ? { width: width } : { width: undefined }}>
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
        );
    }

    return (
        <Button key={component.name} alignment="center" variant="primary">
            {component.name}
        </Button>
    );
};

export default ButtonComponent;
