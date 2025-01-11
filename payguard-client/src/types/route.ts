import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export interface IRoute {
  path: string;
  element: ReactNode;
  name: string;
  icon: LucideIcon;
  children?: IRoute[];
}
