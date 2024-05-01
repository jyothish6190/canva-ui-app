import React, { useEffect, useState } from 'react';
import { ProgressBar } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';
import { Component } from 'src/models/component.model';
import { ProgressBarFieldNames } from 'src/constants/component-configs/ProgressbarComponentConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
};

type ProgressBarStateData = {
    progressBarValue: number;
    progressBarSize: 'small' | 'medium';
    progressBarWidth: number;
};
const initialState: ProgressBarStateData = {
    progressBarValue: 50,
    progressBarSize: 'medium',
    progressBarWidth: 158,
};

const ProgressbarComponent = ({ component, isProperty }: PropType) => {
    const [progressBarState, setProgressBarState] =
        useState<ProgressBarStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === ProgressBarFieldNames.PERCENTAGE) {
                setProgressBarState((prevState) => {
                    return {
                        ...prevState,
                        progressBarValue: field.value || 50,
                    };
                });
            }
            if (field.name === ProgressBarFieldNames.SIZE) {
                setProgressBarState((prevState) => {
                    return {
                        ...prevState,
                        progressBarSize: field.value || 'medium',
                    };
                });
            }
            if (field.name === ProgressBarFieldNames.WIDTH) {
                setProgressBarState((prevState) => {
                    return {
                        ...prevState,
                        progressBarWidth: field.value || 158,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div style={{ width: progressBarState.progressBarWidth }}>
                <ProgressBar
                    size={progressBarState.progressBarSize}
                    tone="info"
                    value={progressBarState.progressBarValue}
                />
            </div>
        );
    }
    return (
        <ExcessContainer dynamic="300px">
            <ProgressBar size="medium" tone="info" value={50} />
        </ExcessContainer>
    );
};

export default ProgressbarComponent;
