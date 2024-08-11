import { NavbarRoutes } from "./navbarbox/navbar-routes";
import { Mobilesidebar } from "./mobile-sidebar";
export const Navbar = () => {
  return (
    <div className="p-7  h-full flex items-center bg-[#1A2130]">
      <div>
        <Mobilesidebar />
      </div>
      <NavbarRoutes />
    </div>
  );
};
