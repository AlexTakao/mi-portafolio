import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";

import App from "./App";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // equivalente a path: "/"
        element: <Home />,
      },
      {
        path: "projects",
        element: <Proyectos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);