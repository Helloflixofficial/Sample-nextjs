import { NavbarRoutes } from "./navbarbox/navbar-routes";
import { Mobilesidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-[#FBF6EE] shadow-sm">
      <Mobilesidebar />
      <NavbarRoutes />
    </div>
  );
};
