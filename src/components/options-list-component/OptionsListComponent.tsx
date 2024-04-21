import React, { useMemo } from 'react';
import { Box, Column, Columns, PlusIcon, Rows } from '@canva/app-ui-kit';

import OptionsItemComponent from './options-item-component/OptionsItemComponent';
import ButtonWithIcon from '../button-with-icon/ButtonWithIcon';

import { Component } from 'src/models/component.model';

import styles from './OptionsListComponent.css';
import Title from '../title/Title';

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
                    <Title title="Options"></Title>
                </div>
                <div style={{ justifyContent: 'flex-end' }}>
                    <Title title="Clear Selection"></Title>
                </div>
            </div>
            <>
                {options.map((option) => {
                    return (
                        <div key={option.value}>
                            <OptionsItemComponent option={option} />
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
