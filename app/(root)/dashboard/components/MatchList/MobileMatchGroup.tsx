"use client";

import React, { useState } from "react";
import { RotateCcw, ChartNoAxesColumn, Plus } from "lucide-react";

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

type Props = {
  title: string;
  events: MatchTable[] | null;
  placeMatchBetCallback: () => void;
};

export default function MobileMatchList({
  title,
  events,
  placeMatchBetCallback,
}: Props) {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [openEventIds, setOpenEventIds] = useState<string[]>([]);
  const [openMatchIds, setOpenMatchIds] = useState<string[]>([]);

  const toggleEvent = (eventId: string) => {
    setOpenEventIds((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const toggleMatch = (matchId: string) => {
    setOpenMatchIds((prev) =>
      prev.includes(matchId)
        ? prev.filter((id) => id !== matchId)
        : [...prev, matchId]
    );
  };

  const refreshEvent = (eventId: string) => {
    // Logic to refresh the event data
    console.log(`Refreshing event with ID: ${eventId}`);
    // This could involve fetching new data or updating the state
  };

  const stateOnPress = () => {};

  const plusOnPress = () => {};

  const placeOutrightBet = (eventId: string, teamId: string) => {
    // Logic to place an outright bet
    console.log(`Placing outright bet on event ${eventId} for team ${teamId}`);
  };

  const placeMatchBet = () => {
    placeMatchBetCallback();
  };

  const renderEvent = (event: MatchTable, eventIndex: number) => {
    if (event.type === "match") {
      return (
        <div key={eventIndex} className="border-t border-gray-200">
          <div
            onClick={() => toggleEvent(event.id.toString())}
            className="w-full flex items-center justify-between p-3 bg-white cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-start">
                <span
                  key={eventIndex}
                  className={`text-start text-sm font-bold`}
                >
                  {event.name}
                </span>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                refreshEvent(event.id.toString());
              }}
              className=""
            >
              <RotateCcw className="w-4 h-4 text-black" />
            </button>
          </div>

          {openEventIds.includes(event.id.toString()) && (
            <div className="bg-white mb-2">
              {/* Match Accordion Content */}
              {event?.matches?.map((match, matchIndex) => {
                const matchId = `${eventIndex}-${matchIndex}`;
                return (
                  <div key={matchId} className="border-t border-gray-200">
                    {/* Match Header */}
                    <button
                      onClick={() => toggleMatch(matchId)}
                      className={`w-full flex items-center justify-between p-3 bg-white ${
                        openMatchIds.includes(matchId) ? "bg-slate-100" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-4">
                            <div>
                              <p className="text-[rgb(225,25,17)] font-bold">
                                {match.time.result ?? ""}
                              </p>
                              <p className="text-xs text-black font-semibold">
                                {match.time.status ?? ""}
                              </p>
                            </div>
                            <div className="flex flex-col items-start">
                              {match.team?.map((team, teamIndex) => (
                                <span
                                  key={teamIndex}
                                  className={`text-sm text-black font-semibold`}
                                >
                                  {team.name}
                                </span>
                              ))}
                            </div>
                          </div>
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
                      <div className="flex relative w-full bg-white max-w-md  overflow-hidden">
                        {/* Left - Team names */}
                        <div className="flex flex-col relative justify-start px-2 py-12 bg-white w-[30%] text-sm font-medium text-black h-auto">
                          {match.team?.map((team, teamIndex) => (
                            <div
                              key={teamIndex}
                              className={`flex flex-1 items-start`}
                            >
                              {team.name}
                            </div>
                          ))}
                        </div>

                        {/* Middle - Scrollable odds */}
                        <div className="flex-1 overflow-x-auto bg-gray-50 px-3 py-4">
                          <table className="table-auto border-collapse ">
                            <thead className="">
                              <tr className="text-center">
                                <th className="px-1">
                                  <span className="mobile-match-group-odd-title">
                                    {"FT.HDP"}
                                  </span>
                                </th>
                                <th className="px-1">
                                  <span className="mobile-match-group-odd-title">
                                    {"FT.O/U"}
                                  </span>
                                </th>
                                <th className="px-1">
                                  <span className="mobile-match-group-odd-title">
                                    {"FT.1X2"}
                                  </span>
                                </th>
                                <th className="px-1">
                                  <span className="mobile-match-group-odd-title">
                                    {"FT.O/E"}
                                  </span>
                                </th>
                                <th className="px-1">
                                  <span className="mobile-match-group-odd-title">
                                    {"HT.HDP"}
                                  </span>
                                </th>
                                <th className="px-1">
                                  <span className="mobile-match-group-odd-title">
                                    {"HT.O/U"}
                                  </span>
                                </th>
                                <th className="px-1">
                                  <span className="mobile-match-group-odd-title">
                                    {"HT.1X2"}
                                  </span>
                                </th>
                                <th className="px-1">
                                  <span className="mobile-match-group-odd-title">
                                    {"HT.O/E"}
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {match.team?.map((team, teamIndex) => (
                                <React.Fragment key={teamIndex}>
                                  <tr>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-1 text-center">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          placeMatchBet();
                                        }}
                                        className="mobile-match-group-odd-container"
                                      >
                                        <span className="mobile-match-group-odd-container-title1">
                                          {"1.09"}
                                        </span>
                                        <span className="mobile-match-group-odd-container-title2">
                                          {"2.00"}
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Right - Icons */}
                        <div className="flex flex-col justify-start gap-2 items-center py-3 px-2 bg-white">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              stateOnPress();
                            }}
                            className="bg-primary p-1 rounded-lg"
                          >
                            <ChartNoAxesColumn className="w-6 h-6 text-white" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              plusOnPress();
                            }}
                            className="bg-primary p-1 rounded-lg"
                          >
                            <Plus className="w-6 h-6 text-white" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    } else if (event.type === "outright") {
      return (
        <div key={eventIndex} className="">
          <div
            onClick={() => toggleEvent(event.id.toString())}
            className="w-full flex items-center justify-between p-3 bg-white border-b border-gray-200 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-start">
                <span
                  key={eventIndex}
                  className={`text-start text-sm font-bold`}
                >
                  {event.name}
                </span>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                refreshEvent(event.id.toString());
              }}
              className=""
            >
              <RotateCcw className="w-4 h-4 text-black" />
            </button>
          </div>

          {openEventIds.includes(event.id.toString()) && (
            <div className="bg-white mb-2 px-1">
              {event?.teams?.map((team, teamIndex) => {
                const matchId = `${eventIndex}-${teamIndex}`;
                return (
                  <div key={matchId} className="">
                    <div className="flex flex-row justify-between items-center p-3">
                      <div>
                        <p className="text-sm text-black font-semibold">
                          {team.name ?? ""}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          placeOutrightBet(
                            event.id.toString(),
                            team.id.toString()
                          );
                        }}
                        className="flex flex-col items-center border  border-black py-1 rounded-lg w-[70px]"
                      >
                        <p className="text-sm text-black font-bold">
                          {team.odd ?? 0}
                        </p>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  console.log(events);
  return (
    <div className="mb-4 bg-gray-200 dark:bg-gray-800">
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

      {/* Event Accordion Content */}
      {isMainOpen &&
        events?.map((event, eventIndex) => renderEvent(event, eventIndex))}
    </div>
  );
}
