import React from 'react';
import {
    CheckIcon,
    XIcon,
    MusicIcon,
    PauseIcon,
    CodeIcon,
    PlayFilledIcon,
} from '@canva/app-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function IconDiv() {
    const navigate = useNavigate();

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
            onClick={() => {
                navigate(`/icons`, {
                    state: {
                        id: '',
                        type: '',
                    },
                });
            }}
        >
            <CheckIcon />
            <div style={{ flex: '1' }}></div> {/* Empty div for spacing */}
            <XIcon />
            <div style={{ flex: '1' }}></div> {/* Empty div for spacing */}
            <MusicIcon />
            <div style={{ flex: '1' }}></div> {/* Empty div for spacing */}
            <PlayFilledIcon />
            <div style={{ flex: '1' }}></div> {/* Empty div for spacing */}
            <PauseIcon />
            <div style={{ flex: '1' }}></div> {/* Empty div for spacing */}
            <CodeIcon />
        </div>
    );
}
