import React, { useEffect } from 'react';
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
import IconSelctionComponent from 'src/components/icon-selection-component/IconSelectionComponent';
import { Component } from 'src/models/component.model';
import { useIconStore } from 'src/store/IconStore';

type PropType = {
    option: SelectOption<string>;
    OptionType: OptionTypes | undefined;
    onChange: (updatedOption: string, newValue: string, Icon: any) => void;
    onClick?: (optionValue: string) => void;
    showDeleteIcon: boolean;
    component: Component;
};

const OptionsItemComponent = ({
    option,
    OptionType,
    onChange,
    onClick,
    showDeleteIcon,
    component,
}: PropType) => {
    const { setIconsList: setSelectedIcons } = useIconStore();
    useEffect(() => {
        if (option.Icon) {
            setSelectedIcons({
                icon: option as any,
                componentId: option.label as any,
            });
        }
    }, [option.Icon, option.label]);

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
                {option.Icon ? (
                    <IconSelctionComponent
                        component={component}
                        optionField={option}
                    />
                ) : (
                    <TextInput
                        value={undefined}
                        defaultValue={option.label}
                        onChange={(value) =>
                            onChange(option.value, value, null)
                        }
                    />
                )}
            </div>
            {showDeleteIcon && (
                <div style={{ flex: 0, cursor: 'pointer' }}>
                    <div onClick={() => onClick && onClick(option.value)}>
                        <TrashIcon />
                    </div>
                </div>
            )}
        </Box>
    );
};

export default OptionsItemComponent;
