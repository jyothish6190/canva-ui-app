import React from 'react';
import { FormField, Select } from '@canva/app-ui-kit';

import { Component } from 'src/models/coponent.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: any) => void;
};

const SelectComponent = ({ component, isProperty, onChange }: PropType) => {
    if (isProperty) {
        return (
            <FormField
                label={component.name}
                control={(props) => (
                    <Select
                        options={component.options as any[]}
                        stretch={true}
                        placeholder={component.placeholder}
                        onChange={onChange}
                        value={component.defaultValue}
                    />
                )}
            />
        );
    }
    return (
        <div
            style={{
                position: 'relative',
                width: 128,
                height: 128,
            }}
        >
            <Select options={[{ label: 'Option 1', value: '1' }]} />

            <img
                src={require('assets/images/select.png')}
                alt="Image 2"
                style={{
                    position: 'absolute',
                    bottom: -15,
                    right: -25,
                }}
            />
        </div>
    );
};

export default SelectComponent;
