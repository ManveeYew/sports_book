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

export default function MatchGroup({ title, events }: Props) {
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

  return (
    <div className="mb-4 border-t bg-[rgb(233,240,246)]">
      <div className="flex flex-row justify-between p-2 px-3 items-center">
        <div className="text-sm font-bold text-[rgb(49,70,103)]">{title}</div>
        <div className="flex flex-row gap-[0.5px]">
          <button className="bg-white text-black border px-2 py-1 rounded text-xs">
            Sort by Time
          </button>
          <button className="bg-white text-black border px-2 py-1 rounded text-xs">
            Select League
          </button>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-white text-black border px-2 py-1 rounded text-xs"
          >
            <option value="double">Double</option>
            <option value="triple">Triple</option>
          </select>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="bg-white text-black border px-2 py-1 rounded text-xs"
          >
            <option value="HK">HK</option>
            <option value="MY">MY</option>
          </select>
          <button className="bg-white text-black border px-2 py-1 rounded text-xs">
            Refresh
          </button>
        </div>
      </div>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead className="bg-[rgb(50,59,68)] text-white text-xs">
          <tr className="text-center">
            <th
              rowSpan={2}
              className="border border-gray-600 px-2 py-1 font-normal"
            >
              Time
            </th>
            <th
              rowSpan={2}
              className="border border-gray-600 px-2 py-1 font-normal"
            >
              Event
            </th>
            <th
              colSpan={4}
              className="border border-gray-600 px-2 py-1 font-normal"
            >
              Full Time
            </th>
            <th
              colSpan={4}
              className="border border-gray-600 px-2 py-1 font-normal"
            >
              First Half
            </th>
          </tr>
          <tr className="text-center">
            <th className="border border-gray-600 px-2 py-1 font-normal">
              HDP
            </th>
            <th className="border border-gray-600 px-2 py-1 font-normal">
              O/U
            </th>
            <th className="border border-gray-600 px-2 py-1 font-normal">
              1X2
            </th>
            <th className="border border-gray-600 px-2 py-1 font-normal">
              O/E
            </th>
            <th className="border border-gray-600 px-2 py-1 font-normal">
              HDP
            </th>
            <th className="border border-gray-600 px-2 py-1 font-normal">
              O/U
            </th>
            <th className="border border-gray-600 px-2 py-1 font-normal">
              1X2
            </th>
            <th className="border border-gray-600 px-2 py-1 font-normal">
              O/E
            </th>
          </tr>
        </thead>
        <tbody className="bg-[rgb(251,203,190)] text-xs">
          {events &&
            events.map((event, index) => (
              <React.Fragment key={index}>
                <tr className="bg-[rgb(170,170,170)] ">
                  <th className="px-2 py-1 font-normal"></th>
                  <th
                    colSpan={9}
                    className="text-left px-2 py-1 text-black font-bold"
                  >
                    {event.name}
                  </th>
                </tr>
                {event.matches &&
                  event.matches.map((match, index) => (
                    <React.Fragment key={index}>
                      {match.rows &&
                        match.rows.map((row, index) => (
                          <tr
                            key={index}
                            className="text-[rgb(30,39,48)] font-extrabold text-xs"
                          >
                            <td className="border border-t-0 border-[rgb(170,170,170)] px-2 py-1 text-center">
                              <p>{row.time.result ?? ""}</p>
                              {getMatchStatus(row.time.status ?? "")}
                            </td>
                            <td className="border border-t-0 border-[rgb(170,170,170)] px-2 py-1">
                              {row.event.team &&
                                row.event.team.map((team, index) => (
                                  <p
                                    key={index}
                                    className={`${
                                      team.highlight
                                        ? "text-[rgb(225,25,17)]"
                                        : ""
                                    }`}
                                  >
                                    {team.name}
                                  </p>
                                ))}
                              <p className="text-[rgb(120,120,120)]">
                                {row.event.status}
                              </p>
                            </td>

                            <td className="align-top border border-t-0 border-[rgb(170,170,170)] px-2 py-1 gap-1 pb-4">
                              {row.fulltime.hdp &&
                                row.fulltime.hdp.map((hdp, index) => (
                                  <div
                                    key={index}
                                    className="flex flex-row justify-between"
                                  >
                                    <p className="text-[rgb(120,120,120)]">
                                      {hdp.left}
                                    </p>
                                    <p>{hdp.right}</p>
                                  </div>
                                ))}
                            </td>
                            <td className="align-top border border-t-0 border-[rgb(170,170,170)] px-2 py-1 gap-1">
                              {row.fulltime.ou &&
                                row.fulltime.ou.map((ou, index) => (
                                  <div
                                    key={index}
                                    className="flex flex-row justify-between"
                                  >
                                    <p className="text-[rgb(120,120,120)]">
                                      {ou.left}
                                    </p>
                                    <p>{ou.right}</p>
                                  </div>
                                ))}
                            </td>
                            <td className="align-top border border-t-0 border-[rgb(170,170,170)] px-2 py-1">
                              <div className="flex flex-col items-center">
                                {row.fulltime.oxt &&
                                  row.fulltime.oxt.map((oxt, index) => (
                                    <p key={index}>{oxt.odd}</p>
                                  ))}
                              </div>
                            </td>
                            <td className="align-top border border-t-0 border-[rgb(170,170,170)] px-2 py-1">
                              {row.fulltime.oe &&
                                row.fulltime.oe.map((oe, index) => (
                                  <div
                                    key={index}
                                    className="flex flex-row justify-between"
                                  >
                                    <p className="text-[rgb(39,31,250)]">
                                      {oe.type}
                                    </p>
                                    <p>{oe.odd}</p>
                                  </div>
                                ))}
                            </td>

                            <td className="align-top border border-t-0 border-[rgb(170,170,170)] px-2 py-1 gap-1">
                              {row.firsthalf.hdp &&
                                row.firsthalf.hdp.map((hdp, index) => (
                                  <div
                                    key={index}
                                    className="flex flex-row justify-between"
                                  >
                                    <p className="text-[rgb(120,120,120)]">
                                      {hdp.left}
                                    </p>
                                    <p>{hdp.right}</p>
                                  </div>
                                ))}
                            </td>
                            <td className="align-top border border-t-0 border-[rgb(170,170,170)] px-2 py-1 gap-1">
                              {row.firsthalf.ou &&
                                row.firsthalf.ou.map((ou, index) => (
                                  <div
                                    key={index}
                                    className="flex flex-row justify-between"
                                  >
                                    <p className="text-[rgb(120,120,120)]">
                                      {ou.left}
                                    </p>
                                    <p>{ou.right}</p>
                                  </div>
                                ))}
                            </td>
                            <td className="align-top border border-t-0 border-[rgb(170,170,170)] px-2 py-1">
                              <div className="flex flex-col items-center">
                                {row.firsthalf.oxt &&
                                  row.firsthalf.oxt.map((oxt, index) => (
                                    <p key={index}>{oxt.odd}</p>
                                  ))}
                              </div>
                            </td>
                            <td className="align-top border border-t-0 border-[rgb(170,170,170)] px-2 py-1">
                              {row.firsthalf.oe &&
                                row.firsthalf.oe.map((oe, index) => (
                                  <div
                                    key={index}
                                    className="flex flex-row justify-between"
                                  >
                                    <p className="text-[rgb(39,31,250)]">
                                      {oe.type}
                                    </p>
                                    <p>{oe.odd}</p>
                                  </div>
                                ))}
                            </td>
                          </tr>
                        ))}
                    </React.Fragment>
                  ))}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
}
