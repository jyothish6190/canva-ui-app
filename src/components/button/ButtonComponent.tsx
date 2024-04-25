import React, { useEffect, useState } from 'react';
import { Button } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { Variant } from '@canva/app-ui-kit/dist/cjs/ui/apps/developing/ui_kit/components/button/button';
import { ButtonFieldNames } from 'src/constants/component-configs/ButtonConfig';
import { Icon } from 'src/models/icons.model';

type ButtonComponentType = {
    component: Component;
};

const ButtonComponent = ({ component }: ButtonComponentType) => {
    const [variant, setVariant] = useState<Variant>('primary');
    const [text, setText] = useState<string>('Button');
    const [icon, setIcon] = useState<Icon | undefined>(undefined);
    const [state, setState] = useState<string>('');
    const [width, setWidth] = useState<number>();

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === ButtonFieldNames.VARIANT) {
                setVariant(field.value ? field.value : 'primary');
            }
            if (field.name === ButtonFieldNames.TEXT) {
                setText(field.value ? field.value : 'Button');
            }
            if (field.name === ButtonFieldNames.ICON_SELECTION) {
                setIcon(field.value ? field.value : undefined);
            }
            if (field.name === ButtonFieldNames.STATE) {
                setState(field.value ? field.value : '');
            }
            if (field.name === ButtonFieldNames.WIDTH_OPTIONS) {
                setWidth(field.value ? field.value : 158);
            }
        });
    }, [component]);

    return (
        <div style={{ width: width }}>
            <Button
                key={component.name}
                alignment="center"
                stretch={true}
                icon={icon?.Icon}
                variant={variant}
                loading={state == 'loading' ? true : false}
                disabled={state == 'disabled' ? true : false}
            >
                {text}
            </Button>
        </div>
    );
};

export default ButtonComponent;
