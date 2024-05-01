// This component contains the code for the summary tile. The summary tile contains the response from an AI generated analysis of the current economic stats and data.

// useEffect requires client side rendering
"use client";

import React, { useState, useEffect } from "react";
import { HiSparkles } from "react-icons/hi2";
import { Card } from "@tremor/react";

const SummaryTile = () => {
  const [response, setResponse] = useState("");

  // execute on first render only
  useEffect(() => {
    // define function to obtain GPT response to economic data input
    const fetchData = async () => {
      try {
        // data for prompt (hardcoded)
        const promptmetrics = {
          unemploymentRate: 3.8,
          inflationRate: 3.6,
        };

        // engineered prompt
        const prompt = `The current inflation rate is ${promptmetrics.inflationRate} and the current unemployment rate is ${promptmetrics.unemploymentRate}`;

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

    // execute function without dependency
    fetchData();
  }, []);

  return (
    <Card className="p-3 mb-4 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong overflow-x-scroll">
      <div className="flex gap-1">
        <HiSparkles className="text-[#6366e9] w-6 h-6" />
        <h2 className="text-lg font-medium">AI Economist</h2>
      </div>
      <p>{response}</p>
    </Card>
  );
};

export default SummaryTile;
