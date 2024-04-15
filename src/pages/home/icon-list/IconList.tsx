import React from 'react';

import {
    CheckIcon,
    XIcon,
    MusicIcon,
    PauseIcon,
    CodeIcon,
    PlayFilledIcon,
} from '@canva/app-ui-kit';

import styles from './icon-list.css';

type IconListType = {
    onClick: () => void;
};

const IconList = ({ onClick }: IconListType) => {
    return (
        <div
            className={styles.container}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
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
};

export default IconList;
