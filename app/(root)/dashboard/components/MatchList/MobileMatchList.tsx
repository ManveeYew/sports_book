"use client";

import { useState } from "react";
import MobileMatchGroup from "./MobileMatchGroup";

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
  sport: Sport | undefined;
  placeMatchBetCallback: () => void;
}

const MobileMatchList: React.FC<MatchProps> = ({
  sport,
  placeMatchBetCallback,
}) => {
  const [selectedSportCategoryId, setSelectedSportCategoryId] =
    useState<number>(1);

  return (
    <div className="bg-gray-200 flex-1 dark:bg-gray-800 rounded-md text-sm text-black">
      {(sport?.subCategories?.length ?? 0) > 0 && (
        <>
          <div className="flex flex-row px-4 bg-white p-2 overflow-x-auto no-scrollbar gap-2 shadow-md">
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
          <div className="p-2 py-4">
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
            />
          </div>
        </>
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
