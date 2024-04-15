import React from 'react';
import { FormField, TextInput } from '@canva/app-ui-kit';

export default function CommonTextInput() {
    return (
        <FormField
            label="Form field label"
            description=""
            control={(props) => <TextInput {...props} />}
        />
    );
}
