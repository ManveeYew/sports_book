"use client";
import {
  Volleyball,
  LaptopMinimalCheck,
  FileSpreadsheet,
  UserRound,
} from "lucide-react";
import Link from "next/link";

export default function DashboardFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 py-2 mt-auto flex flex-row justify-between">
      <Link
        href="/dashboard"
        className={`flex flex-col items-center p-2 rounded-lg text-primary`}
      >
        <Volleyball className="w-6 h-6 mr-1" />
        <span className=" text-sm font-medium">Sports</span>
      </Link>
      <Link
        href="/dashboard/results"
        className={`flex flex-col items-center p-2 rounded-lg text-primary`}
      >
        <LaptopMinimalCheck className="w-6 h-6 mr-1" />
        <span className="text-sm font-medium">Result</span>
      </Link>
      <Link
        href="/dashboard/statement"
        className={`flex flex-col items-center p-2 rounded-lg text-primary`}
      >
        <FileSpreadsheet className="w-6 h-6 mr-1" />
        <span className="text-sm font-medium">Statement</span>
      </Link>
      <Link
        href="/dashboard/user"
        className={`flex flex-col items-center p-2 rounded-lg text-primary`}
      >
        <UserRound className="w-6 h-6 mr-1" />
        <span className="text-sm font-medium">User</span>
      </Link>
    </footer>
  );
}
