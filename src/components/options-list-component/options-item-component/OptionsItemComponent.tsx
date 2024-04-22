import React from 'react';
import {
    Box,
    Checkbox,
    RadioGroup,
    SelectOption,
    TextInput,
    TrashIcon,
} from '@canva/app-ui-kit';

import styles from './OptionsItemComponent.css';
import { OptionTypes } from 'src/constants/ComponentTypes';

type PropType = {
    option: SelectOption<string>;
    OptionType: OptionTypes | undefined;
};

const OptionsItemComponent = ({ option, OptionType }: PropType) => {
    const renderOptionComponent = () => {
        switch (OptionType) {
            case OptionTypes.RADIO:
                return (
                    <RadioGroup
                        key={'radiogroup'}
                        options={[
                            {
                                label: '',
                                value: option.value,
                            },
                        ]}
                    />
                );
            case OptionTypes.CHECKBOX:
                return <Checkbox key={'checkbox'} value={option.value} />;
            default:
                return null;
        }
    };

    return (
        <Box display="flex" flexDirection="row" className={styles.container}>
            <div style={{ flex: 0 }}>{renderOptionComponent()}</div>

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
