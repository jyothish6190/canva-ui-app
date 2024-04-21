import React from 'react';

import {
    Box,
    Checkbox,
    SelectOption,
    TextInput,
    TrashIcon,
} from '@canva/app-ui-kit';

import styles from './CheckBoxOptionsItemComponent.css';

type PropType = {
    option: SelectOption<string>;
};

const CheckBoxOptionsItemComponent = ({ option }: PropType) => {
    return (
        <Box display="flex" flexDirection="row" className={styles.container}>
            <div style={{ flex: 0 }}>
                <Checkbox key={'checkbox'} value={option.value} />
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

export default CheckBoxOptionsItemComponent;
