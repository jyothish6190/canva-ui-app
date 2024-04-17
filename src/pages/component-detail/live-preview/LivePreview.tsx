import React, { useState } from 'react';

import styles from './LivePreview.css';
import { DarkThemeIcon, LightThemeIcon } from 'assets/images/image.js';

const LivePreview = ({ children }) => {
    const [bgcolor, setBgColor] = useState<string>('rgba(255, 255, 255, 0.07)');
    const HandleOnclick = () => {
        bgcolor === 'white'
            ? setBgColor('rgba(255, 255, 255, 0.07')
            : setBgColor('white');
    };

    return (
        <div className={styles.container} style={{ background: bgcolor }}>
            <span className={styles['theme-btn']} onClick={HandleOnclick}>
                <img
                    src={bgcolor == 'white' ? LightThemeIcon : DarkThemeIcon}
                    alt="themeicon"
                />
            </span>
            {children}
        </div>
    );
};

export default LivePreview;
