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
import {
    componentIconChangeHandler,
    iconChangeHandler,
} from './IconSelectionComponentUtils';
import { Icon } from 'src/models/icons.model';
import { getIcon } from 'src/component-utils/ComponentUtils';

type PropType = {
    component: Component;
    optionField?: OptionItem;
};

const IconSelectionComponent = ({ component, optionField }: PropType) => {
    console.log(
        '🚀 ~ IconSelectionComponent ~ component, optionField:',
        component,
        optionField
    );
    const navigate = useNavigate();
    const { iconsList, setIconsList, deleteIcon } = useIconStore();
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    useEffect(() => {
        if (optionField) {
            const icon = getIcon(optionField.Icon as string);

            setIconsList({
                icon: icon as Icon,
                componentId: component.name,
                optionId: optionField.key as string,
            });
        } else if (component.value) {
            const icon = getIcon(component.value as string);

            setIconsList({
                icon: icon as Icon,
                componentId: component.name,
                optionId: undefined,
            });
        }
    }, [optionField]);

    const selectedIcon = useMemo(() => {
        return iconsList.find((iconObj) => {
            if (optionField) {
                if (iconObj.optionId == optionField.key && iconObj.icon) {
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
        const iconFound = { ...selectedIcon };
        if (optionField) {
            const updatedComponent = iconChangeHandler(
                selectedComponent as Component,
                component,
                iconFound ? iconFound.icon : undefined,
                optionField
            );
            setSelectedComponent(
                { ...updatedComponent },
                'IconSelectionComponent'
            );
        } else {
            const updatedComponent = componentIconChangeHandler(
                selectedComponent as Component,
                component,
                iconFound ? iconFound.icon : undefined
            );
            setSelectedComponent(
                { ...updatedComponent },
                'IconSelectionComponent'
            );
        }
    }, [selectedIcon]);

    const onFocusHandler = (event) => {
        selectedIcon?.icon &&
            deleteIcon(selectedIcon.componentId, optionField?.key as any);
        navigate('/icons', {
            state: {
                path: 'iconSelector',
                componentId: component.name,
                optionId: optionField ? optionField.key : undefined,
                component: component,
            },
        });
    };
    const clearSelectInput = () => {
        return selectedIcon ? (
            <Button
                variant="tertiary"
                icon={ClearIcon}
                onClick={() => {
                    deleteIcon(
                        selectedIcon?.componentId,
                        optionField?.key as any
                    );
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
            label={optionField ? (undefined as any) : component.name}
            control={(props) => (
                <TextInput
                    key={selectedIcon?.icon?.label || ''}
                    type="text"
                    placeholder={'Select an icon'}
                    value={selectedIcon?.icon?.label || ''}
                    start={selectedIcon?.icon?.Icon || ''}
                    end={clearSelectInput}
                    onFocus={(event) => onFocusHandler(event)}
                />
            )}
        />
    );
};
export default IconSelectionComponent;
