"use client";
import Loader from "@/app/components/Loader";
import React, { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

type SubCategory = {
  id: number;
  name: string;
  count?: number;
};

type Sport = {
  id: number;
  name: string;
  emoji?: string;
  icon?: string;
  is_live?: boolean;
  liveCount?: number;
  subCategories?: SubCategory[];
};

const sports: Sport[] = [
  {
    id: 1,
    name: "Hot",
    emoji: "🔥",
    liveCount: 29,
  },
  {
    id: 2,
    name: "Soccer",
    emoji: "⚽",
    liveCount: 916,
    is_live: true,
    subCategories: [
      { id: 1, name: "Today", count: 133 },
      { id: 2, name: "Early", count: 121 },
      { id: 3, name: "1X2 & Double Chance", count: 120 },
      { id: 4, name: "Correct Score", count: 104 },
      { id: 5, name: "Half Time/Full Time", count: 91 },
      { id: 6, name: "First Goal/Last Goal", count: 91 },
      { id: 7, name: "Mix Parlay", count: 118 },
      { id: 8, name: "Mix Parlay Combo", count: 129 },
      { id: 9, name: "Outright" },
    ],
  },
  {
    id: 3,
    name: "Basketball",
    emoji: "🏀",
    is_live: true,
    liveCount: 73,
    subCategories: [
      { id: 1, name: "HDP & OU", count: 133 },
      { id: 2, name: "Odd/Even & Total Goal", count: 121 },
      { id: 3, name: "1X2 & Double Chance", count: 120 },
      { id: 4, name: "Correct Score", count: 104 },
      { id: 5, name: "Outright" },
    ],
  },
  {
    id: 4,
    name: "Baseball",
    emoji: "⚾",
    is_live: false,
    liveCount: 50,
  },
  {
    id: 5,
    name: "Tennis",
    emoji: "🎾",
    liveCount: 244,
  },
  {
    id: 6,
    name: "American Football",
    emoji: "🏈",
    liveCount: 1,
  },
  {
    id: 7,
    name: "Rugby",
    emoji: "🏉",
    liveCount: 4,
  },
  {
    id: 8,
    name: "Badminton",
    emoji: "🏸",
    liveCount: 2,
  },
  {
    id: 9,
    name: "Volleyball",
    emoji: "🏐",
    liveCount: 33,
  },
  {
    id: 10,
    name: "Boxing",
    emoji: "🥊",
    liveCount: 11,
  },
  {
    id: 11,
    name: "Cricket",
    emoji: "🏏",
    liveCount: 36,
  },
];

const Page = () => {
  const { isLoggedIn, isHydrated } = useAuthStore();
  const [activeTab, setActiveTab] = useState("result");
  const [selectedSportType, setSelectedSportType] = useState("normal");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSport, setSelectedSport] = useState("1");
  const [selectedLeague, setSelectedLeague] = useState("all_leagues");
  const [expandedAccordions, setExpandedAccordions] = useState<string[]>([]);
  const router = useRouter();

  const tabs = [
    { id: "open", label: "OPEN", type: "url", url: "/dashboard/statement" },
    {
      id: "settled",
      label: "SETTLED",
      type: "url",
      url: "/dashboard/statement",
    },
    { id: "result", label: "RESULT", type: "tab", url: "" },
  ];

  const sportsOptions = [
    { id: "normal", label: "Sports (Normal)" },
    { id: "outright", label: "Sports (Outright)" },
  ];

  const leaguesOptions = [
    { id: "all_leagues", label: "All Leagues" },
    { id: "asean_club_championship", label: "Asean Club Championship" },
    { id: "korea_woman_k_league", label: "Korea Woman K-League" },
    { id: "finland_cup", label: "Finland Cup" },
  ];

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0]; // YYYY-MM-DD format
  };

  // Mock data for matches
  const matchResults = [
    {
      id: "asean-club-championship",
      league: "ASEAN Club Championship",
      icon: "⚽",
      matches: [
        {
          id: "1",
          date: "21/08/2025 5:30PM",
          team1: "Johor Darul Takzim FC",
          team2: "Lion City Sailors FC",
          status: "Pending",
          result1: "-",
          result2: "-",
        },
        {
          id: "2",
          date: "21/08/2025 7:30PM",
          team1: "Shan United (n)",
          team2: "Preah Khan Reach Svay Rieng",
          status: "Pending",
          result1: "-",
          result2: "-",
        },
      ],
    },
    {
      id: "korea-women-k-league",
      league: "Korea Women K-League",
      icon: "⚽",
      matches: [
        {
          id: "3",
          date: "21/08/2025 6:00PM",
          team1: "Seoul WFC",
          team2: "Incheon Hyundai Steel Red Angels WFC",
          status: "Pending",
          result1: "-",
          result2: "-",
        },
      ],
    },
  ];

  const toggleAccordion = (accordionId: string) => {
    setExpandedAccordions((prev) =>
      prev.includes(accordionId)
        ? prev.filter((id) => id !== accordionId)
        : [...prev, accordionId]
    );
  };

  const renderResultTab = () => {
    return (
      <div id="result-tab" className="flex flex-col">
        <div className="">
          <div className="relative">
            <select
              value={selectedSportType}
              onChange={(e) => setSelectedSportType(e.target.value)}
              className="w-full appearance-none bg-[rgb(16,125,174)] text-white font-semibold py-3 px-4 pr-10 border-0 focus:outline-none cursor-pointer"
            >
              {sportsOptions.map((sport) => (
                <option
                  key={sport.id}
                  value={sport.id}
                  className="bg-white text-black"
                >
                  {sport.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
              <svg
                className="h-5 w-5 text-black"
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
        <div id="date-selector" className="bg-secondary py-3 px-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={formatDate(selectedDate)}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                className="bg-transparent text-white font-semibold text-center border-none outline-none cursor-pointer"
                style={{ colorScheme: "light" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[30%] bg-white relative border-r border-gray-300">
            <select
              value={selectedSport}
              onChange={(e) => setSelectedSport(e.target.value)}
              className="w-full appearance-none bg-white text-black font-semibold py-2 px-4 pr-10 border-0 focus:outline-none cursor-pointer"
            >
              {sports.map((sport) => (
                <option
                  key={sport.id}
                  value={sport.id}
                  className="bg-white text-black"
                >
                  {sport.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
              <svg
                className="h-5 w-5 text-secondary"
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
          <div className="w-[70%] bg-white relative">
            <select
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(e.target.value)}
              className="w-full appearance-none bg-white text-black font-semibold py-2 px-4 pr-10 border-0 focus:outline-none cursor-pointer"
            >
              {leaguesOptions.map((league) => (
                <option
                  key={league.id}
                  value={league.id}
                  className="bg-white text-black"
                >
                  {league.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
              <svg
                className="h-5 w-5 text-secondary"
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

        <div id="result-container" className="flex-1 py-4 px-2">
          <div className="space-y-4">
            {matchResults.map((league) => (
              <div
                key={league.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => toggleAccordion(league.id)}
                  className="flex items-center justify-between p-4 bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{league.icon}</span>
                    <span className="font-semibold text-gray-900">
                      {league.league}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      expandedAccordions.includes(league.id) ? "rotate-180" : ""
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

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedAccordions.includes(league.id)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="border-t border-gray-200">
                    {league.matches.map((match) => (
                      <div
                        key={match.id}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-500">
                              {match.date}
                            </span>
                            <span className="text-sm font-medium text-orange-500">
                              {match.status}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-900 font-medium">
                                {match.team1}
                              </span>
                              <span className="text-gray-600 font-bold">
                                {match.result1}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-900 font-medium">
                                {match.team2}
                              </span>
                              <span className="text-gray-600 font-bold">
                                {match.result2}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Results Header Accordion for each match */}
                        <div className="bg-gray-50">
                          <div
                            onClick={() =>
                              toggleAccordion(
                                `${league.id}-${match.id}-results`
                              )
                            }
                            className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-100 transition-colors"
                          >
                            <div className="grid grid-cols-3 w-full text-sm font-semibold text-gray-600">
                              <span>First Half Score</span>
                              <span className="text-center">Final Score</span>
                              <span className="text-right">Status</span>
                            </div>
                            <svg
                              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ml-2 ${
                                expandedAccordions.includes(
                                  `${league.id}-${match.id}-results`
                                )
                                  ? "rotate-180"
                                  : ""
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

                          {/* Results Content for each match */}
                          <div
                            className={`transition-all duration-300 ease-in-out ${
                              expandedAccordions.includes(
                                `${league.id}-${match.id}-results`
                              )
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            } overflow-hidden`}
                          >
                            <div className="border-t border-gray-200 bg-white">
                              <div className="grid grid-cols-3 p-3 text-sm">
                                <span className="text-gray-800">-</span>
                                <span className="text-center text-gray-800">
                                  -
                                </span>
                                <span className="text-right text-orange-500 font-medium">
                                  Pending
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
            {activeTab === "result" && renderResultTab()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
