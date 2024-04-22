import React from 'react';

import {
    FormField,
    MultilineInput,
    WordCountDecorator,
} from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import ExcessContainer from '../CommonComponents/excessContainer';

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
    if (isProperty) {
        return (
            <FormField
                label={component.name}
                control={(props) => (
                    <MultilineInput
                        value={component.value as string}
                        autoGrow
                        footer={
                            component.max ? (
                                <WordCountDecorator max={component.max} />
                            ) : null
                        }
                        minRows={1}
                        onChange={onChange}
                        placeholder={component.placeholder}
                    />
                )}
            />
        );
    }
    return (
        <ExcessContainer dynamic={'300px'}>
            <MultilineInput
                value={component.value as string}
                autoGrow
                minRows={2}
                onChange={onChange}
                placeholder={component.placeholder}
            />
        </ExcessContainer>
    );
};

export default MultilineInputComponent;
