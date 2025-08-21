"use client";
import Loader from "@/app/components/Loader";
import React, { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

const Page = () => {
  const { isLoggedIn, isHydrated } = useAuthStore();
  const [activeTab, setActiveTab] = useState("open");
  const router = useRouter();

  const tabs = [
    { id: "open", label: "OPEN", type: "tab", url: "" },
    {
      id: "settled",
      label: "SETTLED",
      type: "tab",
      url: "",
    },
    { id: "result", label: "RESULT", type: "url", url: "/dashboard/results" },
  ];

  const renderOpenTab = () => {
    return <div>Open Tab Content</div>;
  };

  const renderSettledTab = () => {
    return <div>Settled Tab Content</div>;
  };

  return (
    <div className="relative flex flex-1 min-h-screen bg-white">
      {!isHydrated && (
        <div className="flex justify-center items-center h-screen bg-white">
          <Loader />
        </div>
      )}

      {isHydrated && isLoggedIn && (
        <div className="flex flex-col w-full h-full">
          <div className="grid grid-cols-3 xs:grid-cols-3 bg-[rgb(43,43,43)] p-2 gap-2">
            {tabs.map((tab) => {
              if (tab.type === "url") {
                return (
                  <button
                    key={tab.id}
                    onClick={() => router.push(tab.url)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? "bg-gradient-to-b from-secondary to-secondary_dark text-black font-semibold"
                        : "bg-[rgb(43,43,51)] dark:bg-gray-600 text-white dark:text-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              } else {
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? "bg-gradient-to-b from-secondary to-secondary_dark text-black font-semibold"
                        : "bg-[rgb(43,43,51)] dark:bg-gray-600 text-white dark:text-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              }
            })}
          </div>
          <div className="flex flex-col flex-1 bg-gray-100">
            {activeTab === "open" && renderOpenTab()}
            {activeTab === "settled" && renderSettledTab()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
