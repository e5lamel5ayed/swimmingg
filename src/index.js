import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/HomePage",
    element: <HomePage/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);