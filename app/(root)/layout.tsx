import MobileNav from "@/components/Shared/MobileNavbar";
import Sidebar from "@/components/Shared/Sidebar";
import React from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="root">
        <Sidebar />
        <MobileNav />
          <div className="root-container">
              <div className="wrapper">
                {children}
              </div>
          </div>
      </main>
    );
}
  