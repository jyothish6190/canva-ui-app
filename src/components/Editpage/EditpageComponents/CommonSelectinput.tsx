import React from 'react';
import { FormField, Select } from '@canva/app-ui-kit';

export default function CommonSelectInput() {
    const Options = [
        {
            label: 'option1',
            value: 'option1',
        },
        {
            label: 'Option2',
            value: 'Option2',
        },
        {
            label: 'Option3',
            value: 'Option3',
        },
    ];
    return (
        <FormField
            label="Form field label"
            description=""
            control={(props) => (
                <Select stretch={true} {...props} options={Options} />
            )}
        />
    );
}
