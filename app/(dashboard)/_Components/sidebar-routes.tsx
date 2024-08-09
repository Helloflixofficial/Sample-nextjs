"use client";
import { BarChart, Compass, Layout, List } from "lucide-react";
import { SidebarItems } from "./sidebar-items";
import { usePathname } from "next/navigation";

const RestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Search",
    href: "/search",
  },
];

const DashboardRoutes = [
  {
    icon: List,
    label: "courses",
    href: "/dashboard/courses",
  },
  {
    icon: BarChart,
    label: "analytics",
    href: "/dashboard/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const isDashboardPage = pathname?.startsWith("/dashboard");
  const Routes = isDashboardPage ? DashboardRoutes : RestRoutes;
  return (
    <div className="flex flex-col w-full ">
      {Routes.map((route) => (
        <SidebarItems
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
