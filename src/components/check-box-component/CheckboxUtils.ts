import { CheckBoxFieldNames } from 'src/constants/component-configs/CheckBoxConfig';
import { Component } from 'src/models/component.model';

export const getLabel = (component: Component) => {
    let label = 'Checkbox';
    component.fields?.forEach((field: Component) => {
        if (field.name === CheckBoxFieldNames.CHECKBOX_LABEL) {
            label = field.value;
        }
    });
    return label;
};

export const getState = (component: Component) => {
    let state: 'default' | 'hover' | 'pressed' | 'disabled' | 'error' =
        'default';
    component.fields?.forEach((field: Component) => {
        if (field.name === CheckBoxFieldNames.STATE) {
            state = field.value;
        }
    });
    return state;
};

export const getSelectedState = (component: Component) => {
    let selected = false;
    component.fields?.forEach((field: Component) => {
        if (field.name === CheckBoxFieldNames.CHECKED) {
            selected = field.value;
        }
    });
    return selected;
};

export const getWidth = (component: Component) => {
    let width: string | undefined = undefined;
    component.fields?.forEach((field: Component) => {
        if (field.name === CheckBoxFieldNames.WIDTH) {
            if (field.max !== undefined && field.min !== undefined) {
                if ((field.value as any) > field.max) {
                    width = `${field.max}px`;
                } else if ((field.value as any) < field.min) {
                    width = `${field.min}px`;
                } else {
                    width = field.value ? `${field.value}px` : undefined;
                }
            }
        }
    });
    return width;
};
