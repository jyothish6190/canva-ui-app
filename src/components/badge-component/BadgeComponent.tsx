import React, { useEffect, useState } from 'react';

import { Badge } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { BadgeFieldNames } from 'src/constants/component-configs/BadgeConfig';

type ButtonComponentType = {
    component: Component;
    isProperty: boolean;
};

const BadgeComponent = ({ isProperty, component }: ButtonComponentType) => {
    const [badgeText, setBadgeText] = useState<string>('Badge');
    const [badgeTone, setBadgeTone] = useState<
        'assist' | 'positive' | 'warn' | 'info' | 'critical' | 'neutral'
    >('assist');
    const [badgeShape, setBadgeShape] = useState<'regular' | 'circle'>(
        'regular'
    );

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === BadgeFieldNames.TEXT) {
                setBadgeText(field.value ? field.value : 'Badge');
            }
            if (field.name === BadgeFieldNames.TONE) {
                setBadgeTone(field.value ? field.value : 'assist');
            }
            if (field.name === BadgeFieldNames.SHAPE) {
                setBadgeShape(field.value ? field.value : 'regular');
            }
        });
    }, [component]);
    if (isProperty) {
        return (
            <Badge
                text={badgeText}
                tone={badgeTone}
                shape={badgeShape}
                ariaLabel={badgeShape === 'circle' ? badgeText : ''}
            />
        );
    } else {
        return <Badge text={component.name} tone="assist" />;
    }
};
export default BadgeComponent;
