import React, { useEffect, useState } from 'react';

import { Pill } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { PillFieldNames } from 'src/constants/component-configs/PillConfig';
import { Icon } from 'src/models/icons.model';

type PillComponentType = {
    component: Component;
    isProperty: boolean;
};

const PillComponent = ({ component, isProperty }: PillComponentType) => {
    const [pillText, setPillText] = useState<string>('pill');
    const [startDecorator, setStartDecorator] = useState<Icon | undefined>(
        undefined
    );
    const [endDecorator, setEndDecorator] = useState<Icon | undefined>(
        undefined
    );
    const [pillState, setPillState] = useState<
        'default' | 'hover' | 'active' | 'loading' | 'disabled'
    >('default');

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === PillFieldNames.TEXT) {
                setPillText(field.value ? field.value : 'pill');
            }
            if (field.name === PillFieldNames.START_ICON_SELECTION) {
                setStartDecorator(field.value ? field.value : undefined);
            }
            if (field.name === PillFieldNames.END_ICON_SELECTION) {
                setEndDecorator(field.value ? field.value : undefined);
            }
            if (field.name === PillFieldNames.STATE) {
                setPillState(field.value ? field.value : 'default');
            }
        });
        console.log('start', startDecorator);
        console.log('end', endDecorator);
    }, [component]);
    if (isProperty) {
        return (
            <div>
                <Pill
                    key={endDecorator?.label}
                    text={pillText}
                    start={startDecorator?.Icon || null}
                    end={endDecorator?.Icon || null}
                    disabled={pillState === 'disabled' ? true : false}
                    selected={pillState === 'active' ? true : false}
                />
            </div>
        );
    } else {
        return <Pill key={component.name} text={component.name} />;
    }
};
export default PillComponent;
