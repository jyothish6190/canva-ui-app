import React, { useEffect, useState } from 'react';

import { Pill } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { PillFieldNames } from 'src/constants/component-configs/PillConfig';
import { Icon } from 'src/models/icons.model';

type PillComponentType = {
    component: Component;
    isProperty: boolean;
};

type PillComponentStateData = {
    pillText: string;
    startDecorator: Icon | undefined;
    endDecorator: Icon | undefined;
    pillState: 'default' | 'hover' | 'active' | 'loading' | 'disabled';
    pillWidth: number | undefined;
};

const initialState: PillComponentStateData = {
    pillText: 'Pill',
    startDecorator: undefined,
    endDecorator: undefined,
    pillState: 'default',
    pillWidth: undefined,
};

const PillComponent = ({ component, isProperty }: PillComponentType) => {
    const [pillComponentState, setPillComponentState] =
        useState<PillComponentStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === PillFieldNames.TEXT) {
                setPillComponentState((prevState) => {
                    return {
                        ...prevState,
                        pillText: field.value ? field.value : 'Pill',
                    };
                });
            }
            if (field.name === PillFieldNames.START_ICON_SELECTION) {
                setPillComponentState((prevState) => {
                    return {
                        ...prevState,
                        startDecorator: field.value ? field.value : undefined,
                    };
                });
            }
            if (field.name === PillFieldNames.END_ICON_SELECTION) {
                setPillComponentState((prevState) => {
                    return {
                        ...prevState,
                        endDecorator: field.value ? field.value : undefined,
                    };
                });
            }
            if (field.name === PillFieldNames.STATE) {
                setPillComponentState((prevState) => {
                    return {
                        ...prevState,
                        pillState: field.value ? field.value : 'default',
                    };
                });
            }
            if (field.name === PillFieldNames.WIDTH) {
                setPillComponentState((prevState) => {
                    return {
                        ...prevState,
                        pillWidth: field.value ? field.value : undefined,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                style={
                    pillComponentState.pillWidth
                        ? { width: pillComponentState.pillWidth + 'px' }
                        : {}
                }
            >
                <Pill
                    key={pillComponentState.endDecorator?.label}
                    text={pillComponentState.pillText}
                    start={pillComponentState.startDecorator?.Icon || undefined}
                    end={pillComponentState.endDecorator?.Icon || undefined}
                    disabled={
                        pillComponentState.pillState === 'disabled'
                            ? true
                            : false
                    }
                    selected={
                        pillComponentState.pillState === 'active' ? true : false
                    }
                />
            </div>
        );
    } else {
        return <Pill key={component.name} text={component.name} />;
    }
};
export default PillComponent;
