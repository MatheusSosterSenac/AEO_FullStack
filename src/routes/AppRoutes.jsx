import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Sobre from "../pages/html";
import Body from "../layout/Body";
import PrincipiosCard from "../pages/react";
import Theme from "../pages/node";
import DevOps from "../pages/devops";

export default function AppRoutes() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />} />
          <Route path="/html" element={<Sobre />} />
          <Route path="/react" element={<PrincipiosCard />} />
          <Route path="/node" element={<Theme />} />
          <Route path="/devops" element={<DevOps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
