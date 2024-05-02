import { create } from 'zustand';
import { Component } from 'src/models/component.model';
import { ButtonFieldNames } from 'src/constants/component-configs/ButtonConfig';
import { ProgressBarFieldNames } from 'src/constants/component-configs/ProgressbarComponentConfig';

type PropType = {
    selectedComponent: Component | undefined;
    setSelectedComponent: (component: Component) => void;
    setComponentField: (
        field: Component,
        value: string | number | boolean
    ) => void;
};

export const useComponentStore = create<PropType>((set) => ({
    selectedComponent: undefined,
    setSelectedComponent: (component: Component) =>
        set({ selectedComponent: component }),
    setComponentField: (field: Component, value: string | number | boolean) =>
        set((state) => ({
            selectedComponent: updateField(
                state.selectedComponent as Component,
                field,
                value
            ),
        })),
}));

const updateField = (
    component: Component,
    field: Component,
    value: string | number | boolean
) => {
    let newComponent = { ...component };
    switch (field.name) {
        case ButtonFieldNames.HUG_CONTENT:
            if (!value) {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === ButtonFieldNames.WIDTH) {
                        field.showComponent = true;
                        field.value = 158;
                    }
                    if (field.name === ButtonFieldNames.WIDTH_OPTIONS) {
                        field.showComponent = true;
                    }
                });
            } else {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === ButtonFieldNames.WIDTH) {
                        field.showComponent = false;
                    }
                    if (field.name === ButtonFieldNames.WIDTH_OPTIONS) {
                        field.showComponent = false;
                    }
                });
            }
            break;
        case ButtonFieldNames.WIDTH_OPTIONS:
            newComponent.fields?.forEach((field: Component) => {
                if (field.name === ButtonFieldNames.WIDTH) {
                    field.value = value;
                }
            });
            break;
        case ProgressBarFieldNames.WIDTH_OPTIONS:
            newComponent.fields?.forEach((field: Component) => {
                if (field.name === ProgressBarFieldNames.WIDTH) {
                    field.value = value;
                }
            });
            break;
        default:
            break;
    }
    return newComponent;
};
