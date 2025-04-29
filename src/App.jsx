import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPageA from "./view/MyPageA.jsx";
import MyPageB from "./view/MyPageB.jsx";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyPageA />} />
          <Route path="/wow" element={<MyPageB />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
