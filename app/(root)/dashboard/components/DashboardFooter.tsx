"use client";
import {
  Volleyball,
  LaptopMinimalCheck,
  FileSpreadsheet,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardFooter() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard" || pathname === "/dashboard/";
    }
    return pathname.startsWith(href);
  };
  return (
    <footer className="bg-white border-t border-gray-200 px-4 py-2 mt-auto flex flex-row justify-between">
      <Link
        href="/dashboard"
        className={`flex flex-col items-center p-2 rounded-lg ${
          isActive("/dashboard") ? "text-primary" : "text-gray-400"
        }`}
      >
        <Volleyball className="w-6 h-6 mr-1" />
        <span className=" text-sm font-medium">Sports</span>
      </Link>
      <Link
        href="/dashboard/results"
        className={`flex flex-col items-center p-2 rounded-lg ${
          isActive("/dashboard/results") ? "text-primary" : "text-gray-400"
        }`}
      >
        <LaptopMinimalCheck className="w-6 h-6 mr-1" />
        <span className="text-sm font-medium">Result</span>
      </Link>
      <Link
        href="/dashboard/statement"
        className={`flex flex-col items-center p-2 rounded-lg ${
          isActive("/dashboard/statement") ? "text-primary" : "text-gray-400"
        }`}
      >
        <FileSpreadsheet className="w-6 h-6 mr-1" />
        <span className="text-sm font-medium">Statement</span>
      </Link>
      <Link
        href="/dashboard/user"
        className={`flex flex-col items-center p-2 rounded-lg ${
          isActive("/dashboard/user") ? "text-primary" : "text-gray-400"
        }`}
      >
        <UserRound className="w-6 h-6 mr-1" />
        <span className="text-sm font-medium">User</span>
      </Link>
    </footer>
  );
}
