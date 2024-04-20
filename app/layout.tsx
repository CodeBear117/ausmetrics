import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import { Card } from "@tremor/react";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ausmetrics",
  description: "ABS data simplified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark:bg-slate-950 antialiased">
        <body className={inter.className}>
          <ThemeProvider>
            <div className="flex h-screen flex-col md:flex-row">
              <div className="w-full flex-none px-4 md:pr-0 md:w-72">
                <div className="mt-6 mb-5">
                  <picture>
                    <source
                      srcSet="ausmetrics-logo-full-white-cropped.svg"
                      media="(prefers-color-scheme: dark)"
                    />
                    <img
                      src="ausmetrics-logo-full-black-cropped.svg"
                      alt="Ausmetrics Logo"
                      className="h-8 w-56"
                    />
                  </picture>
                </div>
                <Card className="p-3 mb-4 text-tremor-default text-tremor-content dark:text-dark-tremor-content overflow-x-scroll">
                  <p>
                    Welcome to Ausmetrics! Use this dashboard to quickly view
                    Australia's latest economic data. Data sourced from the
                    Australian Bureau of Statistics (ABS). More metrics coming
                    soon!
                  </p>
                </Card>
                <Card className="p-3 mb-4 text-tremor-default text-tremor-content dark:text-dark-tremor-content overflow-x-scroll">
                  <p>Created by Sahil Kumar, 2024</p>
                </Card>
                <Card className="p-3 mb-4 text-tremor-default text-tremor-content dark:text-dark-tremor-content flex gap-2 overflow-x-scroll">
                  <div>
                    <SiTypescript />
                  </div>
                  <div>
                    <SiNextdotjs />
                  </div>
                  <div>
                    <FaReact />
                  </div>
                  <div>
                    <SiTailwindcss />
                  </div>
                </Card>
              </div>
              <div className="flex-grow md:overflow-y-auto">{children}</div>
            </div>
          </ThemeProvider>
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
