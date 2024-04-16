import React from 'react';
import { FormField, SegmentedControl } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';

import { Component } from 'src/models/coponent.model';

type PropsType = {
    component: Component;
    isProperty: boolean;
    onChange?: (selectedOption: string) => void;
};

const SegmentedControlComponent = ({
    component,
    isProperty,
    onChange,
}: PropsType) => {
    if (isProperty) {
        return (
            <FormField
                label={component.name}
                description=""
                control={(props) => (
                    <SegmentedControl
                        options={component.options as any[]}
                        defaultValue={component.defaultValue}
                        onChange={onChange}
                    />
                )}
            />
        );
    }

    return (
        <ExcessContainer dynamic="140px">
            <SegmentedControl
                options={component.options as any[]}
                defaultValue={component.defaultValue}
            />
        </ExcessContainer>
    );
};

export default SegmentedControlComponent;
