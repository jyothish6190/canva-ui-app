import React, { useEffect, useMemo } from 'react';
import { Box, Column, Columns, PlusIcon, Rows } from '@canva/app-ui-kit';

import OptionsItemComponent from './options-item-component/OptionsItemComponent';
import ButtonWithIcon from '../button-with-icon/ButtonWithIcon';

import { Component } from 'src/models/component.model';

import styles from './OptionsListComponent.css';
import CardTitle from '../card-title/CardTitle';
import { useOptionStore } from 'src/store/OptionListStore';
import { useComponentStore } from 'src/store/ComponentStore';

type PropType = {
    component: Component;
    isProprty: boolean;
};

const OptionsListComponent = ({ component, isProprty }: PropType) => {
    const { setNewlist, OptionList, addNewItem } = useOptionStore();
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    useMemo(() => {
        if (component && component.options) {
            setNewlist(component.options);
            return component.options;
        } else {
            return [];
        }
    }, [component]);

    useEffect(() => {
        selectedComponent?.fields?.forEach((field: Component) => {
            if (field.name === component.name) {
                field.value = OptionList;
            }
            setSelectedComponent({ ...selectedComponent });
            return;
        });
    }, [OptionList]);
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
                {OptionList.map((option) => {
                    return (
                        <div key={option.value}>
                            <OptionsItemComponent
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
                onClick={() => {
                    addNewItem(component.optionType ? true : false);
                }}
            />
        </Rows>
    );
};

export default OptionsListComponent;
