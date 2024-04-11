import React from 'react';
import {
    CheckIcon,
    XIcon,
    MusicIcon,
    PauseIcon,
    CodeIcon,
} from '@canva/app-ui-kit';

export default function IconDiv() {
    return (
        <div
            style={{
                display: 'flex',
                background: 'var(--Neutral-colorNeutralLow, #FFFFFF12)',
                height: '90px',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
            }}
        >
            <CheckIcon />
            <div style={{ flex: '1' }}></div> {/* Empty div for spacing */}
            <XIcon />
            <div style={{ flex: '1' }}></div> {/* Empty div for spacing */}
            <MusicIcon />
            <div style={{ flex: '1' }}></div> {/* Empty div for spacing */}
            <PauseIcon />
            <div style={{ flex: '1' }}></div> {/* Empty div for spacing */}
            <CodeIcon />
        </div>
    );
}
