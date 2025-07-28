"use client";

import React, { useState } from "react";

export type MatchTable = {
  name: string;
  matches: MatchGroup[];
};

export type MatchGroup = {
  rows: MatchRow[];
};

export type MatchRow = {
  time: {
    result?: string;
    status?: string;
  };
  event: {
    team?: Team[];
    status?: string;
  };
  fulltime: PeriodStats;
  firsthalf: PeriodStats;
};

export type Team = {
  name: string;
  highlight: boolean;
};

export type PeriodStats = {
  hdp: StatEntry[];
  ou: StatEntry[];
  oxt: OddEntry[];
  oe: OeEntry[];
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

type Props = {
  title: string;
  events: MatchTable[] | null;
};

export default function MobileMatchList({ title, events }: Props) {
  const [type, setType] = useState<string>("double");
  const [country, setCountry] = useState<string>("HK");

  const getMatchStatus = (status: string) => {
    if (status == "H.TIME") {
      return <p className="text-xs text-[rgb(39,31,250)]">H.TIME</p>;
    } else if (status == "LIVE") {
      return <p className="text-xs text-[rgb(225,25,17)]">LIVE</p>;
    }

    return null;
  };

  const [isMainOpen, setIsMainOpen] = useState(false);
  const [openMatchIds, setOpenMatchIds] = useState<string[]>([]);

  const toggleMatch = (matchId: string) => {
    setOpenMatchIds((prev) =>
      prev.includes(matchId)
        ? prev.filter((id) => id !== matchId)
        : [...prev, matchId]
    );
  };
  console.log(events);
  return (
    <div className="mb-4 bg-[rgb(233,240,246)]">
      {/* Main Accordion Header */}
      <button
        onClick={() => setIsMainOpen(!isMainOpen)}
        className={`w-full flex items-center justify-between p-3 bg-primary rounded-lg ${
          isMainOpen ? "rounded-b-none" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-base">{title}</span>
        </div>
        <svg
          className={`w-5 h-5 text-white transition-transform ${
            isMainOpen ? "rotate-180" : ""
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
      </button>

      {/* Matches Accordion Content */}
      {isMainOpen &&
        events?.map((event, eventIndex) => (
          <div key={eventIndex} className="border-t border-gray-200">
            {event.matches.map((match, matchIndex) => {
              const matchId = `${eventIndex}-${matchIndex}`;
              return (
                <div key={matchId} className="border-b border-gray-200">
                  {/* Match Header */}
                  <button
                    onClick={() => toggleMatch(matchId)}
                    className="w-full flex items-center justify-between p-3 bg-[rgb(233,240,246)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-start">
                        {match.rows.map((row, rowIndex) => (
                          <div
                            key={rowIndex}
                            className="flex items-center gap-2"
                          >
                            {row.event.team?.map((team, teamIndex) => (
                              <span
                                key={teamIndex}
                                className={`text-sm ${
                                  team.highlight
                                    ? "text-primary font-bold"
                                    : "text-gray-700"
                                }`}
                              >
                                {team.name}
                              </span>
                            ))}
                            {row.event.status &&
                              getMatchStatus(row.event.status)}
                          </div>
                        ))}
                      </div>
                    </div>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openMatchIds.includes(matchId) ? "rotate-180" : ""
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
                  </button>

                  {/* Match Details */}
                  {openMatchIds.includes(matchId) && (
                    <div className="p-4 bg-white">
                      {match.rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="mb-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-2">Full Time</h4>
                              {row.fulltime.hdp.map((stat, statIndex) => (
                                <div
                                  key={statIndex}
                                  className="flex justify-between text-sm mb-1"
                                >
                                  <span>{stat.left}</span>
                                  <span>{stat.right}</span>
                                </div>
                              ))}
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">First Half</h4>
                              {row.firsthalf.hdp.map((stat, statIndex) => (
                                <div
                                  key={statIndex}
                                  className="flex justify-between text-sm mb-1"
                                >
                                  <span>{stat.left}</span>
                                  <span>{stat.right}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
    </div>
  );
}
