import React from 'react';
import { Placeholder } from '@canva/app-ui-kit';

const PlaceholderComponent = () => {
    return (
        <div>
            {/* First Row */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                }}
            >
                <div
                    style={{
                        width: '128px',
                        height: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 20,
                    }}
                >
                    <Placeholder shape="rectangle" />
                </div>
                <div
                    style={{
                        width: '128px',
                        height: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 20,
                    }}
                >
                    <Placeholder shape="rectangle" />
                </div>
                <div
                    style={{
                        width: '90px',
                        height: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 20,
                    }}
                >
                    <Placeholder shape="rectangle" />
                </div>
            </div>
        </div>
    );
};

export default PlaceholderComponent;
