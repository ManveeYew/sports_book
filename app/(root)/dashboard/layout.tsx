// app/dashboard/layout.tsx
import React from "react";
import DashboardMenu from "./components/DashboardMenu";
import DashboardFooter from "./components/DashboardFooter";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen justify-center bg-gray-100">
      <div className="flex flex-col w-full max-w-screen-lg bg-gray-100 text-black">
        <DashboardMenu />

        <main className="flex-1 px-4 py-6">{children}</main>

        <DashboardFooter />
      </div>
    </div>
  );
}
