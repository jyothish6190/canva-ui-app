import { Component, OptionItem } from 'src/models/component.model';
import { Icon } from 'src/models/icons.model';
import { IconType } from 'src/store/IconStore';

export const iconChangeHandler = (
    selectedComponent: Component,
    component: Component,
    icon: Icon | undefined,
    option?: OptionItem
): Component => {
    if (option) {
        return optionIconChangeHandler(
            selectedComponent,
            component,
            option,
            icon
        );
    } else {
        return componentIconChangeHandler(selectedComponent, component, icon);
    }
};

const optionIconChangeHandler = (
    selectedComponent: Component,
    component: Component,
    selectedOption: OptionItem,
    icon: Icon | undefined
): Component => {
    let newComponent = { ...selectedComponent };
    newComponent.fields?.forEach((field: Component) => {
        if (field.name === component.name) {
            field.options?.forEach((option) => {
                if (option.key === selectedOption.key) {
                    option.Icon = icon ? (icon.Icon as any) : undefined;
                    option.label = undefined;
                    option.value = icon
                        ? icon.label + '-' + option.key
                        : '-' + option.key;
                }
            });
        }
    });

    return newComponent;
};

export const componentIconChangeHandler = (
    selectedComponent: Component,
    component: Component,
    icon: Icon | undefined
): Component => {
    let newComponent = { ...selectedComponent };

    newComponent.fields?.forEach((field) => {
        if (field.name === component.name) {
            field.value = icon ? icon : undefined;
        }
    });
    return newComponent;
};
