import {
  createHashRouter,
} from "react-router-dom";

import Layout from "../Layout";
import ErrorPage from "../Error/ErrorPage";

import Home from "../Home/Home";


export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);
