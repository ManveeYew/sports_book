"use client";
import React, { useEffect } from "react";
import DashboardMenu from "./components/DashboardMenu";
import DashboardFooter from "./components/DashboardFooter";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isHydrated, isLoggedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !isLoggedIn) {
      router.push("/");
    }
  }, [isHydrated, isLoggedIn, router]);

  return (
    <div className="flex w-screen justify-center bg-gray-100">
      <div className="flex flex-col w-full max-w-screen-lg bg-gray-100 text-black">
        <DashboardMenu />

        <main className="flex-1 py-6">{children}</main>

        <DashboardFooter />
      </div>
    </div>
  );
}
