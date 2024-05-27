import {
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowUpIcon,
    SegmentedControlOption,
} from '@canva/app-ui-kit';
import { Component, OptionItem } from 'src/models/component.model';
import { SegmentedControlFieldNames } from './SegmentedControlConfig';

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
                const optionsList: any[] = [];
                field.options?.forEach((option) => {
                    if (!option.label && option.Icon) {
                        option.label = option.Icon;
                    }

                    optionsList.push({
                        label: option.label,
                        value: option.value,
                    });
                });
                options = optionsList as SegmentedControlOption<string>[];
            }
        });
    } else {
        options = component.options as SegmentedControlOption<string>[];
    }

    return options;
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

    if (updatedComponent.name === SegmentedControlFieldNames.TYPE) {
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
    });

    return newComponent;
};
