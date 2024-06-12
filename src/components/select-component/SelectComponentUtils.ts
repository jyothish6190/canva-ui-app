import { SelectOption } from '@canva/app-ui-kit';
import { Component, OptionItem } from 'src/models/component.model';
import {
    FormControlNames,
    FormFieldNames,
    FormTabs,
} from '../form-field-component/FormFieldConfig';
import { SelectFieldNames } from './SelectConfig';
import { SelectState } from './SelectComponent';
import { TextFieldNames } from 'src/constants/component-configs/TextConfig';

import { FormMultilineConfig } from '../form-field-component/FormMultilineConfig';
import { FormNumberInputConfig } from '../form-field-component/FormNumberInputConfig';
import { FormSelectTabs } from '../form-field-component/FormSelectConfig';
import { FormCheckboxConfig } from '../form-field-component/FormCheckboxConfig';
import { FormCheckboxGroupConfig } from '../form-field-component/FormCheckboxGroupConfig';
import { FormRadioGroupConfig } from '../form-field-component/FormRadioGroupConfig';
import { FormSegmentedConfig } from '../form-field-component/FormSegementedConfig';
import { TextInputFieldNames } from '../text-input-component/TextInputConfig';
import { PlaceHolderFieldNames } from 'src/constants/component-configs/PlaceholderComponentConfig';

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
                    if (option) {
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
            updatedComponent = switchFormComponent(selectedComponent, value);
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

const switchFormComponent = (
    selectedComponent: Component,
    value: string
): Component => {
    console.log('🚀 switchFormComponent~ value:', value);

    let newComponent = { ...selectedComponent };
    let fields = newComponent.fields;
    let tabs = FormTabs;
    switch (value) {
        case FormControlNames.FORM_MULTILINE_INPUT:
            fields = [...FormMultilineConfig];
            break;

        case FormControlNames.FORM_NUMBER_INPUT:
            fields = [...FormNumberInputConfig];
            break;

        case FormControlNames.FORM_NUMBER_INPUT:
            fields = [...FormNumberInputConfig];
            break;

        case FormControlNames.FORM_SELECT:
            fields = [...FormNumberInputConfig];
            tabs = [...FormSelectTabs];
            break;

        case FormControlNames.FORM_CHECKBOX_FIELD:
            fields = [...FormCheckboxConfig];
            break;

        case FormControlNames.FORM_CHECKBOX_GROUP:
            fields = [...FormCheckboxGroupConfig];
            break;
        case FormControlNames.FORM_RADIO:
            fields = [...FormRadioGroupConfig];
            break;

        case FormControlNames.FORM_SEGMENTED_CONTROL:
            fields = [...FormSegmentedConfig];
            break;

        default:
            break;
    }
    newComponent.fields = fields;
    newComponent.tabs = tabs;
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
        if (field.name === TextInputFieldNames.END_TEXT) {
            if (value == 'text') {
                field.showComponent = true;
                field.value = 'End Text';
            } else {
                field.showComponent = false;
            }
        }
        if (field.name === TextInputFieldNames.MAX_CHAR_COUNT) {
            if (value == 'character count') {
                field.showComponent = true;
                field.value = 50;
            } else {
                field.showComponent = false;
            }
        }
        if (field.name == PlaceHolderFieldNames.WIDTH) {
            if (value === 'rectangle') {
                field.value = 140;
            } else if (value === 'sharpRectangle') {
                field.value = 140;
            }
        }
    });
    return newComponent;
};
