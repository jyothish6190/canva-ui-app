import React, { useState } from 'react';
import styles from './LivePreview.css';
import DarkThemeIcon from 'assets/icons/dark.svg';
import LightThemeIcon from 'assets/icons/light.svg';
import { tokens } from '@canva/app-ui-kit';
const LivePreview = ({ children }) => {
    const [bgcolor, setBgColor] = useState<string>(tokens.colorContrastFore);
    const HandleOnclick = () => {
        bgcolor === tokens.colorContrastFore
            ? setBgColor(tokens.colorContrastActive)
            : setBgColor(tokens.colorContrastFore);
    };
    return (
        <div style={{ background: bgcolor, borderRadius: '4px' }}>
            <div
                className={`${styles.container} ${
                    bgcolor === tokens.colorContrastFore
                        ? 'theme light'
                        : 'theme dark'
                }`}
                style={{
                    background:
                        bgcolor === tokens.colorContrastFore
                            ? 'var(--ui-kit-color-neutral-low)'
                            : 'var(--ui-kit-color-neutral)',
                }}
            >
                <span className={styles['theme-btn']} onClick={HandleOnclick}>
                    {bgcolor == tokens.colorContrastFore ? (
                        <LightThemeIcon className={styles.themeContainer} />
                    ) : (
                        <DarkThemeIcon className={styles.themeContainer} />
                    )}
                </span>
                {children}
            </div>
        </div>
    );
};
export default LivePreview;
