import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import IconSelectionpage from './components/IconSelectorpage/IconSelectionpage';
import EditPage from './components/Editpage/Editpage';
import HomePage from './pages/home/HomePage';
import ComponentDetailsPage from './pages/component-detail/ComponentDetailsPage';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/icons" element={<IconSelectionpage />} />
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

export default AppRouter;
