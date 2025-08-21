"use client";

import { useState } from "react";
import { Star, Funnel, ArrowDown } from "lucide-react";
import MobileMatchGroup from "./MobileMatchGroup";

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

interface MatchProps {
  is_parlay: boolean;
  sport: Sport | undefined;
  placeMatchBetCallback: () => void;
  placeOutrightBetCallback: () => void;
  moreBetCallback: (match: MatchGroup, event_title: string) => void;
}

const MobileMatchList: React.FC<MatchProps> = ({
  sport,
  placeMatchBetCallback,
  placeOutrightBetCallback,
  moreBetCallback,
}) => {
  const [selectedSportCategoryId, setSelectedSportCategoryId] =
    useState<number>(1);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  return (
    <div className="bg-gray-200 h-full dark:bg-gray-800 rounded-md text-sm text-black">
      {(sport?.subCategories?.length ?? 0) > 0 && (
        <div className="flex flex-1 flex-col">
          <div className="flex flex-row bg-white shadow-md sticky top-0 z-10">
            <div className="flex flex-1 flex-row px-4 p-2 overflow-x-auto no-scrollbar gap-2 ">
              {sport?.subCategories?.map((subCategory) => (
                <button
                  key={subCategory.name}
                  onClick={() => setSelectedSportCategoryId(subCategory.id)}
                  className="flex flex-row items-center whitespace-nowrap gap-1 text-sm"
                >
                  <span
                    className={`text-black dark:text-gray-300 ${
                      selectedSportCategoryId === subCategory.id
                        ? "underline font-bold"
                        : "font-medium"
                    } transition-all duration-200 ease-in-out`}
                  >
                    {subCategory.name}
                  </span>
                  {subCategory.count !== undefined && (
                    <div className="flex bg-primary rounded-full px-2 py-1">
                      <span className="text-white font-medium dark:text-gray-400">
                        {subCategory.count}
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="flex flex-row">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFavorited(!isFavorited);
                }}
                className="p-2"
              >
                <Star
                  className={`w-5 h-5 ${
                    isFavorited
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-primary"
                  }`}
                />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="p-2 pl-1"
              >
                <div className="flex flex-row justify-center items-center">
                  <Funnel className={`w-5 h-5 text-primary`} />
                  <ArrowDown className={`w-3 h-3 text-black`} />
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col flex-1 p-2 py-4 overflow-y-auto">
            <MobileMatchGroup
              title="Running"
              events={[
                {
                  id: 1,
                  type: "match",
                  name: "⚽ China Football Super League",
                  matches: [
                    {
                      id: 1,
                      time: {
                        result: "2 - 0",
                        status: "H.TIME",
                      },
                      team: [
                        {
                          name: "Tanzania (w)",
                          highlight: true,
                          fulltime: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                          firsthalf: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                        },
                        {
                          name: "Burundi (w)",
                          highlight: false,
                          fulltime: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                          firsthalf: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                        },
                      ],
                      status: "Draw",
                    },
                    {
                      id: 1,
                      time: {
                        result: "2 - 0",
                        status: "H.TIME",
                      },
                      team: [
                        {
                          name: "Tanzania (w)",
                          highlight: true,
                          fulltime: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                          firsthalf: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                        },
                        {
                          name: "Burundi (w)",
                          highlight: false,
                          fulltime: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                          firsthalf: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                        },
                      ],
                      status: "Draw",
                    },
                  ],
                },
                {
                  id: 2,
                  type: "match",
                  name: "⚽ China Football Super League 2",
                  matches: [
                    {
                      id: 1,
                      time: {
                        result: "2 - 0",
                        status: "H.TIME",
                      },
                      team: [
                        {
                          name: "Tanzania (w)",
                          highlight: true,
                          fulltime: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                          firsthalf: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                        },
                        {
                          name: "Burundi (w)",
                          highlight: false,
                          fulltime: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                          firsthalf: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                        },
                      ],
                      status: "Draw",
                    },
                    {
                      id: 1,
                      time: {
                        result: "2 - 0",
                        status: "H.TIME",
                      },
                      team: [
                        {
                          name: "Tanzania (w)",
                          highlight: true,
                          fulltime: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                          firsthalf: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                        },
                        {
                          name: "Burundi (w)",
                          highlight: false,
                          fulltime: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                          firsthalf: [
                            {
                              hdp: {
                                left: "0",
                                right: "1.09",
                              },
                              ou: {
                                left: "0",
                                right: "1.09",
                              },
                              oxt: {
                                odd: "1.09",
                              },
                              oe: {
                                type: "O",
                                odd: "1.09",
                              },
                            },
                          ],
                        },
                      ],
                      status: "Draw",
                    },
                  ],
                },
              ]}
              placeMatchBetCallback={placeMatchBetCallback}
              placeOutrightBetCallback={placeOutrightBetCallback}
              moreBetCallback={moreBetCallback}
            />

            <MobileMatchGroup
              title="All Leagues"
              events={[
                {
                  id: 1,
                  type: "outright",
                  name: "⚽ English Premier League 2025/2026 Winner",
                  teams: [
                    {
                      id: 1,
                      name: "Liverpool",
                      odd: 2.07,
                    },
                    {
                      id: 2,
                      name: "Arsenal",
                      odd: 3.5,
                    },
                    {
                      id: 3,
                      name: "Manchester City",
                      odd: 4.0,
                    },
                    {
                      id: 4,
                      name: "Manchester United",
                      odd: 5.0,
                    },
                    {
                      id: 5,
                      name: "Chelsea",
                      odd: 6.0,
                    },
                    {
                      id: 6,
                      name: "Tottenham Hotspur",
                      odd: 7.0,
                    },
                    {
                      id: 7,
                      name: "Aston Villa",
                      odd: 8.0,
                    },
                    {
                      id: 8,
                      name: "Newcastle United",
                      odd: 9.0,
                    },
                  ],
                  matches: [],
                },
                {
                  id: 2,
                  type: "outright",
                  name: "⚽ English Championship 2025/2026 Winner",
                  teams: [
                    {
                      id: 1,
                      name: "Ipswich Town",
                      odd: 2.0,
                    },
                    {
                      id: 2,
                      name: "Leicester City",
                      odd: 3.0,
                    },
                    {
                      id: 3,
                      name: "Southampton",
                      odd: 4.0,
                    },
                    {
                      id: 4,
                      name: "Sunderland",
                      odd: 5.0,
                    },
                    {
                      id: 5,
                      name: "West Bromwich Albion",
                      odd: 6.0,
                    },
                    {
                      id: 6,
                      name: "Middlesbrough",
                      odd: 7.0,
                    },
                  ],
                  matches: [],
                },
              ]}
              placeMatchBetCallback={placeMatchBetCallback}
              placeOutrightBetCallback={placeOutrightBetCallback}
              moreBetCallback={moreBetCallback}
            />
          </div>
        </div>
      )}

      {(sport?.subCategories?.length ?? 0) == 0 && (
        <div className="flex flex-1 bg-white justify-center items-center p-4">
          <span
            className={`text-black dark:text-gray-300
              font-medium text-sm
             `}
          >
            {"No matches found"}
          </span>
        </div>
      )}
    </div>
  );
};

export default MobileMatchList;
