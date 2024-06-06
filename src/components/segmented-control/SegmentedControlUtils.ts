import {
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowUpIcon,
    SegmentedControlOption,
} from '@canva/app-ui-kit';
import { Component, OptionItem } from 'src/models/component.model';
import { SegmentedControlFieldNames } from './SegmentedControlConfig';
import { TextFieldNames } from 'src/constants/component-configs/TextConfig';
import { PlaceHolderFieldNames } from 'src/constants/component-configs/PlaceholderComponentConfig';

const iconOptions: OptionItem[] = [
    {
        value: 'Arrow up',
        key: 1,
        description: 'option1',
        selected: true,
        Icon: ArrowUpIcon,
    },
    {
        value: 'Arrow down',
        key: 2,
        description: 'option2',
        Icon: ArrowDownIcon,
        selected: false,
    },
    {
        value: 'Arrow left',
        key: 3,
        description: 'option3',
        Icon: ArrowLeftIcon,
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
    options?.forEach((option) => {
        if (!option.label && option.Icon) {
            option.label = option.Icon() as any;
        }

        optionsList.push({
            label: option.label,
            value: option.value,
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

const switchSegmentType = (selectedComponent: Component, value: any) => {
    let newComponent = { ...selectedComponent };

    newComponent.fields?.forEach((field: Component) => {
        if (field.name === SegmentedControlFieldNames.OPTIONS) {
            if (value === 'text') {
                newComponent.options = textOptions as any[];
                newComponent.optionContentType = 'text';
                field.options = textOptions as any[];
                field.value = 's';
            } else if (value === 'icon') {
                newComponent.options = iconOptions as any[];
                newComponent.optionContentType = 'icon';
                field.options = iconOptions as any[];
                field.value = 'Arrow up';
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
            } else {
                field.showComponent = false;
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
            } else {
                field.showComponent = false;
            }
        }
    });

    return newComponent;
};
