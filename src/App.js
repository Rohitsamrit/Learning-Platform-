import React from "react";
import CourseCatalogPage from "./pages/CourseCatalogPage";
import { Routes, Route } from "react-router-dom";
import Profile_Interface from "./pages/Profile_Interface";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile" element={<Profile_Interface />} />
      <Route path="/courses" element={<CourseCatalogPage />} />
    </Routes>
  );
}

export default App;
