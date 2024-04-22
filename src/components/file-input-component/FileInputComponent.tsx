import React from 'react';

import { FileInput } from '@canva/app-ui-kit';

import { Component } from 'src/models/coponent.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (changes: boolean) => void;
};

const FileInputComponent = ({ component, isProperty, onChange }: PropType) => {
    return (
        <div style={{ padding: 16 }}>
            <FileInput />
        </div>
    );
};

export default FileInputComponent;
