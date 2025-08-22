"use client";
import { X, RotateCcw } from "lucide-react";
import React, { useState } from "react";

export type MatchTable = {
  id: number;
  name: string;
  type: string;
  matches?: MatchGroup[];
  teams?: MatchTeam[];
};

export type MatchTeam = {
  id: number;
  name: string;
  odd: number;
};

export type MatchGroup = {
  id: number;
  time: {
    result?: string;
    status?: string;
  };
  status?: string;
  team?: Team[];
};

export type Team = {
  name: string;
  highlight: boolean;
  fulltime: PeriodStats[];
  firsthalf: PeriodStats[];
};

export type PeriodStats = {
  hdp: StatEntry;
  ou: StatEntry;
  oxt: OddEntry;
  oe: OeEntry;
};

export type StatEntry = {
  left: string;
  right: string;
};

export type OddEntry = {
  odd: string;
};

export type OeEntry = {
  type: "O" | "E";
  odd: string;
};

interface MobileMoreBetPopupProps {
  isOpen: boolean;
  matchGroup: MatchGroup | null;
  event_title: string | null;
  onClose: () => void;
  onBet: () => void;
}

const MobileMoreBetPopup: React.FC<MobileMoreBetPopupProps> = ({
  isOpen,
  matchGroup,
  event_title,
  onClose,
  onBet,
}) => {
  const [activeTab, setActiveTab] = useState("Main");

  const tabs = [
    { id: "Main", label: "Main" },
    { id: "FullTime", label: "Full Time" },
    { id: "DoubleChance", label: "Double Chance" },
  ];

  const handleRefresh = () => {
    // Logic to refresh data
    console.log("Refreshing data...");
  };

  const handleBet = () => {
    onBet();
    console.log("Bet placed!");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[100%] bg-white flex flex-col dark:bg-[rgb(43,43,43)] shadow-lg transform transition-[transform, background] duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div
            id="morebet-header"
            className="flex flex-col gap-2 bg-[rgb(43,43,43)] text-white p-4"
          >
            <div className="flex flex-row items-start justify-between gap-3 flex-shrink-0">
              {event_title ? (
                <h2 className="text-base font-semibold">{`${event_title}`}</h2>
              ) : (
                <h2 className="text-base font-semibold">{""}</h2>
              )}

              <button onClick={onClose} className="">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div
          id={"morebet-subheader"}
          className="flex items-center justify-between bg-[rgb(43,43,51)] dark:bg-gray-700  p-2"
        >
          {/* Swipable Tab Buttons */}
          <div className="flex flex-1 overflow-x-auto no-scrollbar">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "bg-sky-500 text-black font-semibold"
                      : "bg-[rgb(43,43,51)] dark:bg-gray-600 text-white dark:text-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reload Button */}
          <button
            onClick={handleRefresh}
            className="ml-2 p-2 rounded-full bg-[rgb(43,43,51)] dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
          >
            <RotateCcw className="w-5 h-5 text-secondary dark:text-gray-300" />
          </button>
        </div>

        {!matchGroup && (
          <div className="flex flex-1 justify-center items-center">
            <h2 className="text-base font-semibold">
              {"Error Loading Data.. please try again."}
            </h2>
          </div>
        )}
        {matchGroup && (
          <div className="flex flex-col flex-1 p-2 bg-gray-200">
            <div className="flex flex-col">
              <div className="bg-gradient-to-r from-secondary_dark to-secondary p-3">
                <h2 className="text-base text-white font-bold">
                  {"1H.Double Chance"}
                </h2>
              </div>
              <div className="bg-white flex flex-col p-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"Home or Draw"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"Home or Away"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"Away or Draw"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gradient-to-r from-secondary_dark to-secondary p-3">
                <h2 className="text-base text-white font-bold">{"Odd/Even"}</h2>
              </div>
              <div className="bg-white flex flex-col p-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"Odd"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"Even"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gradient-to-r from-secondary_dark to-secondary p-3">
                <h2 className="text-base text-white font-bold">
                  {"Correct Score"}
                </h2>
              </div>
              <div className="bg-white flex flex-col p-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"1-0"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"0-0"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"0-1"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"2-0"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"1-1"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"0-2"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"2-1"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"2-2"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-base text-black font-medium">
                      {"1-2"}
                    </h2>
                    <button
                      onClick={() => handleBet()}
                      className="border border-gray-400 p-1 rounded-xl w-full"
                    >
                      <p className="text-center text-lg font-bold">{"2.00"}</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMoreBetPopup;
