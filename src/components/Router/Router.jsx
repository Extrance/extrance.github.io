import {
  Navigate,
  createHashRouter,
} from "react-router-dom";

import Layout from "../Layout";
import ErrorPage from "../Error/ErrorPage";

import Home from "../Home/Home";
import Wishlist from "../Wishlist/Wishlist";
import Set from "../Set/Set";


export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        index: true,
        element: <Navigate to="/Home" />,
      },
      {
        path: "/Home",
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: ":id",
            element: <Set />,
          },
        ],
      },
      {
        path: "/Wishlist",
        element: <Wishlist />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
