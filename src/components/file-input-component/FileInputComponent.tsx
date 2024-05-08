import React, { useEffect, useState } from 'react';

import { FileInput, FileInputItem } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { FileInputFieldNames } from 'src/constants/component-configs/FileInputConfig';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (changes: boolean) => void;
};
type FileInputStateData = {
    fileInputwidth: number | undefined;
    fileOptionView: boolean;
    fileOption: any[];
};

const initialState: FileInputStateData = {
    fileInputwidth: undefined,
    fileOptionView: false,
    fileOption: [],
};
const FileInputComponent = ({ component, isProperty, onChange }: PropType) => {
    const [fileInputData, setFileInputData] =
        useState<FileInputStateData>(initialState);

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
            if (field.name === FileInputFieldNames.FILE_INPUT_OPTIONS) {
                setFileInputData((prevState) => {
                    return {
                        ...prevState,
                        fileOption: field.options as any[],
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                style={{
                    width: fileInputData.fileInputwidth || undefined,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}
            >
                <FileInput
                    accept={fileInputData.fileOption}
                    stretchButton={true}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                    }}
                >
                    {fileInputData.fileOptionView === true &&
                        fileInputData.fileOption &&
                        fileInputData.fileOption.map((option, index) => {
                            return (
                                <FileInputItem
                                    key={index}
                                    label={option.label}
                                    onDeleteClick={() => void null}
                                />
                            );
                        })}
                </div>
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
