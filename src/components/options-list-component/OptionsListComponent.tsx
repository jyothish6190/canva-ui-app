import React, { useEffect, useMemo, useState } from 'react';
import { PlusIcon, Rows } from '@canva/app-ui-kit';

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
    }, [component, component.options]);

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

    const deleteHandler = (optionKey: number) => {
        const updatedOptions = optionList.filter(
            (option) => option.key !== optionKey
        );
        setOptionList(updatedOptions);
    };

    const addNewItemHandler = () => {
        let newOption;
        if (component.optionType) {
            newOption = {
                value: 'Option' + (optionList.length + 1),
                label: 'Option' + (optionList.length + 1),
                key: optionList.length + 1,
                checked: false,
            };
        } else {
            newOption = {
                value: 'example file ' + (optionList.length + 1) + ' png',
                label: 'example file ' + (optionList.length + 1) + ' png',
                key: optionList.length + 1,
            };
        }
        setOptionList([...optionList, newOption]);
    };

    const updateHandler = (
        updatedOption,
        newValue,
        checked,
        description,
        keyValue
    ) => {
        const updatedList = optionList.map((option) =>
            option.key === keyValue
                ? {
                      ...option,
                      label: newValue,
                      value: newValue,
                      key: keyValue,
                      checked: checked,
                      description: description || null,
                  }
                : option
        );
        setOptionList(updatedList);
    };

    return (
        <Rows spacing="2u">
            <div className={styles.header}>
                <div style={{ justifyContent: 'flex-start' }}>
                    <CardTitle title={component.name}></CardTitle>
                </div>
                <div style={{ justifyContent: 'flex-end' }}>
                    <CardTitle
                        title="Clear Selection"
                        onClick={() => setRadioChecked('')}
                    ></CardTitle>
                </div>
            </div>
            <>
                {optionList.map((option) => {
                    return (
                        <div key={option.value}>
                            <OptionsItemComponent
                                component={component}
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
