import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import LenisProvider from "@/components/LenisProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: "#3CFF00", // ✅ tick background color
                secondary: "#ffffff", // ✅ tick icon color (foreground)
              },
            },
          }}
          position="top-center"
          reverseOrder={false}
        />
        <NuqsAdapter>
          <LenisProvider>{children}</LenisProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
