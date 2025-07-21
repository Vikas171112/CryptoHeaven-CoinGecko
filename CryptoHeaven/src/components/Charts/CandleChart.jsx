import React from "react";
import Plot from "react-plotly.js";

const candleData = [
  [1709395200000, 61942, 62211, 61721, 61845],
  [1709409600000, 61828, 62139, 61726, 62139],
  [1709424000000, 62171, 62210, 61821, 62068],
];

const times = candleData.map((d) => new Date(d[0]));
const open = candleData.map((d) => d[1]);
const high = candleData.map((d) => d[2]);
const low = candleData.map((d) => d[3]);
const close = candleData.map((d) => d[4]);

function CandleChart() {
  return (
    <Plot
      data={[
        {
          x: times,
          open: open,
          high: high,
          low: low,
          close: close,
          type: "candlestick",
          name: "BTC/USD",
        },
      ]}
      layout={{
        title: "Candlestick Chart",
        xaxis: { title: "Time" },
        yaxis: { title: "Price" },
      }}
      style={{ width: "100%", height: "400px" }}
      config={{ responsive: true }}
    />
  );
}

export default CandleChart;
