import React from 'react';
import { Select } from '@canva/app-ui-kit';

const SelectComponent = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 128,
                height: 128,
            }}
        >
            <Select options={[{ label: 'Option 1', value: '1' }]} />

            <img
                src={require('assets/images/select.png')}
                alt="Image 2"
                style={{
                    position: 'absolute',
                    bottom: -15,
                    right: -25,
                }}
            />
        </div>
    );
};

export default SelectComponent;
