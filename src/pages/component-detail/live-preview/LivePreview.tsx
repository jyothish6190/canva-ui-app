import React, { useEffect, useState } from 'react';
import styles from './LivePreview.css';
import DarkThemeIcon from 'assets/icons/dark.svg';
import LightThemeIcon from 'assets/icons/light.svg';
import { tokens } from '@canva/app-ui-kit';
import { useComponentStore } from 'src/store/ComponentStore';
const LivePreview = ({ children }) => {
    const { selectedComponent } = useComponentStore();

    useEffect(() => {
        setBgColor(
            selectedComponent?.theme === 'light'
                ? tokens.colorContrastFore
                : tokens.colorContrastActive
        );
    }, [selectedComponent]);

    const [bgcolor, setBgColor] = useState<string>(
        selectedComponent?.theme === 'light'
            ? tokens.colorContrastFore
            : tokens.colorContrastActive
    );

    const HandleOnclick = () => {
        if (bgcolor === tokens.colorContrastFore) {
            setBgColor(tokens.colorContrastActive);
            if (selectedComponent) {
                selectedComponent.theme = 'dark';
            }
        } else {
            setBgColor(tokens.colorContrastFore);
            if (selectedComponent) {
                selectedComponent.theme = 'light';
            }
        }
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
