import { Menu } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setIsSidebarCollapsed } from "../../redux/features/globalState";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <header className="flex items-center justify-between bg-white px-4 py-3 shadow dark:bg-black">
      <div className="flex items-center gap-8">
        <button
          onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
        >
          <Menu className="h-8 w-8 dark:text-white" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
