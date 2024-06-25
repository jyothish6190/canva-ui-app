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
    fileInputwidth: string | undefined;
    fileOptionView: boolean;
    fileOption: any[];
    height: number;
};

const initialState: FileInputStateData = {
    fileInputwidth: undefined,
    fileOptionView: false,
    fileOption: [],
    height: 0,
};
const FileInputComponent = ({ component, isProperty, onChange }: PropType) => {
    const [fileInputData, setFileInputData] =
        useState<FileInputStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === FileInputFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setFileInputData((prevState) => {
                            return {
                                ...prevState,
                                fileInputwidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setFileInputData((prevState) => {
                            return {
                                ...prevState,
                                fileInputwidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setFileInputData((prevState) => {
                            return {
                                ...prevState,
                                fileInputwidth: field.value
                                    ? `${field.value}px`
                                    : undefined,
                            };
                        });
                    }
                }
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

    useEffect(() => {
        Height();
    }, [fileInputData.fileOption]);

    const Height = () => {
        const divelement = document.querySelector('#fileInput');

        if (divelement) {
            setFileInputData((prevState) => {
                return {
                    ...prevState,
                    height: (divelement as HTMLElement).offsetHeight,
                };
            });
        }
    };

    if (isProperty) {
        return (
            <div
                id={fileInputData.fileOptionView ? 'fileInput' : ''}
                style={{
                    width: fileInputData.fileInputwidth || undefined,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '0.5px',
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
                        gap: fileInputData.fileOption ? '5px' : undefined,
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
