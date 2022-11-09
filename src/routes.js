import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Links from "./pages/Links/Links.js";

function RoutesApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Links" element={<Links />} />
      </Routes>
    </HashRouter>
  );
}

export default RoutesApp;
