import React from 'react';
import { TypographyCard, Text } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';
import { Component } from 'src/models/coponent.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: any) => void;
};

const TypographyComponent = ({ component, isProperty, onChange }: PropType) => {
    if (isProperty) {
        return (
            <TypographyCard onClick={() => {}} ariaLabel="">
                <Text lineClamp={1}>The quick brown fox</Text>
            </TypographyCard>
        );
    }
    return (
        <ExcessContainer dynamic="300px">
            <TypographyCard onClick={() => {}} ariaLabel="">
                <Text lineClamp={1}>The quick brown fox jumps</Text>
            </TypographyCard>
        </ExcessContainer>
    );
};

export default TypographyComponent;
