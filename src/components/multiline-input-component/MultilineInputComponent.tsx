import React from 'react';

import {
    FormField,
    MultilineInput,
    WordCountDecorator,
} from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import ExcessContainer from '../CommonComponents/excessContainer';
import { useComponentStore } from 'src/store/ComponentStore';

type PropType = {
    component: Component;
    isProperty: boolean;
};

const MultilineInputComponent = ({ component, isProperty }: PropType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const changeHandler = (value: string) => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = value;
            }
            setSelectedComponent({ ...selectedComponent });
            return;
        });
    };

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
                        onChange={changeHandler}
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
                placeholder={component.placeholder}
            />
        </ExcessContainer>
    );
};

export default MultilineInputComponent;
