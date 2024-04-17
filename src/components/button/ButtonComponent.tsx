import React from 'react';
import { Button } from '@canva/app-ui-kit';

import { Component } from 'src/models/coponent.model';

type ButtonComponentType = {
    component: Component;
};

const ButtonComponent = ({ component }: ButtonComponentType) => {
    return (
        <Button key={component.name} alignment="center" variant="primary">
            {component.name}
        </Button>
    );
};

export default ButtonComponent;
