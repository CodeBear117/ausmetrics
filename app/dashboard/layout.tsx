import { Card } from "@tremor/react";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none px-4 md:pr-0 md:w-72">
        <h1 className="px-3 rounded-lg text-inter font-bold text-3xl mt-6 mb-4 text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Ausmetrics
        </h1>
        <Card className="p-3 mb-4 text-tremor-default text-tremor-content dark:text-dark-tremor-content overflow-x-scroll">
          <p>
            Explore the most important and up to date ABS statistics on one
            page.
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
  );
}
