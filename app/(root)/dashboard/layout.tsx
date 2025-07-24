"use client";
import React, { useEffect } from "react";
import DashboardMenu from "./components/DashboardMenu";
import DashboardFooter from "./components/DashboardFooter";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import DashboardSideBar from "./components/DashboardSideBar";
import { useAppStore } from "@/store/useAppStore";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isHydrated, isLoggedIn } = useAuthStore();
  const router = useRouter();
  const { uiType } = useAppStore();

  useEffect(() => {
    if (isHydrated && !isLoggedIn) {
      router.push("/");
    }
  }, [isHydrated, isLoggedIn, router]);

  return (
    <div className="flex w-screen justify-center bg-gray-100">
      <div
        className={`
          flex flex-col w-screen max-w-screen-lg bg-gray-100 text-black
          ${uiType === "mobile" ? "h-screen max-h-screen overflow-hidden" : ""}
        `}
      >
        <DashboardMenu />

        {/* Scrollable content area */}
        <main
          data-lenis-prevent
          className={`
            flex-1 overflow-auto
            flex flex-row items-start
            ${uiType === "mobile" ? "pb-16" : ""}
          `}
        >
          {uiType === "desktop" && (
            <div className="w-1/4 p-2 bg-[rgb(164,164,164)]">
              <DashboardSideBar />
            </div>
          )}

          <div className={`${uiType === "desktop" ? "w-3/4" : "w-full"}`}>
            {children}
          </div>
        </main>

        {/* Fixed footer for mobile */}
        {uiType === "mobile" && (
          <div className="fixed bottom-0 left-0 w-full max-w-screen-lg z-10">
            <DashboardFooter />
          </div>
        )}
      </div>
    </div>
  );
}
