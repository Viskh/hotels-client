import { Route, Routes, useLocation } from 'react-router-dom';

export const Routing = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path="/" element={<div>Hello dawn</div>} />
        </Routes>
    );
};
