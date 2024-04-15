import React from 'react';
import { NumberInput } from '@canva/app-ui-kit';

const NumberInputComponent = () => {
    return (
        <div style={{ padding: 16 }}>
            <NumberInput defaultValue={0} />
        </div>
    );
};

export default NumberInputComponent;
