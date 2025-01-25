import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Form from "../pages/forms/Form";
import DynamicForms from "../pages/forms/DynamicForms";

export const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/react-hook-form-example" element={<Form />} />
      <Route path="/dynamic-react-hook-form-example" element={<DynamicForms />} />
    </Routes>
  );
};
