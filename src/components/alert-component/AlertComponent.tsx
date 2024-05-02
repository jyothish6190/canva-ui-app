import React, { useEffect, useState } from 'react';
import { Alert } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';
import { Component } from 'src/models/component.model';
import { AlertFieldNames } from 'src/constants/component-configs/AlertConfig';

type AlertType = {
    component: Component;
    isProperty: boolean;
};

type AlertStateData = {
    alertTone: 'critical' | 'warn' | 'positive' | 'info';
    alertTitle: string;
    alertText: string;
    alertDismiss: boolean;
    alertWidth: number;
};

const InitialState: AlertStateData = {
    alertTone: 'positive',
    alertTitle: '',
    alertText: ' Alert',
    alertDismiss: false,
    alertWidth: 328,
};

const AlertComponent = ({ component, isProperty }: AlertType) => {
    const [alertState, setAlertState] = useState<AlertStateData>(InitialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === AlertFieldNames.TONE) {
                setAlertState((prevState) => {
                    return {
                        ...prevState,
                        alertTone: field.value ? field.value : 'positive',
                    };
                });
            }
            if (field.name === AlertFieldNames.TITLE) {
                setAlertState((prevState) => {
                    return {
                        ...prevState,
                        alertTitle: field.value ? field.value : '',
                    };
                });
            }
            if (field.name === AlertFieldNames.TEXT) {
                setAlertState((prevState) => {
                    return {
                        ...prevState,
                        alertText: field.value ? field.value : 'Alert',
                    };
                });
            }
            if (field.name === AlertFieldNames.DISMISSIBLE) {
                setAlertState((prevState) => {
                    return {
                        ...prevState,
                        alertDismiss: field.value ? field.value : false,
                    };
                });
            }
            if (field.name === AlertFieldNames.WIDTH) {
                setAlertState((prevState) => {
                    return {
                        ...prevState,
                        alertWidth: field.value ? field.value : 328,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div style={{ width: alertState.alertWidth }}>
                <Alert
                    tone={alertState.alertTone}
                    title={alertState.alertTitle}
                    onDismiss={alertState.alertDismiss ? () => {} : undefined}
                >
                    {alertState.alertText}
                </Alert>
            </div>
        );
    }
    return (
        <ExcessContainer dynamic={'300px'}>
            <Alert tone="positive">{component.name}</Alert>
        </ExcessContainer>
    );
};

export default AlertComponent;
