import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "./layouts/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SlideShowPage = lazy(()=> import("./pages/SlideShowPage/SlideShowPage"))

function App() {


  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="slide" element={<SlideShowPage/>}/>
      </Routes>
    </SharedLayout>
  );
}

export default App;
