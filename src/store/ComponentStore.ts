import { create } from 'zustand';

import { Component } from 'src/models/component.model';

import { ButtonFieldNames } from 'src/constants/component-configs/ButtonConfig';
import { IconButtonFieldNames } from 'src/constants/component-configs/IconButtonConfig';
import { PlaceHolderFieldNames } from 'src/constants/component-configs/PlaceholderComponentConfig';
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
        case IconButtonFieldNames.HUG_CONTENT:
            if (!value) {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === IconButtonFieldNames.WIDTH) {
                        field.showComponent = true;
                        field.value = 158;
                    }
                    if (field.name === IconButtonFieldNames.WIDTH_OPTIONS) {
                        field.showComponent = true;
                    }
                });
            } else {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === IconButtonFieldNames.WIDTH) {
                        field.showComponent = false;
                    }
                    if (field.name === IconButtonFieldNames.WIDTH_OPTIONS) {
                        field.showComponent = false;
                    }
                });
            }
            break;
        case IconButtonFieldNames.WIDTH_OPTIONS:
            newComponent.fields?.forEach((field: Component) => {
                if (field.name === IconButtonFieldNames.WIDTH) {
                    field.value = value;
                }
            });
            break;

        case PlaceHolderFieldNames.STYLE:
            if (value === 'shape') {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === PlaceHolderFieldNames.HEIGHT) {
                        field.showComponent = true;
                        field.value = 96;
                    }
                    if (field.name === PlaceHolderFieldNames.SHAPE) {
                        field.showComponent = true;
                    }
                    if (field.name === PlaceHolderFieldNames.SIZE) {
                        field.showComponent = false;
                    }
                    if (field.name === PlaceHolderFieldNames.WIDTH) {
                        field.value = 96;
                    }
                });
            } else {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === PlaceHolderFieldNames.HEIGHT) {
                        field.showComponent = false;
                    }
                    if (field.name === PlaceHolderFieldNames.SHAPE) {
                        field.showComponent = false;
                    }
                    if (field.name === PlaceHolderFieldNames.SIZE) {
                        field.showComponent = true;
                        field.value = 'medium';
                    }
                    if (field.name === PlaceHolderFieldNames.WIDTH) {
                        field.value = 296;
                    }
                });
            }
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
