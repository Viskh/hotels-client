import { Route, Routes, useLocation } from "react-router-dom";

import MainPage from "pages/MainPage";

export const Routing = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
