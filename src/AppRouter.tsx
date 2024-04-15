import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import IconSelectionpage from './components/IconSelectorpage/IconSelectionpage';
import EditPage from './components/Editpage/Editpage';
import HomePage from './pages/home/HomePage';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route
                        path="/containers/:containerId?"
                        element={<HomePage />}
                    />
                    <Route
                        path="/icons/:iconId?"
                        element={<IconSelectionpage />}
                    />
                    <Route path="/edit" element={<EditPage />} />
                    <Route
                        path="*"
                        element={<Navigate replace to="/containers" />}
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default AppRouter;
