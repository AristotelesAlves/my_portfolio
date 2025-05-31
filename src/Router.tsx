import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { ErroPage } from "./pages/ErroPage";
import LinkTree from "./pages/link-tree/LinkTree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErroPage />,
  },
  {
    path: "/link-tree",
    element: <LinkTree />,
    errorElement: <ErroPage />,
  },
]);

export { router };
