import React, { useEffect, useState } from 'react';
import { ProgressBar } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';
import { Component } from 'src/models/component.model';
import { ProgressBarFieldNames } from 'src/constants/component-configs/ProgressbarComponentConfig';
import styles from './ProgressbarComponent.css';

type PropType = {
    component: Component;
    isProperty: boolean;
};

type ProgressBarStateData = {
    progressBarValue: number;
    progressBarSize: 'small' | 'medium';
    progressBarWidth: string | undefined;
};
const initialState: ProgressBarStateData = {
    progressBarValue: 50,
    progressBarSize: 'medium',
    progressBarWidth: '158 px',
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
                        progressBarValue: field.value || 0,
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
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setProgressBarState((prevState) => {
                            return {
                                ...prevState,
                                progressBarWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setProgressBarState((prevState) => {
                            return {
                                ...prevState,
                                progressBarWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setProgressBarState((prevState) => {
                            return {
                                ...prevState,
                                progressBarWidth: field.value
                                    ? `${field.value}px`
                                    : undefined,
                            };
                        });
                    }
                }
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                className={styles['progress-bar']}
                style={{ width: progressBarState.progressBarWidth }}
            >
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
