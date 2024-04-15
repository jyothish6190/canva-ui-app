import React from 'react';
import { TypographyCard, Text } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';

const TypographyComponent = () => {
    return (
        <ExcessContainer dynamic="300px">
            <TypographyCard onClick={() => {}} ariaLabel="">
                <Text lineClamp={1}>
                    The quick brown fox jumps over the lazy dog. The quick brown
                    fox jumps over the lazy dog.
                </Text>
            </TypographyCard>
        </ExcessContainer>
    );
};

export default TypographyComponent;
