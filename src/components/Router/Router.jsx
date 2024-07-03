import {
  Navigate,
  createHashRouter,
} from "react-router-dom";

import Layout from "../Layout";
import ErrorPage from "../Error/ErrorPage";

import Wishlist from "../Wishlist/Wishlist";
import Set from "../Set/Set";
import WhoAmI from "../WhoAmI/WhoAmI";
import Collection from "../Collection/Collection";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        index: true,
        element: <Navigate to="/WhoAmI" />,
      },
      {
        path: "/WhoAmI",
        children: [
          {
            index: true,
            element: <WhoAmI />,
          },
        ],
      },
      {
        path: "/Collection",
        children: [
          {
            index: true,
            element: <Collection />,
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
        path: "/whoami",
        element: <WhoAmI />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
