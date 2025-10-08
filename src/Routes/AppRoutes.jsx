import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AllApps from "../Pages/AllApps";
import MyInstallation from "../Pages/MyInstallation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,    // * Error Page
    hydrateFallbackElement: <p>Loading...</p>, // * Just to remove console error message of hydrateFallback

    children: [
      {
        // path: "/home",
        index: true,
        Component: Home,
        // loader: () => fetch("./furnitureData.json"),
      },
      {
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/installation",
        Component: MyInstallation,
      }
    ]
  }
])