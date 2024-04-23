import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    TextInput,
    FormField,
    Button,
    ClearIcon,
    ChevronDownIcon,
} from '@canva/app-ui-kit';

import { useIconStore } from 'src/store/IconStore';
import { Component } from 'src/models/component.model';

type PropType = {
    component: Component;
};

const IconSelctionComponent = ({ component }: PropType) => {
    const navigate = useNavigate();

    const { selectedIcon, setSelectedIcon } = useIconStore();

    const clearSelectInput = () => {
        return selectedIcon ? (
            <Button
                variant="tertiary"
                icon={ClearIcon}
                onClick={() => {
                    setSelectedIcon(undefined);
                }}
            />
        ) : (
            <Button
                variant="tertiary"
                icon={ChevronDownIcon}
                onClick={() => {
                    navigate('/icons');
                }}
            />
        );
    };

    return (
        <FormField
            label={component.name}
            control={(props) => (
                <TextInput
                    type="text"
                    placeholder={'Select an icon'}
                    value={selectedIcon?.label || ''}
                    start={selectedIcon?.Icon}
                    end={clearSelectInput}
                />
            )}
        />
    );
};
export default IconSelctionComponent;
