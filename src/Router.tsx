import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { ErroPage } from "./pages/ErroPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErroPage />,
  },
  {
    path: "/link-tree",
    element: (
      <div>
        <h1>Link-tree</h1>
      </div>
    ),
    errorElement: <ErroPage />,
  },
]);

export { router };
