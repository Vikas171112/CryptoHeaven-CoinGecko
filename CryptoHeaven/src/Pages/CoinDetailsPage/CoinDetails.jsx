import React, { useState } from "react";
import CoinCard from "../../components/CoinCard";
import CoinGraphs from "../../components/CoinGraphs";
import { useParams } from "react-router-dom";
import useFetchCoinDetails from "../../Hooks/useFetchCoinDetails";
import useFetchCoinHistoricalData from "../../Hooks/useFetchHistoricalData";
import Button1 from "../../components/Buttons/Button1";

export default function CoinDetails() {
  const { id } = useParams();
  const [chartType, setChartType] = useState("prices"); // "prices", "market_caps", "total_volumes"
  const [days, setDays] = useState(30);

  // Data fetching
  const { isError, isLoading, coin } = useFetchCoinDetails(id || "bitcoin");
  const {
    coinHistoricalData,
    isLoading: chartLoading,
    isError: chartError,
  } = useFetchCoinHistoricalData(id || "bitcoin", days);

  // Loading and error checks
  if (isLoading || chartLoading) return <div>Loading...</div>;
  if (isError || chartError || !coin)
    return <div>Error loading coin data.</div>;

  // Data mapping for chart
  const arr = coinHistoricalData?.[chartType] || [];
  const labels = arr.map(([timestamp]) => {
    const date = new Date(timestamp);
    if (days === 1) {
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return hours >= 12
        ? `${hours === 12 ? 12 : hours - 12}:${minutes} PM`
        : `${hours === 0 ? 12 : hours}:${minutes} AM`;
    }
    return date.toLocaleDateString();
  });
  const data = arr.map(([, value]) => value);

  const chartData = {
    labels,
    datasets: [
      {
        label:
          chartType === "prices"
            ? "Price"
            : chartType === "market_caps"
            ? "Market Cap"
            : "Volume",
        data,
        borderColor:
          chartType === "prices"
            ? "#38bdf8"
            : chartType === "market_caps"
            ? "#10b981"
            : "#f59e42",
        backgroundColor: "rgba(56,189,248,0.08)",
        tension: 0.4,
        pointRadius: 0.6,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: { display: false },
    },
    scales: {
      x: { title: { display: true, text: "Date/Time" } },
      y: { title: { display: true, text: "Value" } },
    },
  };

  // Chart point click
  const handleChartClick = (idx) => {
    const label = chartData.labels[idx];
    const value = chartData.datasets[0].data[idx];
    alert(`Label: ${label}\nValue: ${value}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      <CoinCard coin={coin} />

      {chartLoading ? (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex items-center justify-center">
          Loading chart...
        </div>
      ) : chartError ? (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex items-center justify-center text-red-500">
          Chart data error
        </div>
      ) : (
        <CoinGraphs
          chartData={chartData}
          options={options}
          chartType={chartType}
          setChartType={setChartType}
          onPointClick={handleChartClick}
        />
      )}
    </div>
  );
}
