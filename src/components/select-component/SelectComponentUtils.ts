import { components } from 'src/constants/components';
import { SelectOption } from '@canva/app-ui-kit';
import { Component, OptionItem } from 'src/models/component.model';
import { FormFieldNames } from '../form-field-component/FormFieldConfig';
import { SelectFieldNames } from './SelectConfig';
import { SelectState } from './SelectComponent';
import { TextFieldNames } from 'src/constants/component-configs/TextConfig';

export const getValue = (component: Component) => {
    let value = '';
    if (component.fields) {
        component.fields?.forEach((field: Component) => {
            if (field.name === SelectFieldNames.SELECT_OPTIONS) {
                field.options?.forEach((option: OptionItem) => {
                    if (option.selected) {
                        value = option.value;
                    }
                });
            }
        });

        return value;
    } else {
        return component.value ? component.value : '';
    }
};

export const getSelectedValue = (component: Component) => {
    let value = '';
    component.fields?.forEach((field: Component) => {
        if (field.name === SelectFieldNames.PLACEHOLDER) {
            value = field.value;
        }
    });

    return value;
};

export const getOptions = (component: Component) => {
    let options: SelectOption<string>[] = [];
    if (component.fields) {
        component.fields?.forEach((field: Component) => {
            if (field.name === SelectFieldNames.SELECT_OPTIONS) {
                field.options?.forEach((option: OptionItem) => {
                    if (option.selected) {
                        options = [
                            ...(field.options as SelectOption<string>[]),
                        ];
                    }
                });
            }
        });
    } else {
        options = component.options as SelectOption<string>[];
    }
    return options;
};

export const getActive = (component: Component) => {
    let state: boolean = false;
    component.fields?.forEach((field: Component) => {
        if (field.name === SelectFieldNames.ACTIVE) {
            state = field.value;
        }
    });

    return state;
};

export const getState = (component: Component) => {
    let state: SelectState = 'default';
    component.fields?.forEach((field: Component) => {
        if (field.name === SelectFieldNames.STATE) {
            state = field.value;
        }
    });

    return state;
};

export const getLabel = (component: Component) => {
    let label = ' ';
    if (!component.fields) {
        label = component.name;
    }
    return label;
};

export const getPlaceholder = (component: Component) => {
    let placholder = '';
    component.fields?.forEach((field: Component) => {
        if (field.name === SelectFieldNames.PLACEHOLDER) {
            placholder = field.value || ' ';
        }
    });
    return placholder;
};

export const getWidth = (component: Component) => {
    let width: string | undefined = '';
    component.fields?.forEach((field: Component) => {
        if (field.name === SelectFieldNames.WIDTH) {
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

export const selectOptionChangeHandler = (
    selectedComponent: Component,
    component: Component,
    value: string
) => {
    let updatedComponent;
    selectedComponent?.fields?.forEach((field: Component) => {
        if (field.name === FormFieldNames.CONTROL) {
            updatedComponent = switchFormComponent(value);
        } else {
            updatedComponent = updateSelectComponent(
                selectedComponent,
                component,
                value
            );
        }
    });

    return updatedComponent;
};

const switchFormComponent = (value: string): Component => {
    let newComponent;
    components.forEach((component) => {
        if (component.name === value) {
            newComponent = { ...component };
        }
    });

    return newComponent;
};
const updateSelectComponent = (
    selectedComponent: Component,
    component: Component,
    value: any
): Component => {
    const newComponent = { ...selectedComponent };
    newComponent?.fields?.forEach((field: Component) => {
        if (field.name === component.name) {
            field.value = value;
        }
    });
    return newComponent;
};
