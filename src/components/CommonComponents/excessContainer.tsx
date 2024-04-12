import React from 'react';

const ExcessContainer = ({ dynamic, children }) => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'auto',
                paddingLeft: '16px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div style={{ position: 'absolute', left: '-64px', right: 0 }}>
                <div style={{ width: dynamic, marginLeft: '16px' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ExcessContainer;
