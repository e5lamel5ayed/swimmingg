import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MyAcount from "./Pages/MyAcount/MyAcount";
import Booking from "./Pages/Booking";
import Login from "./Login/Login";
import Register from "./Login/Register";
import App from "./App";
import Classes from "./Pages/Classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/MyAcount",
    element: <MyAcount />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/classes",
    element: <Classes />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);