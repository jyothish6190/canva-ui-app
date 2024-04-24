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

    const { selectedIcons, deleteSelectedIcon } = useIconStore();

    const selectedObject = selectedIcons.find(
        (obj) => obj.componentId == component.name
    );

    const clearSelectInput = () => {
        return selectedObject ? (
            <Button
                variant="tertiary"
                icon={ClearIcon}
                onClick={() => {
                    deleteSelectedIcon(selectedObject.componentId);
                }}
            />
        ) : (
            <Button
                variant="tertiary"
                icon={ChevronDownIcon}
                onClick={() => {
                    navigate('/icons', {
                        state: {
                            path: 'iconSelector',
                            componentId: component.name,
                        },
                    });
                }}
            />
        );
    };

    return (
        <FormField
            label={component.name}
            control={(props) => (
                <TextInput
                    key={selectedObject?.selectedIcon?.label}
                    type="text"
                    placeholder={'Select an icon'}
                    value={selectedObject?.selectedIcon?.label || ''}
                    start={selectedObject?.selectedIcon.Icon || ''}
                    end={clearSelectInput}
                    onFocus={() => {
                        navigate('/icons', {
                            state: {
                                path: 'iconSelector',
                                componentId: component.name,
                            },
                        });
                    }}
                />
            )}
        />
    );
};
export default IconSelctionComponent;
