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
                <div className="logo-container mt-6 mb-4 flex align-items gap-2">
                  <img
                    src="ausmetrics-logo.svg"
                    alt="Ausmetrics Logo"
                    className="w-8 h-8"
                  />
                  <span className="rounded-lg text-inter font-bold text-3xl  text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Ausmetrics
                  </span>
                </div>
                <Card className="p-3 mb-4 text-tremor-default text-tremor-content dark:text-dark-tremor-content overflow-x-scroll">
                  <p>
                    Explore the most important and up to date ABS statistics on
                    one page.
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
        </body>
      </html>
    </ClerkProvider>
  );
}
