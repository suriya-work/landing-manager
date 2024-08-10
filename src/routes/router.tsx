import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import PageNotFound from "../404";
import MainPage from "../pages/page";

const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children : [
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
