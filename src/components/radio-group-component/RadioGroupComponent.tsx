import React from 'react';
import { RadioGroup } from '@canva/app-ui-kit';

const RadioGroupComponent = () => {
    return (
        <RadioGroup
            defaultValue={'blueberry'}
            options={[
                {
                    label: 'Blueberry',
                    value: 'blueberry',
                },
                {
                    label: 'Apple',
                    value: 'apple',
                },
                {
                    label: 'Strawberry',
                    value: 'strawberry',
                },
            ]}
        />
    );
};

export default RadioGroupComponent;
