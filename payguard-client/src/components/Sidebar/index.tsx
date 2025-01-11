import { Lock, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setIsSidebarCollapsed } from "../../redux/features/globalState";
import SidebarLink from "../SidebarLink";
import { adminPaths } from "../../routes/admin.routes";
import { userPaths } from "../../routes/user.routes";

const Sidebar = ({ role }: { role: "admin" | "user" }) => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const paths = role === "admin" ? adminPaths : userPaths;

  const siderBarClassName = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-transform duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white
    ${isSidebarCollapsed ? "-translate-x-full" : "translate-x-0"}
  `;

  return (
    <div className={siderBarClassName}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 ">
          <div className="text-xl font-bold text-gray-800 text-transparent dark:text-white">
            <h1 className="animate-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent">
              DASHBOARD
            </h1>
          </div>
          {!isSidebarCollapsed && (
            <button
              className="rounded-xl border-none bg-slate-50 text-2xl shadow-lg hover:bg-gray-500"
              onClick={() =>
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
              }
            >
              <X className="hover:text-black-500 h-5 w-5 cursor-pointer text-xl font-bold text-black hover:text-white" />
            </button>
          )}
        </div>
        <div className="flex items-center gap-4 border-y-[1.5px] border-gray-200 px-7 py-4 ">
          <div>
            <h3 className="tracking-wide text-md font-bold text-gray-500 dark:text-gray-300">
              {role === "admin" ? <h1>Admin Name</h1> : <h1>User Name</h1>}
            </h3>
            <div className="flex items-start gap-2">
              <Lock
                width={15}
                height={15}
                className="text-gray-500 dark:text-gray-300"
              />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>

        <nav className="z-10 w-full">
          {paths.map((path) => (
            <SidebarLink
              key={path.path}
              icon={path.icon}
              label={path.name || ""}
              to={path.path}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
