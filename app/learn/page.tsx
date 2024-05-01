import React from "react";

const page = () => {
  return (
    <main className="text-tremor-content dark:text-dark-tremor-content p-4">
      <div className="mt-4 mb-3 lg:mr-60">
        <h1 className="font-bold text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Learn the Stats
        </h1>
        <h2 className="text-xl">
          Learn more about the statistics presented on the dashboard.
        </h2>
        <br />
        <div>
          <h2 className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Balance of Payments
          </h2>
          <p>
            The Balance of Payments (BoP) is a comprehensive record of all
            financial transactions between a country and the rest of the world
            over a specific period. It consists of two main components: the
            current account, which tracks goods and services trade, and the
            capital and financial account, which records investments and
            financial flows, providing a holistic view of a nation&apos;s
            international economic position.
          </p>
          <br />
          <p>
            A good Balance of Payments typically reflects a stable balance
            between a country&apos;s current account and capital and financial
            account. While some fluctuations are normal, persistent deficits or
            surpluses in either account can indicate economic imbalances. A{" "}
            <span className="font-bold">balanced or moderately positive</span>{" "}
            BoP suggests a country has a sustainable economic position, with
            sufficient trade and investment flows to support its economic health
            over the long term.
          </p>
          <br />

          <h2 className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Consumer Price Index (CPI)
          </h2>
          <p>
            The Consumer Price Index (CPI) measures the average change over time
            in the prices paid by urban consumers for a market basket of
            consumer goods and services. It is a key indicator used to track
            inflation, reflecting how the cost of living evolves by comparing
            current prices to those from a base period.
          </p>
          <br />

          <h2 className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            GDP Growth Rate
          </h2>
          <p>
            The GDP Growth Rate measures the percentage change in a
            country&apos;s Gross Domestic Product (GDP) over a specific period,
            typically on a quarterly or annual basis. It reflects the pace at
            which a nation&apos;s economy is expanding or contracting, with
            positive growth indicating economic expansion and negative growth
            signaling a contraction.
          </p>
          <br />
          <p>
            A good rate of GDP growth typically ranges between
            <span className="font-bold"> 2% and 3% per year</span> for mature,
            developed economies. This range indicates steady economic expansion,
            suggesting healthy productivity and economic stability, while
            avoiding potential overheating or inflationary pressures. For
            developing economies, higher growth rates may be considered
            favorable, reflecting their rapid progress.
          </p>
          <br />

          <h2 className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Inflation Rate
          </h2>
          <p>
            The inflation rate measures the percentage increase in the general
            price level of goods and services over a specific period, typically
            a year. It reflects how much the purchasing power of money has
            decreased, indicating how much more expensive the same basket of
            goods or services has become.
          </p>
          <br />
          <p>
            A good range for the inflation rate is generally between
            <span className="font-bold"> 2% and 3% per year</span>. This range
            is often considered ideal by economists and policymakers as it
            indicates stable and moderate price growth, supporting economic
            stability without significantly eroding purchasing power.
          </p>
          <br />

          <h2 className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Retail Trade Growth Rate
          </h2>
          <p>
            The Current Retail Trade Growth Rate measures the percentage change
            in retail sales over a specific period, typically on a monthly or
            annual basis. It indicates consumer spending behavior and economic
            health, with positive growth reflecting increasing consumer
            confidence and demand, while negative growth signals a potential
            slowdown in the economy.
          </p>
          <br />
          <p>
            A good range for the Current Retail Trade Growth Rate typically
            falls between <span className="font-bold">2% and 5%</span> on an
            annual basis. This range indicates moderate and sustainable growth
            in consumer spending, reflecting economic stability and confidence.
            Significant deviations, either higher or lower, can indicate
            potential economic concerns, such as inflationary pressures or a
            weakening demand.
          </p>
          <br />

          <h2 className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Unemployment Rate
          </h2>
          <p>
            The unemployment rate measures the percentage of the labor force
            that is unemployed and actively seeking work. It serves as an
            indicator of economic health, with lower unemployment rates
            signifying a more robust economy, while higher rates indicate
            potential economic challenges.
          </p>
          <br />
          <p>
            A good range for the unemployment rate typically falls between
            <span className="font-bold"> 3% and 5% per year</span>. This range
            is often associated with a healthy economy, as it indicates a
            balance between job seekers and available job opportunities, while
            allowing for some natural unemployment due to factors like job
            transitions and seasonal work.
          </p>
          <br />
        </div>
      </div>
    </main>
  );
};

export default page;
