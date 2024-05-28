import React, { useEffect, useState } from 'react';
import { PlusIcon, Rows } from '@canva/app-ui-kit';

import OptionsItemComponent from './options-item-component/OptionsItemComponent';
import ButtonWithIcon from '../button-with-icon/ButtonWithIcon';

import { Component, OptionItem } from 'src/models/component.model';

import styles from './OptionsListComponent.css';
import CardTitle from '../card-title/CardTitle';
import { useComponentStore } from 'src/store/ComponentStore';

type PropType = {
    component: Component;
    isProprty: boolean;
};

const OptionsListComponent = ({ component, isProprty }: PropType) => {
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const [showTrashIcon, setShowTrashIcon] = useState(false);
    const [optionList, setOptionList] = useState<OptionItem[]>(
        component.options as OptionItem[]
    );

    useEffect(() => {
        if (component && component.options) {
            setOptionList(component.options);
        }
    }, [, component.options]);

    useEffect(() => {
        if (isProprty) {
            setShowTrashIcon(optionList.length > 1 ? true : false);

            const newComponent = {
                ...selectedComponent,
            } as Component;

            newComponent.fields?.forEach((field) => {
                if (field.name === component.name) {
                    field.options = optionList;
                }
            });
            setSelectedComponent({ ...newComponent });
        }
    }, [optionList, isProprty]);

    const deleteOptionHandler = (deletedOption: OptionItem) => {
        const updatedOptions = optionList.filter(
            (option) => option.key !== deletedOption.key
        );

        setOptionList(updatedOptions);
    };

    const addOptionHandler = () => {
        let newOption: OptionItem = {
            value: 'Option' + (optionList.length + 1),
            label: 'Option' + (optionList.length + 1),
            key: optionList.length + 1 + '',
            selected: false,
        };
        setOptionList([...optionList, newOption]);
    };

    const updateOptionHandler = (updatedOption: OptionItem) => {
        const options = [...optionList];
        if (component.optionType === 'radio' && updatedOption.selected) {
            component.value = updatedOption.value;
            options.forEach((option) => {
                if (option.key !== updatedOption.key) {
                    option.selected = false;
                }
            });
        }
        const index = options.findIndex(
            (option) => option.key === updatedOption.key
        );

        if (index >= 0) {
            options[index] = { ...updatedOption };
        }
        setOptionList(options);
    };

    const clearSelectionHandler = () => {
        const options = [...optionList];
        options.forEach((option) => {
            option.selected = false;
        });
        setOptionList(options);
    };

    if (!component.options) {
        return <></>;
    }

    return (
        <Rows spacing="2u">
            <div className={styles.header}>
                <div style={{ justifyContent: 'flex-start' }}>
                    <CardTitle title={component.name}></CardTitle>
                </div>
                <div style={{ justifyContent: 'flex-end' }}>
                    {component.optionType === 'radio' && (
                        <CardTitle
                            title="Clear selection"
                            onClick={clearSelectionHandler}
                            cursor="pointer"
                        ></CardTitle>
                    )}
                </div>
            </div>
            <>
                {optionList.map((option) => {
                    return (
                        <div key={option.key}>
                            <OptionsItemComponent
                                component={component}
                                option={option}
                                showDeleteIcon={showTrashIcon}
                                onOptionChange={updateOptionHandler}
                                onDelete={deleteOptionHandler}
                            />
                        </div>
                    );
                })}
            </>
            <ButtonWithIcon
                title="Add an option"
                icon={PlusIcon}
                onClick={addOptionHandler}
            />
        </Rows>
    );
};

export default OptionsListComponent;
