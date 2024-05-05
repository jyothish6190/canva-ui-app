import { create } from 'zustand';

import { Component } from 'src/models/component.model';

import { ButtonFieldNames } from 'src/constants/component-configs/ButtonConfig';
import { IconButtonFieldNames } from 'src/constants/component-configs/IconButtonConfig';
import { PlaceHolderFieldNames } from 'src/constants/component-configs/PlaceholderComponentConfig';
import { ProgressBarFieldNames } from 'src/constants/component-configs/ProgressbarComponentConfig';
import { CheckBoxFieldNames } from 'src/constants/component-configs/CheckBoxConfig';
import { PillFieldNames } from 'src/constants/component-configs/PillConfig';
import { AlertFieldNames } from 'src/constants/component-configs/AlertConfig';
import { TextInputSearchFieldNames } from 'src/constants/component-configs/TextInputConfig';
import { SliderFieldNames } from 'src/constants/component-configs/SliderConfig';
import { TextFieldNames } from 'src/constants/component-configs/TextConfig';
import { SwitchFieldNames } from 'src/constants/component-configs/SwitchConfig';

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
                        field.value = undefined;
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
            break;
        case ProgressBarFieldNames.WIDTH_OPTIONS:
            newComponent.fields?.forEach((field: Component) => {
                if (field.name === ProgressBarFieldNames.WIDTH) {
                    field.value = value;
                }
            });
            break;

        case AlertFieldNames.WIDTH_OPTION:
            newComponent.fields?.forEach((field: Component) => {
                if (field.name === AlertFieldNames.WIDTH) {
                    field.value = value;
                }
            });
            break;
        case PillFieldNames.HUG_CONTENT:
            if (!value) {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === PillFieldNames.WIDTH) {
                        field.showComponent = true;
                        field.value = 158;
                    }
                    if (field.name === PillFieldNames.WIDTH_OPTIONS) {
                        field.showComponent = true;
                    }
                });
            } else {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === PillFieldNames.WIDTH) {
                        field.showComponent = false;
                    }
                    if (field.name === PillFieldNames.WIDTH_OPTIONS) {
                        field.showComponent = false;
                    }
                });
            }
            break;
        case PillFieldNames.WIDTH_OPTIONS:
            newComponent.fields?.forEach((field: Component) => {
                if (field.name === PillFieldNames.WIDTH) {
                    field.value = value;
                }
            });
            break;
        case TextFieldNames.VARIANT:
            if (value === 'bold') {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === TextFieldNames.SIZE) {
                        field.options = [
                            {
                                label: 'large',
                                value: 'large',
                            },

                            {
                                label: 'Medium',
                                value: 'medium',
                            },
                            {
                                label: 'Small',
                                value: 'small',
                            },
                        ];
                    }
                });
            } else if (value === 'regular') {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === TextFieldNames.SIZE) {
                        field.options = [
                            {
                                label: 'xlarge',
                                value: 'xlarge',
                            },
                            {
                                label: 'large',
                                value: 'large',
                            },

                            {
                                label: 'Medium',
                                value: 'medium',
                            },
                            {
                                label: 'Small',
                                value: 'small',
                            },
                            {
                                label: 'xsmall',
                                value: 'xsmall',
                            },
                        ];
                    }
                });
            }
            break;

        case SliderFieldNames.WIDTH_OPTIONS:
            newComponent.fields?.forEach((field: Component) => {
                if (field.name === SliderFieldNames.WIDTH) {
                    field.value = value;
                }
            });
            break;
        case SwitchFieldNames.LABEL:
            if (value === '') {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === SwitchFieldNames.WIDTH) {
                        field.showComponent = false;
                        field.value = undefined;
                    }
                    if (field.name === SwitchFieldNames.WIDTH_OPTIONS) {
                        field.showComponent = false;
                    }
                });
            } else {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === SwitchFieldNames.WIDTH) {
                        field.showComponent = true;
                        field.value = 328;
                    }
                    if (field.name === SwitchFieldNames.WIDTH_OPTIONS) {
                        field.showComponent = true;
                    }
                });
            }

            break;

        case TextInputSearchFieldNames.END_DECORATOR:
            if (value == 'text') {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === TextInputSearchFieldNames.END_TEXT) {
                        field.showComponent = true;
                    }
                });
            } else if (value == 'character count') {
                newComponent.fields?.forEach((field: Component) => {
                    if (
                        field.name === TextInputSearchFieldNames.MAX_CHAR_COUNT
                    ) {
                        field.showComponent = true;
                        field.value = 50;
                    }
                    if (field.name === TextInputSearchFieldNames.END_TEXT) {
                        field.showComponent = false;
                    }
                });
            } else {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === TextInputSearchFieldNames.END_TEXT) {
                        field.showComponent = false;
                    }
                    if (
                        field.name === TextInputSearchFieldNames.MAX_CHAR_COUNT
                    ) {
                        field.showComponent = false;
                    }
                });
            }
            break;
        default:
            break;
    }
    return newComponent;
};
