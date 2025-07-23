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

const Page = () => {
  const t = useTranslation();
  const loginRef = useRef<HTMLDivElement>(null);
  const { login, isLoggedIn, isHydrated } = useAuthStore();
  const router = useRouter();

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
      router.push("/home");
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
          <div className="flex flex-col w-screen justify-center items-center overflow-hidden z-20">
            <div className="w-11/12 md:w-9/12 lg:w-5/6 xl:w-9/12 flex flex-col items-center">
              <div className={`flex flex-row pb-4`}>
                <h2
                  className={
                    "text-black font-semibold text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl whitespace-nowrap"
                  }
                >
                  {"Brand name"}
                </h2>
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
