import * as React from 'react';
import styles from 'styles/components.css';
import MainPage from './components/MainPage/MainPage';
import IconSelectionpage from './components/IconSelectorpage/IconSelectionpage';

export const App = () => {
    return (
        <div className={styles.scrollContainer}>
            <MainPage />
            <IconSelectionpage />
        </div>
    );
};
