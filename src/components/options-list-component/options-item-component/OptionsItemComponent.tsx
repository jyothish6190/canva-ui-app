import React, { useState } from 'react';
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
import { useOptionStore } from 'src/store/OptionListStore';

type PropType = {
    option: SelectOption<string>;
    OptionType: OptionTypes | undefined;
};

const OptionsItemComponent = ({ option, OptionType }: PropType) => {
    const { deleteItem, OptionList, editItem } = useOptionStore();
    const [inputValue, setInputValue] = useState(option.label || ''); // Store input value in component state

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

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        editItem(option.value, newValue);
    };

    return (
        <Box display="flex" flexDirection="row" className={styles.container}>
            <div style={{ flex: 0 }}>{renderOptionComponent()}</div>

            <div style={{ flex: 1 }}>
                <TextInput
                    defaultValue={option.label}
                    value={undefined}
                    onBlur={changeHandler}
                />
            </div>
            {OptionList.length > 1 && (
                <div style={{ flex: 0 }}>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            deleteItem(option.value);
                        }}
                    >
                        <TrashIcon />
                    </div>
                </div>
            )}
        </Box>
    );
};

export default OptionsItemComponent;
