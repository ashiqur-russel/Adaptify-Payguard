import { Home, WalletCards, User } from "lucide-react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserManagement from "../pages/admin/UserManagement";
import { IRoute } from "../types/route";

export const adminPaths: IRoute[] = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: Home,
    element: <AdminDashboard />,
  },
  {
    name: "Payments",
    path: "/admin/payments",
    icon: WalletCards,
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    path: "/user-management",
    icon: User,
    element: <UserManagement />,
  },
];
