"use client";

import Sidebar from "./_Components/Sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="h-full">
        <div className="fixed w-full ">
          <Sidebar />
        </div>
        <main className="md:pl-56 pt-[80px]">{children}</main>
      </div>
    </>
  );
}
