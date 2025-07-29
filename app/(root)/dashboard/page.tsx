"use client";
import Loader from "@/app/components/Loader";
import React, { useEffect, useRef, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import BannerCarousel from "./components/BannerCarousel";
import MatchList from "./components/MatchList/MatchList";
import { useAppStore } from "@/store/useAppStore";
import MobileDrawer from "./components/MobileDrawer";
import { Search, X, Check } from "lucide-react";
import MobileMatchList from "./components/MatchList/MobileMatchList";
import MobileBetPopup from "./components/MobileBetPopup";

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
  const homeRef = useRef(null);
  const { isLoggedIn, isHydrated } = useAuthStore();
  const { uiType } = useAppStore();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isParlay, setIsParlay] = useState(false);
  const [selectedSportId, setSelectedSportId] = useState<number>(1);
  const [isBetPopupOpen, setIsBetPopupOpen] = useState(false);

  // Debounce logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchTerm(searchInput);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  if (uiType === "desktop") {
    return (
      <div ref={homeRef} className="relative flex flex-1 min-h-screen bg-white">
        {!isHydrated && (
          <div className="flex  flex-1 justify-center items-center h-screen bg-white">
            <Loader />
          </div>
        )}

        {isHydrated && isLoggedIn && (
          <div className="flex flex-1 flex-col">
            <BannerCarousel />
            <div className="p-2">
              <MatchList />
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div
        ref={homeRef}
        className="relative flex flex-1 max-w-screen overflow-hidden bg-white dark:bg-[rgb(43,43,51)] h-full"
      >
        {!isHydrated && (
          <div className="flex flex-1 justify-center items-center h-full bg-white">
            <Loader />
          </div>
        )}

        {isHydrated && isLoggedIn && (
          <div
            id="sports-main"
            className="flex flex-1 overflow-x-hidden  flex-col"
          >
            <div className="p-2 px-4 flex flex-row items-center justify-between bg-[rgb(43,43,51)]">
              <div className="flex flex-row w-1/2 py-2">
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="text-white  focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <span className="ml-3 text-base font-bold text-white">
                  Sports
                </span>
              </div>
              <div className="flex flex-row w-1/2 relative overflow-hidden justify-end">
                {!isSearchOpen && (
                  <button
                    onClick={() => setIsParlay(!isParlay)}
                    className={`bg-[rgb(43,43,51)] mr-3 px-4 rounded-full border border-primary flex flex-row items-center gap-1 ${
                      isParlay
                        ? "bg-primary text-white"
                        : "bg-[rgb(43,43,51)] text-primary"
                    }`}
                  >
                    {isParlay && <Check className="w-3 h-3 text-white" />}
                    <span className="text-sm font-semibold ">Parlay</span>
                  </button>
                )}
                {!isSearchOpen && (
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className=""
                  >
                    <Search className="w-6 h-6 text-white" />
                  </button>
                )}

                {isSearchOpen && (
                  <div className="flex my-1 py-1 px-2 flex-row items-center relative overflow-hidden bg-white rounded-md w-full">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="w-full bg-white text-black focus:outline-none"
                    />
                    <button
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      className="ml-2 flex-shrink-0"
                    >
                      <X className="w-6 h-6 text-primary" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <hr className="border-gray-400" />
            <div className="overflow-hidden bg-[rgb(43,43,51)]">
              <div id="sports-slide" className="overflow-x-auto no-scrollbar">
                <div className="flex flex-row gap-4 p-4 whitespace-nowrap min-w-min">
                  {sports.map((sport, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSportId(sport.id)}
                      className={`flex flex-row items-center gap-2 px-4 py-1 rounded-full text-white hover:bg-primary hover:text-white transition-colors ${
                        selectedSportId === sport.id
                          ? "bg-primary text-white"
                          : ""
                      }`}
                    >
                      <span>{sport.emoji}</span>
                      <span className="text-sm font-medium">{sport.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <hr className="border-gray-400" />
            <MobileMatchList
              sport={sports.find((s) => s.id === selectedSportId)}
              placeMatchBetCallback={() => {
                setIsBetPopupOpen(true);
              }}
            />

            <MobileDrawer
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            />

            <MobileBetPopup
              isOpen={isBetPopupOpen}
              betType={"match"}
              title={"⚽ China Football Super League"}
              onClose={() => setIsBetPopupOpen(false)}
            />
          </div>
        )}
      </div>
    );
  }
};

export default Page;
