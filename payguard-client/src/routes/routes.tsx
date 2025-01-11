import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../components/layout/MainLayout";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import { routeGenerator } from "../utils/routeGenerator";

const role = "admin"; // Replace with dynamic role handling logic (e.g., from Redux or API)

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routeGenerator(role === "admin" ? adminPaths : userPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
