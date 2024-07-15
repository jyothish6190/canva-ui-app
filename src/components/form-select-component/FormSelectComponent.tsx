import React, { useEffect, useState } from 'react';
import { FormField, SelectOption, Title, TextInput } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import styles from './FormSelectComponent.css';
import { useComponentStore } from 'src/store/ComponentStore';
import {
    getActive,
    getDescription,
    getErrorState,
    getLabel,
    getOptions,
    getPlaceholder,
    getState,
    getValue,
    getWidth,
    selectOptionChangeHandler,
} from './FormSelectComponentUtils';
import MultilineInputComponent from '../multiline-input-component/MultilineInputComponent';
import SelectComponent from '../select-component/SelectComponent';
import { FormControlNames } from '../form-field-component/FormFieldConfig';
import CheckBoxComponent from '../check-box-component/CheckBoxComponent';
import CheckboxGroupComponent from '../checkbox-group-component/CheckboxGroupComponent';
import NumberInputComponent from '../number-input/NumberInputComponent';
import SegmentedControlComponent from '../segmented-control/SegmentedControlComponent';
import RadioGroupComponent from '../radio-group-component/RadioGroupComponent';
import TextInputComponent from '../text-input-component/TextInputComponent';
import ExcessContainer from '../CommonComponents/excessContainer';

type PropType = {
    component: Component;
    isProperty: boolean;
};

export type SelectState = 'default' | 'hover' | 'error' | 'disabled';

const FormSelectComponent = ({ component, isProperty }: PropType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const [options, setOptions] = useState<SelectOption<string>[]>([]);
    const [value, setValue] = useState('');
    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [selectState, setSlecteState] = useState<SelectState>('default');
    const [active, setActive] = useState<boolean>(false);
    const [width, setWidth] = useState<string | undefined>(undefined);
    const [elementHeight, setElementHeight] = useState<number>();
    const [error, setError] = useState<boolean>(false);
    const [selectedvValue, setSelectedValue] = useState('');

    useEffect(() => {
        if (component) {
            setValue(getValue(component));
            setOptions(getOptions(component));
            setSlecteState(getState(component));
            setLabel(getLabel(component));
            setPlaceholder(getPlaceholder(component));
            setWidth(getWidth(component));
            setActive(getActive(component));
            setError(getErrorState(component));
        }
    }, [component, component.value, component.options]);

    useEffect(() => {
        Height();
    }, [options, active]);

    const Height = () => {
        const divelement = document.querySelector(`#active`);

        if (divelement) {
            setElementHeight((divelement as HTMLElement).offsetHeight);
        }
    };

    const getComponent = () => {
        if (component && component?.fields) {
            if (component?.fields[0]?.value === FormControlNames.FORM_SELECT)
                return (
                    <SelectComponent
                        component={selectedComponent as Component}
                        isProperty={true}
                    />
                );
            else if (
                component?.fields[0]?.value ===
                FormControlNames.FORM_MULTILINE_INPUT
            ) {
                return (
                    <MultilineInputComponent
                        component={selectedComponent as Component}
                        isProperty={true}
                    />
                );
            } else if (
                component?.fields[0]?.value ===
                FormControlNames.FORM_CHECKBOX_FIELD
            ) {
                return (
                    <CheckBoxComponent
                        component={selectedComponent as Component}
                        isProperty={true}
                    />
                );
            } else if (
                component?.fields[0]?.value ===
                FormControlNames.FORM_CHECKBOX_GROUP
            ) {
                return (
                    <CheckboxGroupComponent
                        component={selectedComponent as Component}
                        isProperty={true}
                    />
                );
            } else if (
                component?.fields[0]?.value ===
                FormControlNames.FORM_NUMBER_INPUT
            ) {
                return (
                    <NumberInputComponent
                        component={selectedComponent as Component}
                        isProperty={true}
                    />
                );
            } else if (
                component?.fields[0]?.value ===
                FormControlNames.FORM_SEGMENTED_CONTROL
            ) {
                return (
                    <SegmentedControlComponent
                        component={selectedComponent as Component}
                        isProperty={true}
                    />
                );
            } else if (
                component?.fields[0]?.value === FormControlNames.FORM_RADIO
            ) {
                return (
                    <RadioGroupComponent
                        component={selectedComponent as Component}
                        isProperty={true}
                    />
                );
            } else if (
                component?.fields[0]?.value === FormControlNames.FORM_TEXT_INPUT
            ) {
                return (
                    <TextInputComponent
                        component={selectedComponent as Component}
                        isProperty={true}
                    />
                );
            }
        }
    };

    if (isProperty) {
        return (
            <div
                id={'active'}
                className={error ? styles['form-select-component'] : ''}
                style={{ width: width, padding: '4px' }}
            >
                <FormField
                    label={
                        label === ' ' ? (
                            (undefined as any)
                        ) : (
                            <Title children={label} size="xsmall" />
                        )
                    }
                    description={getDescription(component)}
                    control={(props) => {
                        return getComponent();
                    }}
                />
            </div>
        );
    }
    return (
        <ExcessContainer dynamic={'300px'}>
            <FormField
                label={component.label as string}
                description={component.description}
                control={(props) => <TextInput {...props} />}
            />
        </ExcessContainer>
    );
};

export default FormSelectComponent;
