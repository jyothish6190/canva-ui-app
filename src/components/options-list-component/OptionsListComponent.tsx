import React, { useEffect, useMemo, useState } from 'react';
import { Box, Column, Columns, PlusIcon, Rows } from '@canva/app-ui-kit';

import OptionsItemComponent from './options-item-component/OptionsItemComponent';
import ButtonWithIcon from '../button-with-icon/ButtonWithIcon';

import { Component } from 'src/models/component.model';

import styles from './OptionsListComponent.css';
import CardTitle from '../card-title/CardTitle';
import { useComponentStore } from 'src/store/ComponentStore';

type PropType = {
    component: Component;
    isProprty: boolean;
};

const OptionsListComponent = ({ component, isProprty }: PropType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const [optionList, setOptionList] = useState<any[]>([]);
    const [radioChecked, setRadioChecked] = useState<any>(component.value);

    useMemo(() => {
        if (component && component.options) {
            setOptionList(component.options);
            return component.options;
        } else {
            return [];
        }
    }, [component]);

    useEffect(() => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.options = optionList;
                field.value = radioChecked;
            }
            setSelectedComponent({ ...selectedComponent });
            return;
        });
    }, [optionList, radioChecked]);

    const deleteHandler = (optionValue: string) => {
        const updatedOptions = optionList.filter(
            (option) => option.value !== optionValue
        );
        setOptionList(updatedOptions);
    };

    const addNewItemHandler = () => {
        let newOption;
        if (component.optionType) {
            newOption = {
                value: 'Option' + (optionList.length + 1),
                label: 'Option' + (optionList.length + 1),
                checked: false,
            };
        } else {
            newOption = {
                value: 'example file ' + (optionList.length + 1) + ' png',
                label: 'example file ' + (optionList.length + 1) + ' png',
            };
        }
        setOptionList([...optionList, newOption]);
    };

    const updateHandler = (updatedOption, newValue, checked) => {
        const updatedList = optionList.map((option) =>
            option.value === updatedOption
                ? {
                      ...option,
                      label: newValue,
                      value: newValue,
                      checked: checked,
                  }
                : option
        );
        console.log('updated', updatedList);
        setOptionList(updatedList);
    };

    return (
        <Rows spacing="2u">
            <div className={styles.header}>
                <div style={{ justifyContent: 'flex-start' }}>
                    <CardTitle title={component.name}></CardTitle>
                </div>
                <div style={{ justifyContent: 'flex-end' }}>
                    <CardTitle title="Clear Selection"></CardTitle>
                </div>
            </div>
            <>
                {optionList.map((option) => {
                    return (
                        <div key={option.value}>
                            <OptionsItemComponent
                                setRadioChecked={setRadioChecked}
                                radioChecked={radioChecked}
                                showDeleteIcon={
                                    optionList.length > 1 ? true : false
                                }
                                onChange={updateHandler}
                                onClick={deleteHandler}
                                option={option}
                                OptionType={component.optionType}
                            />
                        </div>
                    );
                })}
            </>
            <ButtonWithIcon
                title="Add an option"
                icon={PlusIcon}
                onClick={addNewItemHandler}
            />
        </Rows>
    );
};

export default OptionsListComponent;
