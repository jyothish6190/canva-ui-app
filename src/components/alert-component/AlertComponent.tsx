import React, { useEffect, useState } from 'react';
import { Alert } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';
import { Component } from 'src/models/component.model';
import { AlertFieldNames } from 'src/constants/component-configs/AlertConfig';

type AlertType = {
    component: Component;
    isProperty: boolean;
};

const AlertComponent = ({ component, isProperty }: AlertType) => {
    const [alertTone, setAlertTone] = useState<
        'critical' | 'warn' | 'positive' | 'info'
    >('positive');
    const [alertTitle, setAlertTitle] = useState<string>('');
    const [alertText, setAlertText] = useState<string>(' Alert');
    const [alertDismiss, setAlertDismiss] = useState<boolean>(false);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === AlertFieldNames.TONE) {
                setAlertTone(field.value ? field.value : 'positive');
            }
            if (field.name === AlertFieldNames.TITLE) {
                setAlertTitle(field.value ? field.value : '');
            }
            if (field.name === AlertFieldNames.TEXT) {
                setAlertText(field.value ? field.value : ' Alert');
            }
            if (field.name === AlertFieldNames.DISMISSIBLE) {
                setAlertDismiss(field.value ? field.value : false);
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <Alert
                tone={alertTone}
                title={alertTitle}
                onDismiss={alertDismiss ? () => {} : undefined}
            >
                {alertText}
            </Alert>
        );
    }
    return (
        <ExcessContainer dynamic={'300px'}>
            <Alert tone="positive">{component.name}</Alert>
        </ExcessContainer>
    );
};

export default AlertComponent;
