import React from 'react';
import { Slider } from '@canva/app-ui-kit';

const SliderComponent = () => {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div style={{ width: '80%', paddingLeft: 17 }}>
                <Slider defaultValue={0} max={100} min={0} step={1} />
            </div>
        </div>
    );
};

export default SliderComponent;
