import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    TextInput,
    FormField,
    Button,
    ClearIcon,
    ChevronDownIcon,
} from '@canva/app-ui-kit';

import { useIconStore } from 'src/store/IconStore';
import { Component, OptionItem } from 'src/models/component.model';
import { useComponentStore } from 'src/store/ComponentStore';
import { iconChangeHandler } from './IconSelectionComponentUtils';
import { Icon } from 'src/models/icons.model';

type PropType = {
    component: Component;
    optionField?: OptionItem;
};

const IconSelectionComponent = ({ component, optionField }: PropType) => {
    const navigate = useNavigate();
    const { iconsList, setIconsList, deleteIcon } = useIconStore();
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    useEffect(() => {
        if (optionField) {
            const icon: Icon = {
                label: optionField.value,
                value: optionField.value,
                Icon: optionField.Icon as any,
            };

            setIconsList({
                icon: icon,
                componentId: component.name,
                optionId: optionField.key as string,
            });
        }
    }, [optionField]);

    const selectedIcon = useMemo(() => {
        return iconsList.find((iconObj) => {
            if (optionField) {
                if (iconObj.optionId == optionField.key) {
                    return true;
                }
            } else {
                if (iconObj.componentId == component.name) {
                    return true;
                }
            }
        });
    }, [iconsList]);

    useEffect(() => {
        if (selectedIcon && selectedIcon.icon) {
            const updatedComponent = iconChangeHandler(
                selectedComponent as Component,
                component,
                selectedIcon.icon,
                optionField
            );
            setSelectedComponent({ ...updatedComponent });
        }
    }, [selectedIcon?.icon]);

    const onFocusHandler = (event) => {
        selectedIcon?.icon && deleteIcon(selectedIcon.componentId);
        navigate('/icons', {
            state: {
                path: 'iconSelector',
                componentId: component.name,
                optionId: optionField ? optionField.key : undefined,
            },
        });
    };
    const clearSelectInput = () => {
        return selectedIcon ? (
            <Button
                variant="tertiary"
                icon={ClearIcon}
                onClick={() => {
                    deleteIcon(selectedIcon?.componentId);
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
                            optionId: optionField ? optionField.key : undefined,
                        },
                    });
                }}
            />
        );
    };

    return (
        <FormField
            label={''}
            control={(props) => (
                <TextInput
                    key={selectedIcon?.icon?.label || ''}
                    type="text"
                    placeholder={'Select an icon'}
                    value={selectedIcon?.icon?.label || ''}
                    start={selectedIcon?.icon.Icon || ''}
                    end={clearSelectInput}
                    onFocus={(event) => onFocusHandler(event)}
                />
            )}
        />
    );
};
export default IconSelectionComponent;
