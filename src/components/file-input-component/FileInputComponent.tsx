import React, { useEffect, useState } from 'react';

import { FileInput, FileInputItem } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { useOptionStore } from 'src/store/OptionListStore';
import { FileInputFieldNames } from 'src/constants/component-configs/FileInputConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (changes: boolean) => void;
};
type FileInputStateData = {
    fileInputwidth: number | undefined;
    fileOptionView: boolean;
};

const initialState: FileInputStateData = {
    fileInputwidth: undefined,
    fileOptionView: false,
};
const FileInputComponent = ({ component, isProperty, onChange }: PropType) => {
    const [fileInputData, setFileInputData] =
        useState<FileInputStateData>(initialState);

    const { OptionList } = useOptionStore();

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === FileInputFieldNames.WIDTH) {
                setFileInputData((prevState) => {
                    return {
                        ...prevState,
                        fileInputwidth: field.value || undefined,
                    };
                });
            }
            if (field.name === FileInputFieldNames.FILE_INPUT_ITEM) {
                setFileInputData((prevState) => {
                    return {
                        ...prevState,
                        fileOptionView: field.value,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div style={{ width: fileInputData.fileInputwidth || undefined }}>
                <FileInput accept={OptionList} stretchButton={true} />
                {fileInputData.fileOptionView === true &&
                    OptionList &&
                    OptionList.map((option, index) => {
                        return (
                            <FileInputItem
                                key={index}
                                label={option.label}
                                onDeleteClick={() => void null}
                            />
                        );
                    })}
            </div>
        );
    }
    return (
        <div style={{ padding: 16 }}>
            <FileInput />
        </div>
    );
};

export default FileInputComponent;
