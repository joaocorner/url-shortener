import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Links from "./pages/Links/Links.js";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/url-shortener/Links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
