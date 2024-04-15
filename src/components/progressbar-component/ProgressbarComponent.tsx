import React from 'react';
import { ProgressBar } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';

const ProgressbarComponent = () => {
    return (
        <ExcessContainer dynamic="300px">
            <ProgressBar size="medium" tone="info" value={50} />
        </ExcessContainer>
    );
};

export default ProgressbarComponent;
