import React from "react";
import useFetchExchangeVolumeChart from "../../Hooks/useFetchExchaneVolumeChart";
import LineChart from "./LineChart";

function ExchangeChart({ id }) {
  const {
    ExchangesVolume = [],
    isError,
    isLoading,
    error,
  } = useFetchExchangeVolumeChart(id);

  // Debug: log volume data
  React.useEffect(() => {
    console.log("ExchangesVolume:", ExchangesVolume);
  }, [ExchangesVolume]);

  // Error state
  if (isError || error) {
    return (
      <div className="text-red-500 text-center py-8">
        Error loading chart: {error?.message || error?.toString()}
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return <div className="text-center py-8">Loading chart...</div>;
  }

  // No data state
  if (!ExchangesVolume || ExchangesVolume.length === 0) {
    return <div className="text-center py-8">No data available.</div>;
  }

  // Data mapping
  const labels = ExchangesVolume.map(([timestamp]) =>
    new Date(Number(timestamp)).toLocaleDateString()
  );
  const data = ExchangesVolume.map(([, value]) => Number(value));

  // If you want a gradient under line (for Chart.js v3+)
  // Most charting libs (with react-chartjs-2) can accept gradient as backgroundColor if you use a ref, but as shorthand we use semitransparent blue here.

  const chartData = {
    labels,
    datasets: [
      {
        label: "Volume",
        data,
        borderColor: "#2563eb", // Tailwind blue-600
        backgroundColor: "rgba(37,99,235,0.13)", // Lighter blue fill
        pointBackgroundColor: "#f59e42", // Orange dots
        pointBorderColor: "#fff",
        pointRadius: 4, // Slightly bigger points
        pointHoverRadius: 7, // Larger on hover
        pointHoverBackgroundColor: "#10b981", // Green on hover
        fill: true,
        tension: 0.45,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "center",
        labels: {
          color: "#1e293b", // Tailwind slate-800
          font: { weight: "bold", size: 15 },
        },
      },
      tooltip: {
        backgroundColor: "#0ea5e9ee", // cyan-500 with alpha
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1.5,
        intersect: false,
        mode: "index",
        padding: 12,
        borderRadius: 8,
        caretPadding: 6,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#e0e7ef66", // faint blue/gray
        },
        ticks: { color: "#64748b" }, // slate-500
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e0e7ef22", // even fainter
        },
        ticks: {
          color: "#64748b",
          font: { weight: "bold" },
        },
      },
    },
  };

  // Chart container styling
  return (
    <div className="rounded-xl shadow-xl bg-white dark:bg-gray-900 p-4 md:p-8">
      <LineChart data={chartData} options={chartOptions} />
    </div>
  );
}

export default ExchangeChart;
