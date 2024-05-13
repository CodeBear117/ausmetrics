// This component contains the code for the summary tile. The summary tile contains the response from an AI generated analysis of the current economic stats and data.

// useEffect requires client side rendering
"use client";

import React, { useState, useEffect, useContext } from "react";
import { HiSparkles } from "react-icons/hi2";
import { Card } from "@tremor/react";
import { TileDataContext } from "./TileDataContext";

const SummaryTile = () => {
  // Access the context
  const tileDataContext = useContext(TileDataContext);

  // Throw an error if the context isn't available
  if (!tileDataContext) {
    throw new Error(
      "TileDataContext is not available. Ensure the provider wraps the parent component."
    );
  }

  // extract promptMetrics from context
  const { promptMetrics } = useContext(TileDataContext);

  // initialise state for ai response
  const [response, setResponse] = useState("");

  // define function to obtain GPT response to economic data input
  const fetchData = async () => {
    try {
      // engineered prompt based on ABS metrics
      const prompt = `Provide a short analysis on the current state of the Australian Economy given the following statisttics: The current inflation rate is ${
        promptMetrics.inflationRate ?? "N/A"
      }, the current unemployment rate is ${
        promptMetrics.unemploymentRate ?? "N/A"
      }, the current weekly earnings of a full time adult is ${
        promptMetrics.weeklyEarnings ?? "N/A"
      }, the current GDP Growth Rate is ${
        promptMetrics.GdpGrowthRate ?? "N/A"
      }, the current Balance of Payments (current prices) is ${
        promptMetrics.BalanceOfPayments ?? "N/A"
      }, and finally, the current Retail Trade Growth is ${
        promptMetrics.RetailTradeGrowth ?? "N/A"
      }. If any of these metrics are not provided, please ignore them in the analysis, but state the metrics that were not provided. The analysis should not be more than 7 sentences.
      `;

      // post request to backend
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }), // turns the prompt into an object-string
      });

      // handle errors receiving response
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      // response from AI saved to variable and set state
      const aiResponse = await res.json();
      setResponse(aiResponse.message);

      // handle errors in fetching data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // ensure all data is available before fetch to avoid mutltiple fetches based on changes to dependency array
    const allDataProvided = Object.values(promptMetrics).every(
      (value) => value !== "(not provided)"
    );
    if (allDataProvided) {
      fetchData();
    }
  }, [promptMetrics]); // Dependency on promptMetrics, values get updated when data is fetched from ABS API call

  return (
    <Card className="p-3 mb-4 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong overflow-x-scroll">
      <div className="flex gap-1">
        <HiSparkles className="text-[#6366e9] w-6 h-6" />
        <h2 className="text-lg font-medium">AI Economist</h2>
      </div>
      <p className="text-base text-tremor-content dark:text-dark-tremor-content">
        {response}
      </p>
    </Card>
  );
};

export default SummaryTile;
