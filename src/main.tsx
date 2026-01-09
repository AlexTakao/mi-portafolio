import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";

import App from "./App";
import Home from "./pages/Home";
import Experience from "./pages/Experience";

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./pages/Contact";

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
        path: "experience",
        element: <Experience />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);