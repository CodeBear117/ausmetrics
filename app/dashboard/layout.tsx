import { Card } from "@tremor/react";
import Dashboard from "./page";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none px-4 md:pr-0 md:w-72">
        <h1 className="text-inter font-bold text-3xl mt-6 mb-4 text-white">
          Ausmetrics
        </h1>
        <Card
          className="p-3 mb-4 text-tremor-default text-tremor-content dark:text-dark-tremor-content"
          decoration="top"
          decorationColor="slate-900"
        >
          <p>
            Explore the most important and up to date ABS statistics on one
            page.
          </p>
        </Card>
        <Card
          className="p-3 text-tremor-default text-tremor-content dark:text-dark-tremor-content"
          decoration="top"
          decorationColor="slate-900"
        >
          <p>Created by Sahil Kumar, 2024</p>
        </Card>
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}
