import { LucideIcon, File } from "lucide-react"; // Use File as fallback
import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  icon?: LucideIcon;
  label: string;
}

const SidebarLink = ({ to, icon: Icon = File, label }: SidebarLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative flex cursor-pointer items-center gap-3 transition-colors px-8 py-3 ${
          isActive
            ? "bg-gray-100 text-white dark:bg-gray-600"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200" />
          )}
          <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
          <span className="font-medium text-gray-800 dark:text-gray-100">
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
};

export default SidebarLink;
