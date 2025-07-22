import React from "react";

function formatDescription(text, wordLimit = 80) {
  if (!text || !text.trim()) return null;
  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return text.trim();
  return words.slice(0, wordLimit).join(" ") + "...";
}

function ExchangeCard({ exchange = {} }) {
  const displayKeys = [
    { label: "Name", key: "name" },
    { label: "Country", key: "country" },
    { label: "Trust Score", key: "trust_score" },
    { label: "Pairs", key: "pairs" },
    { label: "24h BTC Volume", key: "trade_volume_24h_btc" },
  ];

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col overflow-hidden">
      <div className="flex flex-col items-center pt-8 pb-3 bg-gradient-to-b from-gray-50 dark:from-gray-800/70 to-white dark:to-gray-900">
        <img
          src={exchange.image}
          alt={exchange.name || "Exchange Logo"}
          className="h-20 w-20 rounded-full shadow object-contain bg-white border border-gray-200 dark:border-gray-700 mb-2"
        />
        <span className="font-bold text-2xl text-gray-800 dark:text-gray-100">
          {exchange.name}
        </span>
      </div>

      <div className="px-7 py-5 flex-1">
        <h2 className="text-xl font-semibold mb-2 text-primary">
          Exchange Details
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-justify">
          {exchange?.description && exchange.description.trim()
            ? formatDescription(exchange.description, 80)
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget sem vitae urna sodales cursus vel ac justo. Vivamus ac odio nec sapien tempus pulvinar at id erat. Nunc scelerisque vitae nulla et dictum. Pellentesque blandit."}
        </p>
        <ul className="divide-y divide-gray-100 dark:divide-gray-800">
          {displayKeys.map(({ label, key }) => (
            <li key={key} className="flex justify-between text-[15px] py-2">
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {label}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {exchange[key] !== undefined &&
                exchange[key] !== null &&
                String(exchange[key]).trim() !== "" ? (
                  exchange[key]
                ) : (
                  <span className="text-gray-400 italic">N/A</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExchangeCard;
