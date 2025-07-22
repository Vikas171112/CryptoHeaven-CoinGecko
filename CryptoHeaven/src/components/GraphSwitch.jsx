import React from "react";

export default function GraphSwitch({ value, onChange }) {
  const options = [
    { label: "Price", value: "prices" },
    { label: "Market Cap", value: "market_caps" },
    { label: "Volume", value: "total_volumes" },
  ];
  return (
    <div className="graph-switch flex gap-2 my-4">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`
            px-4 py-1.5 rounded-full font-semibold transition text-sm
            ${
              value === opt.value
                ? "bg-blue-600 text-white shadow dark:bg-amber-500 dark:text-gray-900"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-amber-800 dark:text-gray-300"
            }
            focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-amber-300 cursor-pointer
          `}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
