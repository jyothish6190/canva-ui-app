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

const IconIconButton = ({
    component,
    isProperty,
}: IconIconButtonComponentType) => {
    const [buttonVariant, setbuttonVariant] = useState<Variant>('primary');
    const [buttonIcon, setbuttonIcon] = useState<Icon | undefined>(undefined);
    const [buttonState, setbuttonState] = useState<
        'default' | 'hover' | 'active' | 'loading' | 'disabled'
    >('default');

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === IconButtonFieldNames.VARIANT) {
                setbuttonVariant(field.value ? field.value : 'primary');
            }

            if (field.name === IconButtonFieldNames.ICON_SELECTION) {
                setbuttonIcon(field.value ? field.value : undefined);
            }
            if (field.name === IconButtonFieldNames.STATE) {
                setbuttonState(field.value ? field.value : '');
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div>
                <Button
                    variant={buttonVariant}
                    icon={buttonIcon?.Icon || InfoIcon}
                    key={component.name}
                    alignment="center"
                    loading={buttonState == 'loading' ? true : false}
                    disabled={buttonState == 'disabled' ? true : false}
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

export default IconIconButton;
