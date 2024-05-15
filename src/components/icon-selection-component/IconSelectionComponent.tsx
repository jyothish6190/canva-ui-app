import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    TextInput,
    FormField,
    Button,
    ClearIcon,
    ChevronDownIcon,
    SelectOption,
} from '@canva/app-ui-kit';
import { useIconStore } from 'src/store/IconStore';
import { Component } from 'src/models/component.model';
import { useComponentStore } from 'src/store/ComponentStore';
type PropType = {
    component: Component;
    optionField?: SelectOption<string>;
    setIconData?: React.Dispatch<React.SetStateAction<any>>;
};
const IconSelctionComponent = ({
    component,
    optionField,
    setIconData,
}: PropType) => {
    const navigate = useNavigate();
    const { iconsList, deleteIcon } = useIconStore();
    const { selectedComponent, setSelectedComponent } = useComponentStore();
    const selectedIcon = useMemo(() => {
        return iconsList.find((iconObj) => {
            if (optionField) {
                if (iconObj.componentId == optionField.description) {
                    selectedComponent?.fields?.forEach((field: Component) => {
                        if (field.name === component.name) {
                            field.value = iconObj.icon;
                        }
                        return;
                    });
                    return true;
                }
            } else {
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
            }
        });
    }, [iconsList]);
    useEffect(() => {
        changeHandler;
    }, [selectedIcon?.icon]);
    const changeHandler = () => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (optionField) {
                if (optionField.description === selectedIcon?.componentId) {
                    if (field.name === component.name) {
                        field.value = selectedIcon?.icon;
                    }
                    return;
                }
            } else {
                if (field.name === component.name) {
                    field.value = selectedIcon?.icon;
                }
                setSelectedComponent({ ...selectedComponent });
                return;
            }
        });
    };
    const onFocusHandler = (event) => {
        selectedIcon?.icon && deleteIcon(selectedIcon.componentId);
        navigate('/icons', {
            state: {
                path: 'iconSelector',
                componentId: optionField
                    ? optionField.description
                    : component.name,
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
                            componentId: optionField
                                ? optionField.label
                                : component.name,
                        },
                    });
                }}
            />
        );
    };
    return (
        <FormField
            label={optionField?.label ? '' : component.name}
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
export default IconSelctionComponent;
