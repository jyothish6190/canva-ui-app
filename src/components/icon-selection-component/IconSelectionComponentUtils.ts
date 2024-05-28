import { Component, OptionItem } from 'src/models/component.model';
import { IconType } from 'src/store/IconStore';

export const iconChangeHandler = (
    selectedComponent: Component,
    component: Component,
    icon: IconType,
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
    icon: IconType
): Component => {
    let newComponent = { ...selectedComponent };

    newComponent.fields?.forEach((field: Component) => {
        if (field.name === component.name) {
            field.options?.forEach((option) => {
                if (option.key === selectedOption.key) {
                    option.label = icon.icon as any;
                }
            });
        }
    });

    return newComponent;
};

const componentIconChangeHandler = (
    selectedComponent: Component,
    component: Component,
    icon: IconType
): Component => {
    let newComponent = { ...selectedComponent };

    newComponent.fields?.forEach((field) => {
        if (field.name === component.name) {
            field.value = icon?.icon;
        }
    });
    return newComponent;
};
