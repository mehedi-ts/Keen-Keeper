import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Timeline from "./../Pages/Timeline";
import Stats from "./../Pages/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "timeline",
        Component: Timeline,
      },
      {
        path: "stats",
        Component: Stats,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
