import React from 'react';
import { CheckboxGroup } from '@canva/app-ui-kit';

const CheckboxGroupComponent = () => {
    return (
        <CheckboxGroup
            defaultValue={['blueberry']}
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

export default CheckboxGroupComponent;
