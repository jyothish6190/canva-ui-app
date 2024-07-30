import React from 'react';

import {
    CheckIcon,
    XIcon,
    MusicIcon,
    PauseIcon,
    CodeIcon,
    PlayFilledIcon,
    Box,
    Text,
} from '@canva/app-ui-kit';

import styles from './icon-list.css';
import CardTitle from 'src/components/card-title/CardTitle';

type IconListType = {
    onClick: () => void;
};

const IconList = ({ onClick }: IconListType) => {
    return (
        <Box>
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
            <Text
                alignment="start"
                capitalization="default"
                size="small"
                variant="bold"
                lineClamp={1}
            >
                Icons
            </Text>
        </Box>
    );
};

export default IconList;
