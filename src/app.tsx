import * as React from 'react';
import styles from 'styles/components.css';
import MainPage from './components/MainPage/MainPage';

export const App = () => {
    return (
        <div className={styles.scrollContainer}>
            <MainPage/>
        </div>
    );
};
