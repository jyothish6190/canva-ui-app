import React from 'react';
import {
    CheckIcon,
    PlayFilledIcon,
    XIcon,
    MusicIcon,
    PauseIcon,
    CodeIcon,
} from '@canva/app-ui-kit';
import styles from 'styles/components.css';

export default function IconDiv() {
    return (
        <div className={styles.iconsContainer}>
            <CheckIcon />
            <div style={{ flex: '1' }}></div>
            <XIcon />
            <div style={{ flex: '1' }}></div>
            <MusicIcon />
            <div style={{ flex: '1' }}></div>
            <PlayFilledIcon />
            <div style={{ flex: '1' }}></div>
            <PauseIcon />
            <div style={{ flex: '1' }}></div>
            <CodeIcon />
        </div>
    );
}
