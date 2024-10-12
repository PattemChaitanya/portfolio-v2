import React from "react";
import AppRoutes from "./config/routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return <RouterProvider router={AppRoutes} />;
};

export default App;
