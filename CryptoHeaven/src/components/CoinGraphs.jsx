// src/components/CoinGraphs.jsx
import React from "react";

function CoinGraphs({ coin }) {
  if (!coin) return null;
  return (
    <div className="flex-1 min-w-[320px] bg-white dark:bg-gray-900 rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Graph/Chart
      </h3>
      <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-gray-400">
        [Graph Placeholder]
      </div>
    </div>
  );
}

export default CoinGraphs;
