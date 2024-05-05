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
    FileInputwidth: number | undefined;
};

const initialState: FileInputStateData = {
    FileInputwidth: undefined,
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
                        FileInputwidth: field.value || undefined,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div style={{ width: fileInputData.FileInputwidth || undefined }}>
                <FileInput accept={OptionList} stretchButton={true} />
                {OptionList.map((option, index) => {
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
