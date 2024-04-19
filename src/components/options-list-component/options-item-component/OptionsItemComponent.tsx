import React from 'react';
import {
    Box,
    Columns,
    Grid,
    RadioGroup,
    SelectOption,
    TextInput,
    TrashIcon,
} from '@canva/app-ui-kit';

import styles from './OptionsItemComponent.css';

type PropType = {
    option: SelectOption<string>;
};

const OptionsItemComponent = ({ option }: PropType) => {
    return (
        <Box display="flex" flexDirection="row" className={styles.container}>
            <div style={{ flex: 0 }}>
                <RadioGroup
                    key={'radiogroup'}
                    options={[
                        {
                            label: '',
                            value: option.value,
                        },
                    ]}
                />
            </div>

            <div style={{ flex: 1 }}>
                <TextInput value={option.label} />
            </div>
            <div style={{ flex: 0 }}>
                <div onClick={() => {}}>
                    <TrashIcon />
                </div>
            </div>
        </Box>
    );
};

export default OptionsItemComponent;
