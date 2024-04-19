import React, { useMemo } from 'react';
import { PlusIcon, Rows } from '@canva/app-ui-kit';

import OptionsItemComponent from './options-item-component/OptionsItemComponent';
import ButtonWithIcon from '../button-with-icon/ButtonWithIcon';

import { Component } from 'src/models/coponent.model';

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
