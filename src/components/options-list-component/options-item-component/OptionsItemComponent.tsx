import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Checkbox,
    CheckboxOption,
    FormField,
    RadioGroup,
    SelectOption,
    TextInput,
    TrashIcon,
} from '@canva/app-ui-kit';

import styles from './OptionsItemComponent.css';
import { OptionTypes } from 'src/constants/ComponentTypes';

type PropType = {
    option: SelectOption<string> | any;
    OptionType: OptionTypes | undefined;
    onChange: (
        updatedOption: string,
        newValue: string,
        checked: boolean,
        description: string | null,
        keyValue: number | null
    ) => void;
    onClick?: (optionKey: number) => void;
    showDeleteIcon: boolean;
    radioChecked: string;
    setRadioChecked: React.Dispatch<any>;
};

const OptionsItemComponent = ({
    option,
    OptionType,
    onChange,
    onClick,
    showDeleteIcon,
    radioChecked,
    setRadioChecked,
}: PropType) => {
    const inputRef = useRef(null);
    const [isOnFocus, setOnFocus] = useState<boolean>(false);

    const renderOptionComponent = () => {
        switch (OptionType) {
            case OptionTypes.RADIO:
                return (
                    <RadioGroup
                        key={'radiogroup'}
                        value={option.value === radioChecked && option.value}
                        onChange={(value) => {
                            setRadioChecked(value);
                        }}
                        options={[
                            {
                                label: '',
                                value: option.value,
                            },
                        ]}
                    />
                );
            case OptionTypes.CHECKBOX:
                return (
                    <Checkbox
                        key={'checkbox'}
                        value={option.value}
                        checked={option.checked}
                        onChange={(value, checked) =>
                            onChange(
                                option.value,
                                value,
                                checked,
                                null,
                                option.key
                            )
                        }
                    />
                );
            default:
                return null;
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <Box display="flex" flexDirection="row" className={styles.container}>
            <div style={{ flex: 0 }}>{renderOptionComponent()}</div>

            <div
                className={styles.inputContainer}
                key={option?.value}
                style={{
                    borderColor: isOnFocus
                        ? 'var(--ui-kit-color-border-active)'
                        : '',
                }}
            >
                <input
                    ref={inputRef}
                    value={undefined}
                    defaultValue={option.label}
                    className={styles.inputField}
                    onFocus={() => {
                        setOnFocus(true);
                    }}
                    onBlur={() => {
                        setOnFocus(false);
                    }}
                    onChange={(e) => {
                        onChange(
                            option.value,
                            e.target.value,
                            option.checked,
                            null,
                            option.key
                        );
                    }}
                />
            </div>
            {showDeleteIcon && (
                <div style={{ flex: 0, cursor: 'pointer' }}>
                    <div onClick={() => onClick && onClick(option.key)}>
                        <TrashIcon />
                    </div>
                </div>
            )}
        </Box>
    );
};

export default OptionsItemComponent;
