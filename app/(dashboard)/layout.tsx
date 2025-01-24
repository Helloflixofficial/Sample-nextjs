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
        {/* <div className="hidden border-r md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
          <Sidebar />
        </div> */}
        <main className="md:pl-56 pt-[80px]">{children}</main>
      </div>
    </>
  );
}
