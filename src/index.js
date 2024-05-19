import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage/HomePage";
import MyAcount from "./Pages/MyAcount/MyAcount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/HomePage",
    element: <HomePage/>,
  },
  {
    path: "/MyAcount",
    element: <MyAcount/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);