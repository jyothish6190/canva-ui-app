import React from 'react';
import { FormField, MultilineInput } from '@canva/app-ui-kit';

import { Component } from 'src/models/coponent.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: string) => void;
};

const MultilineInputComponent = ({
    component,
    isProperty,
    onChange,
}: PropType) => {
    return (
        <FormField
            label={component.name}
            control={(props) => (
                <MultilineInput
                    value={component.value as string}
                    autoGrow
                    minRows={3}
                    onChange={onChange}
                    placeholder={component.placeholder}
                />
            )}
        />
    );
};

export default MultilineInputComponent;
