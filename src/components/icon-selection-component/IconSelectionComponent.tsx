import React, { useMemo } from 'react';
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
import { useComponentStore } from 'src/store/ComponentStore';

type PropType = {
    component: Component;
};

const IconSelctionComponent = ({ component }: PropType) => {
    const navigate = useNavigate();

    const { iconsList, deleteIcon } = useIconStore();
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const selectedIcon = useMemo(() => {
        return iconsList.find((iconObj) => {
            if (iconObj.componentId == component.name) {
                selectedComponent?.fields?.forEach((field: Component) => {
                    if (field.name === component.name) {
                        field.value = iconObj.icon;
                    }
                    setSelectedComponent({ ...selectedComponent });
                    return;
                });
                return true;
            }
        });
    }, []);

    const clearSelectInput = () => {
        return selectedIcon ? (
            <Button
                variant="tertiary"
                icon={ClearIcon}
                onClick={() => {
                    deleteIcon(selectedIcon.componentId);
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
                    key={selectedIcon?.icon?.label}
                    type="text"
                    placeholder={'Select an icon'}
                    value={selectedIcon?.icon?.label || ''}
                    start={selectedIcon?.icon.Icon || ''}
                    end={clearSelectInput}
                    onFocus={(event) => {
                        console.log(
                            '🚀 ~ IconSelctionComponent ~ event:',
                            event
                        );
                        selectedIcon?.icon &&
                            deleteIcon(selectedIcon.componentId);
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
