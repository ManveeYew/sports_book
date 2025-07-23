"use client";
import React, { useEffect, useRef } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { User2, LockKeyhole } from "lucide-react";
import Button from "@/app/components/Button";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "@/app/components/Loader";
import { useMutation } from "@tanstack/react-query";
import { getErrorMessage } from "@/app/services/getErrorMessage";
import toast from "react-hot-toast";
import { useTranslation } from "@/lib/useTranslation";
import { useLanguageStore } from "@/store/useLanguageStore";
import Image from "next/image";

const Page = () => {
  const t = useTranslation();
  const loginRef = useRef<HTMLDivElement>(null);
  const { login, isLoggedIn, isHydrated } = useAuthStore();
  const router = useRouter();
  const { language, setLanguage } = useLanguageStore();

  const schema = z.object({
    email: z.string().min(1, t.email_required).email(t.email_invalid),
    password: z.string().min(1, t.password_required),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await login(data);
      return response;
    },
    onSuccess: () => {
      router.push("/dashboard");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    },
  });

  const onSubmit = async (data: FormData) => {
    if (signInMutation.isPending) return;
    signInMutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div
      ref={loginRef}
      className="flex flex-1 h-screen flex-col relative items-center justify-center overflow-hidden bg-white"
    >
      {!isHydrated && (
        <div className="flex justify-center items-center h-screen bg-white">
          <Loader />
        </div>
      )}
      {!isLoggedIn && isHydrated && (
        <>
          <div className="absolute top-4 right-4 z-30">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "zh")}
              className="p-2 border rounded"
            >
              <option value="en">🇬🇧 English</option>
              <option value="zh">🇨🇳 中文</option>
            </select>
          </div>
          <div className="flex flex-col w-screen justify-center items-center overflow-hidden z-20">
            <div className="w-11/12 md:w-9/12 lg:w-5/6 xl:w-9/12 flex flex-col items-center">
              <div
                className="
                  relative
                  px-4 py-2
                  w-50 xs:w-50 sm:w-52 md:w-54 lg:w-56 xl:w-58
                  h-26 xs:h-26 sm:h-28 md:h-30 lg:h-32 xl:h-34
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
                      (max-width: 468px) 10rem,
                      (max-width: 575px) 11rem,
                      (max-width: 768px) 12rem,
                      (max-width: 1024px) 13rem,
                      14rem
                    `}
                    className="object-contain"
                  />
                </div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex justify-center w-full"
              >
                <div
                  className={`
                    login_input_container
                    flex flex-col justify-center bg-[#00000015] gap-5 w-full max-w-screen-sm rounded-3xl overflow-hidden px-8 py-12
                `}
                >
                  <div className="w-full">
                    <div className="flex flex-row gap-1">
                      <User2
                        className="
                            text-primary
                            w-6
                            h-6
                            mr-1
                        "
                      />
                      <label className="block mb-1">{t.email}</label>
                    </div>

                    <input
                      type="email"
                      inputMode="email"
                      {...register("email")}
                      className="input_custom"
                    />
                    {errors.email && (
                      <p className="input_error_custom">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <div className="flex flex-row gap-1">
                      <LockKeyhole
                        className="
                            text-primary
                            w-6
                            h-6
                            mr-1
                        "
                      />
                      <label className="block mb-1">{t.password}</label>
                    </div>
                    <input
                      type="password"
                      {...register("password")}
                      className="input_custom"
                    />
                    {errors.password && (
                      <p className="input_error_custom">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-row mt-4 justify-center">
                    <Button
                      isLoading={signInMutation.isPending}
                      loadingAnimation
                      textClassName="!px-12 sm:!px-12 !py-2 sm:!py-2"
                    >
                      {t.login}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
