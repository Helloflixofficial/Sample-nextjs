"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { JoystickIcon, LogOut } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
export const NavbarRoutes = () => {
  const Pathname = usePathname();
  const isDashboardPage = Pathname?.startsWith("/dashboard");
  const isPlayerPage = Pathname?.includes("/chapter");
  return (
    <div className="flex gap-x-2 ml-auto">
      {isDashboardPage || isPlayerPage ? (
        <Link href="/">
          <Button variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit!
          </Button>
        </Link>
      ) : (
        <Link href="/dashboard/courses">
          <Button size="sm" variant="ghost">
            <JoystickIcon className="h-4 w-4 mr-2" />
            Dashboard!
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
