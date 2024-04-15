import React from 'react';
import { SegmentedControl } from '@canva/app-ui-kit';

import ExcessContainer from '../CommonComponents/excessContainer';

const SegmentedControlComponent = () => {
    return (
        <ExcessContainer dynamic="140px">
            <SegmentedControl
                options={[
                    {
                        label: 'S',
                        value: 's',
                    },
                    {
                        label: 'M',
                        value: 'm',
                    },
                ]}
                defaultValue="s"
            />
        </ExcessContainer>
    );
};

export default SegmentedControlComponent;
