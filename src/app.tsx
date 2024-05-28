import * as React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import ComponentDetailsPage from './pages/component-detail/ComponentDetailsPage';
import IconsListPage from './pages/icons/IconsListPage';

import styles from 'styles/components.css';

export const App = () => {
    return (
        <div className={styles.scrollContainer} id="container">
            <Router>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/icons" element={<IconsListPage />} />
                    <Route
                        path="/component-details"
                        element={<ComponentDetailsPage />}
                    />
                    <Route path="*" element={<Navigate replace to="/home" />} />
                </Routes>
            </Router>
        </div>
    );
};
