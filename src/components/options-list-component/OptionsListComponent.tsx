import React, { useEffect, useMemo } from 'react';
import { Box, Column, Columns, PlusIcon, Rows } from '@canva/app-ui-kit';

import OptionsItemComponent from './options-item-component/OptionsItemComponent';
import ButtonWithIcon from '../button-with-icon/ButtonWithIcon';

import { Component } from 'src/models/component.model';

import styles from './OptionsListComponent.css';
import CardTitle from '../card-title/CardTitle';
import { useOptionStore } from 'src/store/OptionListStore';

type PropType = {
    component: Component;
    isProprty: boolean;
};

const OptionsListComponent = ({ component, isProprty }: PropType) => {
    const { setNewlist, OptionList, addNewItem } = useOptionStore();

    const options = useMemo(() => {
        if (component && component.options) {
            setNewlist(component.options);
            return component.options;
        } else {
            return [];
        }
    }, [component]);

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
                    addNewItem();
                }}
            />
        </Rows>
    );
};

export default OptionsListComponent;
