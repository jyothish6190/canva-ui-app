import React, { useMemo } from 'react';
import { Box, Column, Columns, PlusIcon, Rows } from '@canva/app-ui-kit';

import OptionsItemComponent from './options-item-component/OptionsItemComponent';
import ButtonWithIcon from '../button-with-icon/ButtonWithIcon';

import { Component } from 'src/models/component.model';

import styles from './OptionsListComponent.css';
import CardTitle from '../card-title/CardTitle';

type PropType = {
    component: Component;
    isProprty: boolean;
};

const OptionsListComponent = ({ component, isProprty }: PropType) => {
    const options = useMemo(() => {
        if (component && component.options) {
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
                {options.map((option) => {
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
                onClick={() => {}}
            />
        </Rows>
    );
};

export default OptionsListComponent;
