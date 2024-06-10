import { RadioOption } from '@canva/app-ui-kit';
import { RadioConfigFieldNames } from 'src/constants/component-configs/RadioGroupConfig';
import { Component, OptionItem } from 'src/models/component.model';

export const getOptions = (component: Component) => {
    let options: RadioOption<string>[] = [];
    component.fields?.forEach((field: Component) => {
        if (field.name === RadioConfigFieldNames.RADIO_OPTIONS) {
            options = field.options as RadioOption<string>[];
        }
    });

    return options;
};

export const getValue = (component: Component) => {
    let value: string | undefined = undefined;
    component.fields?.forEach((field: Component) => {
        if (field.name === RadioConfigFieldNames.RADIO_OPTIONS) {
            field.options?.forEach((option: OptionItem) => {
                if (option.selected) {
                    value = option.value;
                }
            });
        }
    });
    console.log('🚀 ~ getValue ~ value:', value);
    return value;
};

export const getWidth = (component: Component) => {
    let width: string | undefined = '';
    component.fields?.forEach((field: Component) => {
        if (field.name === RadioConfigFieldNames.WIDTH) {
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

export const getScale = (height: number) => {
    let scale = 1;
    if (height && height > 220) {
        scale = 220 / height;
    } else {
        scale = 1;
    }
    return scale.toString();
};
