import React, { useState } from 'react';
import styles from './LivePreview.css';
import { DarkThemeIcon, LightThemeIcon } from 'assets/images/image.js';
import { tokens } from '@canva/app-ui-kit';
const LivePreview = ({ children }) => {
    const [bgcolor, setBgColor] = useState<string>(tokens.colorTertiaryActive);
    const HandleOnclick = () => {
        bgcolor === tokens.colorContrastFore
            ? setBgColor(tokens.colorTertiaryActive)
            : setBgColor(tokens.colorContrastFore);
    };
    return (
        <div
            className={
                bgcolor === tokens.colorContrastFore
                    ? 'theme light'
                    : 'theme dark'
            }
        >
            <div className={styles.container} style={{ background: bgcolor }}>
                <span className={styles['theme-btn']} onClick={HandleOnclick}>
                    <img
                        src={
                            bgcolor == tokens.colorContrastFore
                                ? LightThemeIcon
                                : DarkThemeIcon
                        }
                        alt="themeicon"
                    />
                </span>
                {children}
            </div>
        </div>
    );
};
export default LivePreview;
