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
}

const MobileMatchList: React.FC<MatchProps> = ({ sport }) => {
  const [selectedSportCategoryId, setSelectedSportCategoryId] =
    useState<number>(1);

  console.log(sport);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md text-sm text-black">
      {(sport?.subCategories?.length ?? 0) > 0 && (
        <>
          <div className="flex flex-row px-4 p-2 overflow-x-auto no-scrollbar gap-2 shadow-md">
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
          <div className="p-2">
            <MobileMatchGroup
              title="Running"
              events={[
                {
                  name: "China Football Super League",
                  matches: [
                    {
                      rows: [
                        {
                          time: {
                            result: "2 - 0",
                            status: "H.TIME",
                          },
                          event: {
                            team: [
                              {
                                name: "Tanzania (w)",
                                highlight: true,
                              },
                              {
                                name: "Burundi (w)",
                                highlight: false,
                              },
                            ],
                            status: "Draw",
                          },
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                        {
                          time: {},
                          event: {},
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                        {
                          time: {},
                          event: {},
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      rows: [
                        {
                          time: {
                            result: "2 - 0",
                            status: "H.TIME",
                          },
                          event: {
                            team: [
                              {
                                name: "Tanzania (w)",
                                highlight: true,
                              },
                              {
                                name: "Burundi (w)",
                                highlight: false,
                              },
                            ],
                            status: "Draw",
                          },
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                        {
                          time: {},
                          event: {},
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                        {
                          time: {},
                          event: {},
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "China Football Super League2",
                  matches: [
                    {
                      rows: [
                        {
                          time: {
                            result: "2 - 0",
                            status: "H.TIME",
                          },
                          event: {
                            team: [
                              {
                                name: "Tanzania (w)",
                                highlight: true,
                              },
                              {
                                name: "Burundi (w)",
                                highlight: false,
                              },
                            ],
                            status: "Draw",
                          },
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                        {
                          time: {},
                          event: {},
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                        {
                          time: {},
                          event: {},
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      rows: [
                        {
                          time: {
                            result: "2 - 0",
                            status: "H.TIME",
                          },
                          event: {
                            team: [
                              {
                                name: "Tanzania (w)",
                                highlight: true,
                              },
                              {
                                name: "Burundi (w)",
                                highlight: false,
                              },
                            ],
                            status: "Draw",
                          },
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                        {
                          time: {},
                          event: {},
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                        {
                          time: {},
                          event: {},
                          fulltime: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                          firsthalf: {
                            hdp: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            ou: [
                              {
                                left: "0",
                                right: "1.09",
                              },
                              {
                                left: "0",
                                right: "1.09",
                              },
                            ],
                            oxt: [
                              {
                                odd: "1.09",
                              },
                              {
                                odd: "1.09",
                              },
                            ],
                            oe: [
                              {
                                type: "O",
                                odd: "1.09",
                              },
                              {
                                type: "E",
                                odd: "1.09",
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              ]}
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
