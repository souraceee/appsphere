import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AllApps from "../Pages/AllApps";
import MyInstallation from "../Pages/MyInstallation";
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout, // Header & Footer stay
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/apps/:id",
        Component: AppDetails, 
      },
      {
        path: "/installation",
        Component: MyInstallation,
      },
      {
        path: "*",
        Component: () => <ErrorPage />, 
      },
    ],
  },
]);

