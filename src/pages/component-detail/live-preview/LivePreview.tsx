import React, { Children, useState } from 'react';
import { Button } from '@canva/app-ui-kit';
import styles from 'styles/components.css';
import { DarkThemeIcon, LightThemeIcon } from 'assets/images/image.js';

const LivePreview = ({ children }) => {
    const [bgcolor, setBgColor] = useState<string>('rgba(255, 255, 255, 0.07)');
    const HandleOnclick = () => {
        bgcolor === 'white'
            ? setBgColor('rgba(255, 255, 255, 0.07')
            : setBgColor('white');
    };

    return (
        <div className={styles.LivePreviewBox} style={{ background: bgcolor }}>
            <span className={styles.ThemeButton} onClick={HandleOnclick}>
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
