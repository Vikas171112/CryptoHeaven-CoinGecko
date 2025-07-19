// src/components/Charts/PriceChart.jsx
import React from "react";
import LineChart from "./LineChart";

function PriceChart({ prices }) {
  // Safety: Handle null/empty data
  if (!prices || prices.length === 0)
    return <div>No price data available.</div>;

  // Data formatting: X = date, Y = price
  const data = {
    labels: prices.map(([timestamp]) =>
      new Date(timestamp).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Price (USD)",
        data: prices.map(([, price]) => price),
        borderColor: "#38bdf8", // blue line
        borderWidth: 1, // thicker line
        tension: 0.7, // smoothness, 0=straight, >0=smooth
        borderDash: [6, 6], // dashed line ([dash, gap])
        fill: false, // no area fill
        pointRadius: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "Price History" },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Price (USD)" } },
    },
  };

  return (
    <div className="flex-1 min-w-[320px] bg-white dark:bg-gray-900 rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Price Chart
      </h3>
      <div className="w-full h-64">
        <LineChart data={data} options={options} />
      </div>
    </div>
  );
}
export default PriceChart;
