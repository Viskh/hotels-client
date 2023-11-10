import { Route, Routes, useLocation } from "react-router-dom";

import Test from "pages/Test";

export const Routing = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Test />} />
    </Routes>
  );
};
