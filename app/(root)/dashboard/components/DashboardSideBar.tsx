"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type SubCategory = {
  name: string;
  count?: number;
};

type Sport = {
  name: string;
  emoji?: string;
  icon?: string;
  is_live?: boolean;
  liveCount?: number;
  subCategories?: SubCategory[];
};

const sports: Sport[] = [
  {
    name: "Hot",
    emoji: "🔥",
    liveCount: 29,
  },
  {
    name: "Soccer",
    emoji: "⚽",
    liveCount: 916,
    is_live: true,
    subCategories: [
      { name: "HDP & OU", count: 133 },
      { name: "Odd/Even & Total Goal", count: 121 },
      { name: "1X2 & Double Chance", count: 120 },
      { name: "Correct Score", count: 104 },
      { name: "Half Time/Full Time", count: 91 },
      { name: "First Goal/Last Goal", count: 91 },
      { name: "Mix Parlay", count: 118 },
      { name: "Mix Parlay Combo", count: 129 },
      { name: "Outright" },
    ],
  },
  {
    name: "Basketball",
    emoji: "🏀",
    is_live: true,
    liveCount: 73,
    subCategories: [
      { name: "HDP & OU", count: 133 },
      { name: "Odd/Even & Total Goal", count: 121 },
      { name: "1X2 & Double Chance", count: 120 },
      { name: "Correct Score", count: 104 },
      { name: "Outright" },
    ],
  },
  { name: "Baseball", emoji: "⚾", is_live: false, liveCount: 50 },
  { name: "Tennis", emoji: "🎾", liveCount: 244 },
  { name: "American Football", emoji: "🏈", liveCount: 1 },
  { name: "Rugby", emoji: "🏉", liveCount: 4 },
  { name: "Badminton", emoji: "🏸", liveCount: 2 },
  { name: "Volleyball", emoji: "🏐", liveCount: 33 },
  { name: "Boxing", emoji: "🥊", liveCount: 11 },
  { name: "Cricket", emoji: "🏏", liveCount: 36 },
];

export default function DashboardSideBar() {
  const [openCategory, setOpenCategory] = useState<string | null>("Soccer");

  const toggleCategory = (name: string) => {
    setOpenCategory((prev) => (prev === name ? null : name));
  };

  return (
    <div className="w-full bg-[#eeeeee] text-sm font-medium text-black border border-gray-400">
      <div className="bg-gradient-to-b from-black to-gray-700 text-white p-2 font-bold mb-1">
        ⭐ My Favorite
      </div>

      <div className="p-2 bg-[#444] text-white font-semibold flex items-center justify-between">
        <span>⚽ Hide Sports Menu</span>
      </div>

      <div className="flex flex-row text-center font-semibold bg-white gap-[0.3px]">
        <div className="flex-1 bg-[rgb(119,119,119)] p-2">
          <span className="text-white">Early</span>
        </div>
        <div className="flex-1 bg-[rgb(119,119,119)] p-2">
          <span className="text-white">Today</span>
        </div>
        <div className="flex-1 bg-[rgb(119,119,119)] p-2">
          <span className="text-white">Live 47</span>
        </div>
      </div>

      {sports.map((sport) => {
        const isOpen = openCategory === sport.name;
        return (
          <div key={sport.name} className="border-b border-gray-300">
            <div
              onClick={() => toggleCategory(sport.name)}
              className="cursor-pointer bg-black text-white p-2 flex justify-between items-center hover:bg-gray-800"
            >
              <div className="flex flex-row flex-1 text-sm font-semibold gap-2">
                <span>{sport.emoji}</span>
                <span>{sport.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {sport.is_live && (
                  <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                    Live
                  </span>
                )}
                {sport.liveCount !== undefined && (
                  <span className="text-red-600 text-sm font-semibold pr-2 py-0.5">
                    {sport.liveCount}
                  </span>
                )}
                {sport.subCategories && (
                  <>
                    {isOpen ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </>
                )}
              </div>
            </div>

            {isOpen && sport.subCategories && (
              <div className="bg-[#dfe7f3] text-black p-2 space-y-1">
                {sport.subCategories.map((sub) => (
                  <div
                    key={sub.name}
                    className="flex justify-between px-2 py-1 hover:bg-blue-100"
                  >
                    <span>{sub.name}</span>
                    {sub.count !== undefined && (
                      <span className="text-red-500">{sub.count}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <div className="mt-2 border-t border-gray-300 p-2 font-bold bg-black text-white">
        ⏹️ Waiting & Cancelled
      </div>

      <div className="flex gap-2 p-2 bg-[#f3f3f3]">
        <button className="flex-1 bg-white text-black border px-2 py-1 rounded text-xs">
          Waiting Bet
        </button>
        <button className="flex-1 bg-white text-black border px-2 py-1 rounded text-xs">
          Void
        </button>
      </div>
    </div>
  );
}
