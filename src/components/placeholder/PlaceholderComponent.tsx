import React from 'react';
import { Placeholder } from '@canva/app-ui-kit';
import { Component } from 'src/models/component.model';

type PropType = {
    component: Component;
    isProperty: boolean;
    onChange?: (text: any) => void;
};

const PlaceholderComponent = ({
    component,
    isProperty,
    onChange,
}: PropType) => {
    if (isProperty) {
        return (
            <div>
                <div
                    style={{
                        width: '228px',
                        height: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 20,
                    }}
                >
                    <Placeholder shape="rectangle" />
                </div>
            </div>
        );
    }
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
