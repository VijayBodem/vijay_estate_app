import HomePage from "./pages/home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listpage from "./pages/listpage/Listpage";
import Layout from "./pages/layout/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <Listpage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
