import React, { useEffect, useState } from 'react';
import { Button } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { Variant } from '@canva/app-ui-kit/dist/cjs/ui/apps/developing/ui_kit/components/button/button';

type ButtonComponentType = {
    component: Component;
};

const ButtonComponent = ({ component }: ButtonComponentType) => {
    const [variant, setVariant] = useState<Variant>('primary');

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === 'Variant') {
                setVariant(field.value ? field.value : 'primary');
            }
        });
    }, [component]);
    return (
        <Button key={component.name} alignment="center" variant={variant}>
            {component.name}
        </Button>
    );
};

export default ButtonComponent;
