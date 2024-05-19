import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from "./App";
import Login from "./Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Login/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);