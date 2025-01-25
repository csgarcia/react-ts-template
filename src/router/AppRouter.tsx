import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { SiteRoutes } from "./SiteRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* Add for example a login route without nav bar */}
      <Routes>
        <Route
          path="/*"
          element={
            // <PrivateRoutes> //  this in case we want to validate a session
            <SiteRoutes />
            // </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
