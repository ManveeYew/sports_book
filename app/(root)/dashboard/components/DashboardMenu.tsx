"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";
import { useTranslation } from "@/lib/useTranslation";

const user_details = {
  name: "ajsbd123asdasjahs",
  credit: 5000,
};

export default function DashboardMenu() {
  const router = useRouter();
  const [time, setTime] = useState<string>("");
  const { language, setLanguage } = useLanguageStore();
  const { logout } = useAuthStore();
  const t = useTranslation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // show AM/PM
        timeZone: "Asia/Kuala_Lumpur", // Malaysia timezone
      };
      setTime(now.toLocaleString("en-MY", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const onLogout = async () => {
    await logout();
    router.push("/");
    toast.success(`${t.logout_successfully}`);
  };

  return (
    <header className="w-full bg-white text-white text-sm">
      <div className="flex flex-row justify-between">
        <div
          className="
            relative
            px-4 py-2
            w-40 xs:w-40 sm:w-42 md:w-44 lg:w-46 xl:w-48
            h-16 xs:h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24
            overflow-hidden
          "
        >
          <div className="relative w-full h-full">
            <Image
              src={`/images/logo.png`}
              alt={"dashboard-logo"}
              fill
              loading={"lazy"}
              sizes={`
              (max-width: 468px) 6rem,
              (max-width: 575px) 6.5rem,
              (max-width: 768px) 7rem,
              (max-width: 1024px) 7.5rem,
              8rem
            `}
              className="object-contain"
            />
          </div>
        </div>
        <div className="border-t-2 border-l-2 border-r-2 w-[260px] border-[#2b2b2b] bg-blue-50 self-end text-[#2b2b2b] text-sm px-3 py-2 leading-tight rounded-tl-lg rounded-tr-lg">
          <div className="flex gap-2 justify-center">
            <span className="font-medium">{t.welcome},</span>
            <span className="font-bold">{user_details.name}</span>
          </div>
          <div className="flex justify-center gap-2 mt-1">
            <span className="font-medium">{t.credit} :</span>
            <span className="font-bold">{user_details.credit.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <nav className="bg-white mx-auto flex justify-between pl-4">
        <div className="flex flex-1 gap-2 font-bold text-white items-end">
          <Link
            href={"/dashboard"}
            className={`bg-[#2b2b2b] px-3 py-2 rounded-tl-lg rounded-tr-lg`}
          >
            <span className="hover:underline cursor-pointer">{t.home}</span>
          </Link>
          <Link
            href={"/dashboard/betting-rules"}
            className={`bg-[#2b2b2b] px-3 py-2 rounded-tl-lg rounded-tr-lg`}
          >
            <span className="hover:underline cursor-pointer">
              {t.betting_rules}
            </span>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="text-xs text-[#2b2b2b] font-semibold self-end md:self-center mr-2 md:mr-0 order-2 md:order-1">
            {time} (GMT+8)
          </div>
          <div className="flex flex-row gap-2 order-1 md:order-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "zh")}
              className="p-2 border rounded text-[#2b2b2b]"
            >
              <option value="en">🇬🇧 English</option>
              <option value="zh">🇨🇳 中文</option>
            </select>
            <div className="flex flex-row w-[260px] bg-[#2b2b2b] justify-center items-center gap-2">
              <span className="text-white cursor-pointer hover:underline">
                {t.preferences}
              </span>
              <span>{"|"}</span>
              <span
                className="text-white cursor-pointer hover:underline"
                onClick={() => onLogout()}
              >
                {t.logout}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-row bg-[#2b2b2b] px-2 py-1 gap-4">
        <div className="flex gap-2 font-bold text-white items-center">
          <Link href={"/dashboard"} className={`px-3 py-2`}>
            <span className="hover:underline cursor-pointer">{t.bet_list}</span>
          </Link>
          <Link href={"/dashboard"} className={` px-3 py-2 `}>
            <span className="hover:underline cursor-pointer">
              {t.statement}
            </span>
          </Link>
          <Link href={"/dashboard"} className={` px-3 py-2 `}>
            <span className="hover:underline cursor-pointer">
              {t.my_account}
            </span>
          </Link>
          <Link href={"/dashboard"} className={` px-3 py-2 `}>
            <span className="hover:underline cursor-pointer">{t.result}</span>
          </Link>
          <Link href={"/dashboard"} className={` px-3 py-2 `}>
            <span className="hover:underline cursor-pointer">
              {t.transfer_all}
            </span>
          </Link>
        </div>

        <div className="flex flex-1 overflow-hidden bg-white border border-[#2b2b2b] items-center">
          <div className="text-red-600 whitespace-nowrap animate-marquee px-4">
            {t.dashboard_announcement}
          </div>
        </div>
      </div>
    </header>
  );
}
