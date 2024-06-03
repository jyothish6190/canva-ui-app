import { create } from 'zustand';

import { Component } from 'src/models/component.model';

import { ButtonFieldNames } from 'src/constants/component-configs/ButtonConfig';
import { IconButtonFieldNames } from 'src/constants/component-configs/IconButtonConfig';
import { ProgressBarFieldNames } from 'src/constants/component-configs/ProgressbarComponentConfig';
import { PillFieldNames } from 'src/constants/component-configs/PillConfig';
import { AlertFieldNames } from 'src/constants/component-configs/AlertConfig';
import { SliderFieldNames } from 'src/constants/component-configs/SliderConfig';
import { SwitchFieldNames } from 'src/constants/component-configs/SwitchConfig';
import { FileInputFieldNames } from 'src/constants/component-configs/FileInputConfig';

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
        case ButtonFieldNames.WIDTH:
            newComponent.fields?.forEach((field: Component) => {
                if (field.name === ButtonFieldNames.WIDTH_OPTIONS) {
                    let valueExists = false;
                    field.options?.forEach((item) => {
                        if (item.value === value) {
                            valueExists = true;
                            field.selectedCategories = [
                                {
                                    label: item.label as string,
                                    value: item.value,
                                },
                            ];
                        }
                    });
                    if (!valueExists) {
                        field.options?.forEach((item) => {
                            if (item.label === 'Custom') {
                                item.value = value as any;

                                field.selectedCategories = [
                                    {
                                        label: item.label as string,
                                        value: item.value,
                                    },
                                ];
                            }
                        });
                    }
                }
            });
            break;

        case ButtonFieldNames.WIDTH_OPTIONS:
            newComponent.fields?.forEach((field: Component) => {
                if (field.name === ButtonFieldNames.WIDTH) {
                    field.value = value as number;
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
                        field.min = 158;
                        field.max = 1366;
                    }
                    if (field.name === SwitchFieldNames.WIDTH_OPTIONS) {
                        field.showComponent = true;
                    }
                });
            }

            break;

        case FileInputFieldNames.FILE_INPUT_ITEM:
            if (!value) {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === FileInputFieldNames.FILE_INPUT_OPTIONS) {
                        field.showComponent = false;
                    }
                    if (field.name === FileInputFieldNames.HUG_CONTENT) {
                        field.showComponent = true;
                    }
                    if (field.name === FileInputFieldNames.WIDTH) {
                        field.showComponent = false;
                        field.min = 80;
                    }
                    if (field.name === FileInputFieldNames.WIDTH_OPTIONS) {
                        field.showComponent = false;
                        field.selectedCategories = [
                            { label: 'Small', value: 158 },
                        ];
                    }
                });
            } else {
                newComponent.fields?.forEach((field: Component) => {
                    if (field.name === FileInputFieldNames.FILE_INPUT_OPTIONS) {
                        field.showComponent = true;
                    }
                    if (field.name === FileInputFieldNames.WIDTH) {
                        field.showComponent = true;
                        field.value = 328;
                        field.min = 158;
                        field.max = 1366;
                    }
                    if (field.name === FileInputFieldNames.WIDTH_OPTIONS) {
                        field.showComponent = true;
                        field.selectedCategories = [
                            { label: 'Medium', value: 328 },
                        ];
                    }
                    if (field.name === FileInputFieldNames.HUG_CONTENT) {
                        field.showComponent = false;
                    }
                });
            }
            break;

        case SliderFieldNames.MAXIMUM:
            newComponent.fields?.forEach((field: Component) => {
                if (field.name === SliderFieldNames.VALUE) {
                    field.max = value as number;
                }
            });
            break;
        case SliderFieldNames.MINIMUM:
            newComponent.fields?.forEach((field: Component) => {
                if (field.name === SliderFieldNames.VALUE) {
                    field.min = value as number;
                    field.value = value;
                }
            });
            break;

        default:
            break;
    }

    return newComponent;
};
