import React, { useEffect, useState } from 'react';

import { Badge } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { BadgeFieldNames } from 'src/constants/component-configs/BadgeConfig';

type ButtonComponentType = {
    component: Component;
    isProperty: boolean;
};

type BadgeComponentStateData = {
    badgeText: string;
    badgeTone: 'assist' | 'positive' | 'warn' | 'info' | 'critical' | 'neutral';
    badgeShape: 'regular' | 'circle';
};

const initialState: BadgeComponentStateData = {
    badgeText: 'Badge',
    badgeTone: 'assist',
    badgeShape: 'regular',
};

const BadgeComponent = ({ isProperty, component }: ButtonComponentType) => {
    const [badgeState, setBadgeState] =
        useState<BadgeComponentStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === BadgeFieldNames.TEXT) {
                setBadgeState((prevState) => {
                    return {
                        ...prevState,
                        badgeText: field.value ? field.value : 'Badge',
                    };
                });
            }
            if (field.name === BadgeFieldNames.TONE) {
                setBadgeState((prevState) => {
                    return {
                        ...prevState,
                        badgeTone: field.value ? field.value : 'assist',
                    };
                });
            }
            if (field.name === BadgeFieldNames.SHAPE) {
                setBadgeState((prevState) => {
                    return {
                        ...prevState,
                        badgeShape: field.value ? field.value : 'regular',
                    };
                });
            }
        });
    }, [component]);
    if (isProperty) {
        return (
            <Badge
                text={badgeState.badgeText}
                tone={badgeState.badgeTone}
                shape={badgeState.badgeShape}
                ariaLabel={
                    badgeState.badgeShape === 'circle'
                        ? badgeState.badgeText
                        : ''
                }
            />
        );
    } else {
        return <Badge text={component.name} tone="assist" />;
    }
};
export default BadgeComponent;
