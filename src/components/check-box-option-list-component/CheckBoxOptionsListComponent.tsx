import React, { useMemo } from 'react';

import { PlusIcon, Rows, Text } from '@canva/app-ui-kit';

import CheckBoxOptionsItemComponent from './options-item-component/CheckBoxOptionsItemComponent';
import ButtonWithIcon from '../button-with-icon/ButtonWithIcon';

import { Component } from 'src/models/coponent.model';

type PropType = {
    component: Component;
    isProprty: boolean;
};

const CheckBoxOptionListComponent = ({ component, isProprty }: PropType) => {
    const options = useMemo(() => {
        if (component && component.options) {
            return component.options;
        } else {
            return [];
        }
    }, [component]);

    return (
        <Rows spacing="2u">
            <Text size="medium" variant="regular">
                {component.name}
            </Text>
            <>
                {options.map((option) => {
                    return (
                        <div key={option.value}>
                            <CheckBoxOptionsItemComponent option={option} />
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

export default CheckBoxOptionListComponent;
