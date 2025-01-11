import { Home, WalletCards } from "lucide-react";
import UserDashboard from "../pages/user/UserDashboard";
import Payment from "../pages/user/Payment";

export const userPaths = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Home,
    element: <UserDashboard />,
  },
  {
    name: "Payments",
    path: "/payments",
    icon: WalletCards,
    element: <Payment />,
  },
];
