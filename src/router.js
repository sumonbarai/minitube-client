import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import AddVideo from "./pages/AddVideo";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UpdateVideo from "./pages/UpdateVideo";
import Video from "./pages/Video";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "video/:id",
        element: <Video />,
      },
      {
        path: "addVideo",
        element: <AddVideo />,
      },
      {
        path: "update/:id",
        element: <UpdateVideo />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
