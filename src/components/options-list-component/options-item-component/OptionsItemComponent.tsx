import React from 'react';
import { Box, Checkbox, RadioGroup, TrashIcon } from '@canva/app-ui-kit';

import styles from './OptionsItemComponent.css';
import IconSelectionComponent from 'src/components/icon-selection-component/IconSelectionComponent';
import { Component, OptionItem } from 'src/models/component.model';

type PropType = {
    component: Component;
    option: OptionItem;
    onOptionChange: (option: OptionItem) => void;
    onDelete: (option: OptionItem) => void;
    showDeleteIcon: boolean;
};
type IconData = {
    value: string;
    Icon: () => JSX.Element;
};

const OptionsItemComponent = ({
    component,
    option,
    onOptionChange,
    onDelete,
    showDeleteIcon,
}: PropType) => {
    const renderOptionComponent = () => {
        switch (component?.optionType) {
            case 'radio':
                return (
                    <RadioGroup
                        key={'radiogroup'}
                        value={option.selected ? option.value : ''}
                        onChange={(value) => {
                            option.selected = true;
                            onOptionChange(option);
                        }}
                        options={[
                            {
                                label: '',
                                value: option.value,
                            },
                        ]}
                    />
                );
            case 'checkbox':
                return (
                    <Checkbox
                        key={'checkbox'}
                        value={option.value}
                        checked={option.selected}
                        onChange={(value, checked) => {
                            option.selected = checked;
                            onOptionChange(option);
                        }}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="row"
            className={styles.container}
            justifyContent="start"
        >
            {renderOptionComponent()}

            {option.description ? (
                <IconSelectionComponent
                    component={component}
                    optionField={option}
                />
            ) : (
                <div className={styles.inputContainer} key={option?.value}>
                    <input
                        value={undefined}
                        defaultValue={option.label as string}
                        className={styles['input-field']}
                        onChange={(e) => {
                            e.preventDefault();
                            onOptionChange(option);
                        }}
                    />
                </div>
            )}
            {showDeleteIcon && (
                <div
                    className={styles['trash-container']}
                    onClick={(event) => {
                        event.preventDefault();
                        onDelete(option);
                    }}
                >
                    <TrashIcon />
                </div>
            )}
        </Box>
    );
};

export default OptionsItemComponent;
