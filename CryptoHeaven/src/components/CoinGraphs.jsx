import React from "react";
import GraphSwitch from "./GraphSwitch";
import LineChart from "./Charts/LineChart";
import Button1 from "./Buttons/Button1";

// Added: props onPointClick for click event
export default function CoinGraphs({
  chartData,
  options,
  chartType,
  setChartType,
  onPointClick,
}) {
  return (
    <div className="flex-1 min-w-[320px] bg-white dark:bg-gray-900 rounded-xl shadow p-6">
      <GraphSwitch value={chartType} onChange={setChartType} />
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Graph/Chart
      </h3>
      <div
        className="w-full min-h-[16rem] max-h-[32rem] flex items-center justify-center"
        style={{ height: 400 }}
      >
        <LineChart
          data={chartData}
          options={options}
          onPointClick={onPointClick}
        />
      </div>
    </div>
  );
}
