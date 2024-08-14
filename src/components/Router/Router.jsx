import {
  Navigate,
  createHashRouter,
} from "react-router-dom";
import { BASE_PATH, BULLET } from "./paths";

import Layout from "../Layout";
import ErrorPage from "../Error/ErrorPage";
import Wishlist from "../Wishlist/Wishlist";
import Set from "../Set/Set";
import WhoAmI from "../WhoAmI/WhoAmI";
import Collection from "../Collection/Collection";
import Puzzles from "../Puzzles/Puzzles";

export const router = createHashRouter([
  {
    path: BASE_PATH,
    element: <Layout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        index: true,
        element: <Navigate to={BULLET.WHOAMI} />,
      },
      {
        path: BULLET.WHOAMI,
        children: [
          {
            index: true,
            element: <WhoAmI />,
          },
        ],
      },
      {
        path: BULLET.BRICKS,
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
        path: BULLET.PUZZLES,
        element: <Puzzles />,
      },
      {
        path: BULLET.WISHLIST,
        element: <Wishlist />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
