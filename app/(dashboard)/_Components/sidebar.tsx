import { SidebarRoutes } from "./sidebar-routes";
export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-0 bg-[#1A2130] shadow-sm">
      <div className="p-6">
        <h1>Movie Bar</h1>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
