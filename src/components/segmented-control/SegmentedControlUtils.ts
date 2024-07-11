import { SegmentedControlOption } from '@canva/app-ui-kit';
import { Component, OptionItem } from 'src/models/component.model';
import { SegmentedControlFieldNames } from './SegmentedControlConfig';
import { PlaceHolderFieldNames } from 'src/constants/component-configs/PlaceholderComponentConfig';
import { getIcon } from 'src/component-utils/ComponentUtils';
import { TextFieldNames } from '../text/TextConfig';

const iconOptions: OptionItem[] = [
    {
        value: 'Arrow up-1',
        key: 1,
        description: 'option1',
        selected: true,
        Icon: 'arrow-up-icon',
    },
    {
        value: 'Arrow down-2',
        key: 2,
        description: 'option2',
        Icon: 'arrow-down-icon',
        selected: false,
    },
    {
        value: 'Arrow left-3',
        key: 3,
        description: 'option3',
        Icon: 'arrow-left-icon',
        selected: false,
    },
];
const textOptions = [
    {
        key: 1,
        label: 'S',
        value: 's',
        selected: true,
    },
    {
        key: 2,
        label: 'M',
        value: 'm',
        selected: false,
    },
    {
        key: 3,
        label: 'L',
        value: 'l',
        selected: false,
    },
];

const regularTextSize = [
    {
        label: 'X large',
        value: 'xlarge',
    },
    {
        label: 'Large',
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
        label: 'X small',
        value: 'xsmall',
    },
];

const boldTextSize = [
    {
        label: 'Large',
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

export const getWidth = (component: Component) => {
    let width = '';
    component?.fields?.forEach((field: Component) => {
        if (field.name === SegmentedControlFieldNames.WIDTH) {
            width = field.value;
        }
    });
    width = width + 'px';
    return width;
};

export const getSelectedValue = (component: Component) => {
    let value = '';

    if (component?.fields) {
        component?.fields?.forEach((field: Component) => {
            if (field.name === SegmentedControlFieldNames.OPTIONS) {
                value = field.value;

                if (value === '') {
                    field.options?.forEach((option) => {
                        if (option.selected) {
                            value = option.value;
                        }
                    });
                }
            }
        });
    } else {
        value = component.value;
    }

    return value;
};

export const getOptions = (component: Component) => {
    let options: SegmentedControlOption<string>[] = [];

    if (component?.fields) {
        component?.fields?.forEach((field: Component) => {
            if (field.name === SegmentedControlFieldNames.OPTIONS) {
                options = getOptionList(
                    field.options as any[]
                ) as SegmentedControlOption<string>[];
            }
        });
    } else {
        options = getOptionList(
            component.options as any[]
        ) as SegmentedControlOption<string>[];
    }

    return options;
};

export const getOptionList = (options: any[]) => {
    const optionsList: any[] = [];
    const optionsCopy = [...options];
    optionsCopy?.forEach((option) => {
        let label = option.label;
        const value = option.value;

        if (!option.label && option.Icon) {
            const icon = getIcon(option.Icon);

            if (icon) {
                label = icon.Icon() as any;
            }
        }

        optionsList.push({
            label: label,
            value: value,
        });
    });

    return optionsList;
};

export const getLabel = (component: Component) => {
    let label = '';
    if (component?.fields) {
        label = '';
    } else {
        label = component.name;
    }
    return label;
};

export const processSegementedFieldChange = (
    selectedComponent: Component,
    updatedComponent: Component,
    newValue: any
) => {
    let newComponent = { ...selectedComponent };
    newComponent?.fields?.forEach((field: Component) => {
        if (field.name === updatedComponent.name) {
            field.value = newValue;
        }
        return;
    });

    if (
        updatedComponent.name === SegmentedControlFieldNames.TYPE ||
        TextFieldNames.VARIANT ||
        PlaceHolderFieldNames.SHAPE
    ) {
        newComponent = switchSegmentType(selectedComponent, newValue);
    }

    return newComponent;
};

let iconValue;
let textValue;

export const updateIconTextValue = (
    selectedComponent: Component,
    value: any
) => {
    if (value === 'text')
        textValue = copyObjectwithouInstance(selectedComponent.fields);
    else if (value === 'icon')
        iconValue = copyObjectwithouInstance(selectedComponent.fields);
    else {
        if (selectedComponent?.optionContentType == 'text') {
            iconValue = undefined;
            textValue = copyObjectwithouInstance(selectedComponent.fields);
        }
        if (selectedComponent?.optionContentType == 'icon') {
            textValue = undefined;
            iconValue = copyObjectwithouInstance(selectedComponent.fields);
        }
    }
};

function copyObjectwithouInstance(obj) {
    return obj ? JSON.parse(JSON.stringify(obj)) : obj;
}

const switchSegmentType = (selectedComponent: Component, value: any) => {
    let newComponent = { ...selectedComponent };
    newComponent.fields?.forEach((field: Component) => {
        if (field.name === SegmentedControlFieldNames.OPTIONS) {
            if (value === 'text') {
                let optionsValue =
                    textValue && textValue[3]
                        ? copyObjectwithouInstance(textValue[3].options)
                        : copyObjectwithouInstance(textOptions as any[]);
                newComponent.options = copyObjectwithouInstance(
                    field.textOptions
                );
                newComponent.optionContentType = 'text';
                field.options = field.textOptions
                    ? copyObjectwithouInstance(field.textOptions)
                    : copyObjectwithouInstance(optionsValue);
                field.iconOptions =
                    iconValue && iconValue[3]
                        ? copyObjectwithouInstance(iconValue[3].options)
                        : copyObjectwithouInstance(field.iconOptions);
                field.value = 's';
            } else if (value === 'icon') {
                let optionsValue =
                    iconValue && iconValue[3]
                        ? copyObjectwithouInstance(iconValue[3].options)
                        : copyObjectwithouInstance(iconOptions as any[]);
                newComponent.options = copyObjectwithouInstance(
                    field.iconOptions
                );
                newComponent.optionContentType = 'icon';
                field.options = field.iconOptions
                    ? copyObjectwithouInstance(field.iconOptions)
                    : copyObjectwithouInstance(optionsValue);
                field.value = 'Arrow up';
                field.textOptions =
                    textValue && textValue[3]
                        ? copyObjectwithouInstance(textValue[3].options)
                        : copyObjectwithouInstance(field.textOptions);
            }
        }
        if (field.name === TextFieldNames.SIZE) {
            if (value === 'bold') {
                newComponent.options = boldTextSize as any[];
                field.options = boldTextSize as any[];
                field.value = 'medium';
            } else if (value === 'regular') {
                newComponent.options = regularTextSize as any[];
                field.options = regularTextSize as any[];
            }
        }
        if (field.name === PlaceHolderFieldNames.HEIGHT) {
            if (value === 'shape') {
                field.showComponent = true;
                field.value = 96;
            }
        }
        if (field.name === PlaceHolderFieldNames.WIDTH) {
            if (value === 'shape') {
                field.value = 96;
            } else if (value === 'text') {
                field.value = 258;
            } else if (value === 'title') {
                field.value = 258;
            }
        }
        if (field.name === PlaceHolderFieldNames.SIZE) {
            if (value === 'shape') {
                field.showComponent = false;
            } else {
                field.showComponent = true;
            }
        }
        if (field.name === PlaceHolderFieldNames.SHAPE) {
            if (value === 'shape') {
                field.showComponent = true;
                field.value = 'circle';
            } else if (value == 'text') {
                field.showComponent = false;
            } else if (value == 'title') {
                field.showComponent = false;
            } else {
                field.showComponent = true;
            }
        }
    });

    return newComponent;
};
