import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
