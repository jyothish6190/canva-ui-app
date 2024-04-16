import * as React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import EditPage from './components/Editpage/Editpage';
import HomePage from './pages/home/HomePage';
import ComponentDetailsPage from './pages/component-detail/ComponentDetailsPage';
import IconsListPage from './pages/icons/IconsListPage';

import styles from 'styles/components.css';

export const App = () => {
    return (
        <div className={styles.scrollContainer}>
            <Router>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/icons" element={<IconsListPage />} />
                    <Route path="/edit" element={<EditPage />} />
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
