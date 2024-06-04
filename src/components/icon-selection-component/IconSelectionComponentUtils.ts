import { Component, OptionItem } from 'src/models/component.model';
import { Icon } from 'src/models/icons.model';
import { IconType } from 'src/store/IconStore';

export const iconChangeHandler = (
    selectedComponent: Component,
    component: Component,
    icon: Icon,
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
    icon: Icon
): Component => {
    let newComponent = { ...selectedComponent };

    newComponent.fields?.forEach((field: Component) => {
        if (field.name === component.name) {
            console.log('🚀 ~ newComponent.fields?.forEach ~ field:', field);

            field.options?.forEach((option) => {
                if (option.key === selectedOption.key) {
                    option.Icon = icon.Icon as any;
                    option.label = undefined;
                    option.value = icon.value;
                }
            });
        }
    });

    console.log('🚀 optionIconChangeHandler ~ newComponent:', newComponent);
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
            field.value = icon;
        }
    });
    return newComponent;
};
