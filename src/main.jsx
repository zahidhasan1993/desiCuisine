import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import PublicRoutes from "./Components/Routers/PublicRoutes.jsx";
import AuthProvider from "./Components/providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={PublicRoutes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
