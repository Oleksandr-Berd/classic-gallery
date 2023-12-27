import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "./layouts/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
