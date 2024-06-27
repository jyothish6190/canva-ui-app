import { FormField, Select, SelectOption, Title } from '@canva/app-ui-kit';
import React, { useEffect, useState } from 'react';
import { getOptions } from './FormSelectComponentUtils';

const FormSelectComponent = ({ component, isProperty }) => {
    const [options, setOptions] = useState<SelectOption<string>[]>([]);

    useEffect(() => {
        setOptions(getOptions(component));
    }, [component]);
    return (
        <FormField
            label={(<Title children={component.name} size="xsmall" />) as any}
            control={(props) => <Select options={options} />}
        />
    );
};

export default FormSelectComponent;
