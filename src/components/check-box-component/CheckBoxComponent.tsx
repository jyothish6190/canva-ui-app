import React from 'react';

import { Checkbox } from '@canva/app-ui-kit';

import { Component } from 'src/models/coponent.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

const CheckBoxComponent = ({ component, isProperty, onChange }: PropType) => {
    return <Checkbox checked={component.defaultValue} label={component.name} />;
};
export default CheckBoxComponent;
