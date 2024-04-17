import React from 'react';
import { Swatch } from '@canva/app-ui-kit';

const ColorSelectorComponent = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 128,
                height: 128,
            }}
        >
            <Swatch
                fill={['#E0D9FC']}
                onClick={() => {}}
                size="small"
                variant="solid"
            />
            <img
                src={require('assets/images/ColorPicker.png')}
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

export default ColorSelectorComponent;
