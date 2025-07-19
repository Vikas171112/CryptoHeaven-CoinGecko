import React, { useRef } from "react";
import { Line, getElementAtEvent } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ data, options, onPointClick }) {
  const chartRef = useRef();

  // Add click event handler:
  const handleClick = (event) => {
    const points = getElementAtEvent(chartRef.current, event);
    if (points.length > 0) {
      const idx = points[0].index;
      if (onPointClick) onPointClick(idx); // pass only idx, parent can use it!
    }
  };

  return (
    <Line ref={chartRef} data={data} options={options} onClick={handleClick} />
  );
}
