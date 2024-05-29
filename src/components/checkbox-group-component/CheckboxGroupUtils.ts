import { CheckboxOption } from '@canva/app-ui-kit';

import { CheckboxGroupFieldNames } from 'src/constants/component-configs/CheckBoxGroupConfig';
import { Component } from 'src/models/component.model';

export const getOptions = (component: Component) => {
    let options: CheckboxOption<string>[] = [];
    component.fields?.forEach((field: Component) => {
        if (field.name === CheckboxGroupFieldNames.CHECKBOX_OPTIONS) {
            options = field.options as CheckboxOption<string>[];
        }
    });
    return options;
};

export const getSelectedOptions = (component: Component) => {
    const selectedOptions: string[] = [];
    component.fields?.forEach((field: Component) => {
        if (field.name === CheckboxGroupFieldNames.CHECKBOX_OPTIONS) {
            field.options?.forEach((option) => {
                if (option.selected) {
                    selectedOptions.push(option.value);
                }
            });
        }
    });
    return selectedOptions;
};

export const getWidth = (component: Component) => {
    let width: string | undefined = undefined;
    component.fields?.forEach((field: Component) => {
        if (field.name === CheckboxGroupFieldNames.WIDTH) {
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
