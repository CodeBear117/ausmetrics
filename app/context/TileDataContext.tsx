// This component creates a context that allows the tile data (headline stats) to be used globally in the app. The main area this context is used is within SummartTile.tsx, where the headline data is passed into a prompt and sent to an AI for processing.

// must be rendered client side given updates to state values
"use client";

import React, { createContext, useState, ReactNode } from "react";

// Define the structure for prompt metrics
interface PromptMetrics {
  weeklyEarnings: string;
  unemploymentRate: string;
  inflationRate: string;
  GdpGrowthRate: string;
  BalanceOfPayments: string;
  RetailTradeGrowth: string;
}

// Define the context's expected structure
interface TileDataContextType {
  promptMetrics: PromptMetrics;
  updatePromptMetrics: (
    key:
      | "weeklyEarnings"
      | "unemploymentRate"
      | "inflationRate"
      | "GdpGrowthRate"
      | "BalanceOfPayments"
      | "RetailTradeGrowth",
    value: string
  ) => void;
}

// Initialise with a default value.
const defaultMetrics: PromptMetrics = {
  weeklyEarnings: "(not provided)",
  unemploymentRate: "(not provided)",
  inflationRate: "(not provided)",
  GdpGrowthRate: "(not provided)",
  BalanceOfPayments: "(not provided)",
  RetailTradeGrowth: "(not provided)",
};

// Create context with default values
const TileDataContext = createContext<TileDataContextType>({
  promptMetrics: defaultMetrics,
  updatePromptMetrics: () => {}, // Placeholder updater function
});

// Provide the context provider component
const TileDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [promptMetrics, setPromptMetrics] =
    useState<PromptMetrics>(defaultMetrics);

  // Define the updater function for the context values
  const updatePromptMetrics = (
    key:
      | "weeklyEarnings"
      | "unemploymentRate"
      | "inflationRate"
      | "GdpGrowthRate"
      | "BalanceOfPayments"
      | "RetailTradeGrowth",
    value: string
  ) => {
    setPromptMetrics((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <TileDataContext.Provider value={{ promptMetrics, updatePromptMetrics }}>
      {children}
    </TileDataContext.Provider>
  );
};

export { TileDataContext, TileDataProvider };
