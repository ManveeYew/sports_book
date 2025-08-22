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
    return (
      <div id="open-tab" className="flex flex-col">
        <div className="bg-sky-50 flex flex-row justify-start items-center p-2">
          <span className="text-base font-medium">{"1 Open Bets"}</span>
        </div>
        <div className="flex flex-col justify-center items-center p-4 px-2">
          <div className="flex flex-row gap-2 bg-white shadow-md rounded-lg p-4 w-full max-w-md">
            <span className="text-base font-medium">{"Total Stakes: "}</span>
            <span className="text-base font-bold">{"1.00"}</span>
          </div>
        </div>
        <div></div>
        Open Tab Content
      </div>
    );
  };

  const renderSettledTab = () => {
    return <div>Settled Tab Content</div>;
  };

  return (
    <div className="relative flex h-full bg-gray-300">
      {!isHydrated && (
        <div className="flex justify-center items-center h-screen bg-white">
          <Loader />
        </div>
      )}

      {isHydrated && isLoggedIn && (
        <div className="flex flex-col flex-1">
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
          <div className="flex flex-col h-full ">
            {activeTab === "open" && renderOpenTab()}
            {activeTab === "settled" && renderSettledTab()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
