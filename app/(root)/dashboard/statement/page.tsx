"use client";
import Loader from "@/app/components/Loader";
import React, { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

const BetAccordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-white shadow-md overflow-hidden">
      <div
        className="flex justify-between items-center bg-white cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between items-center p-4">
            <span className="text-base font-semibold text-primary">
              2025/8/22 (1)
            </span>
            <div className="flex items-center">
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <hr></hr>
          <div className="p-4 flex flex-row">
            <span className="text-base text-black font-medium mr-2">
              Stakes:
            </span>
            <span className="text-base text-black font-semibold">0.1</span>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t-8 border-l-8 border-r-8 border-gray-300">
          <div className="pb-3">
            <div className="bg-gray-100 p-3">
              <div className="flex justify-between items-center">
                <span className="text-red-500 font-bold">Over</span>
                <span className="text-base font-bold">2.75 @0.87</span>
              </div>
            </div>

            <div className="p-3 border-b border-gray-200">
              <div className="text-sm text-gray-600 font-medium space-y-1">
                <div>Soccer / Over/Under</div>
                <div>Rayong FC vs Nakhon Ratchasima</div>
                <div>Bet Time : 22/08/2025 2:17:02 PM</div>
              </div>
            </div>

            <div className="bg-white p-3">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="flex flex-row gap-2">
                    <span className="text-sm text-black font-medium">
                      Stakes:
                    </span>
                    <span className="text-sm text-black font-bold">0.1</span>
                  </div>
                  <div className="flex flex-row gap-2">
                    <span className="text-sm text-black font-medium">
                      Status:
                    </span>
                    <span className="text-orange-500 font-medium text-sm mr-2">
                      Running
                    </span>
                  </div>
                </div>
                <div
                  className="flex items-center"
                  onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
                >
                  <svg
                    className="w-4 h-4 text-blue-500 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {isDetailsExpanded && (
              <div
                id="bet-details-container"
                className="mx-3 p-3 bg-gray-100 space-y-2"
              >
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-black">
                      *Thailand League 1
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Date :</span>
                    <span className="text-sm text-black font-medium">
                      22/08/2025 8:00PM
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Odds Type:</span>
                    <span className="text-sm text-black font-medium">HK</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">ID:</span>
                    <span className="text-sm text-black font-medium">
                      OU13162430991
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Result:</span>
                    <button
                      className="text-sm text-primary flex items-center font-semibold"
                      onClick={() => router.push("/dashboard/results")}
                    >
                      View Details
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Page = () => {
  const { isLoggedIn, isHydrated } = useAuthStore();
  const [activeTab, setActiveTab] = useState("open");
  const [activeSettledTab, setActiveSettledTab] = useState("today");
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
        <div className="flex flex-col justify-center items-center p-4 px-3">
          <div className="flex flex-row gap-2 bg-white shadow-md rounded-lg p-4 w-full max-w-md">
            <span className="text-base font-medium mr-2">
              {"Total Stakes: "}
            </span>
            <span className="text-base font-bold">{"1.00"}</span>
          </div>
        </div>
        <div id="open-bet-container" className="">
          <BetAccordion />
        </div>
      </div>
    );
  };

  const renderSettledTab = () => {
    const settledTabs = [
      { id: "today", label: "Today" },
      { id: "last2days", label: "Last 2 Days" },
      { id: "last14days", label: "Last 14 Days" },
    ];

    const renderSettledContent = () => {
      return (
        <div className="flex flex-col item-center">
          <div className="flex flex-col justify-center items-center p-4 px-3">
            <div className="flex flex-col gap-2 bg-white shadow-md rounded-lg p-4 w-full max-w-md">
              <div className="flex flex-row">
                <span className="text-base font-medium mr-2">
                  {"Total Stakes: "}
                </span>
                <span className="text-base font-bold">{"1.00"}</span>
              </div>
              <div className="flex flex-row">
                <span className="text-base font-medium mr-2">
                  {"Win / Loss: "}
                </span>
                <span className="text-base font-bold text-win">{"0.00"}</span>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-row justify-center">
            <span className="text-base font-medium text-black">
              {"No open bets"}
            </span>
          </div> */}

          <div id="settled-bet-container" className="">
            <BetAccordion />
          </div>
        </div>
      );
    };

    return (
      <div id="settled-tab" className="flex flex-col">
        <div className="grid grid-cols-3 bg-secondary p-2 gap-2">
          {settledTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSettledTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeSettledTab === tab.id
                  ? "bg-primary text-white font-semibold shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex-1">{renderSettledContent()}</div>
      </div>
    );
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
