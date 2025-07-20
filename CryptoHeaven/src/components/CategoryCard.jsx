import React from "react";

/**
 * Card for rendering a single CoinGecko category.
 * Props:
 *   - category: {
 *       id, name, market_cap, market_cap_change_24h,
 *       top_3_coins, volume_24h, updated_at, ...
 *     }
 */
const CategoryCard = ({ category }) => {
  if (!category) return null;

  // Safe formatting for numbers (with fallback)
  const formattedMarketCap =
    typeof category.market_cap === "number"
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact",
          compactDisplay: "short",
        }).format(category.market_cap)
      : "-";

  const formattedVolume =
    typeof category.volume_24h === "number"
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact",
          compactDisplay: "short",
        }).format(category.volume_24h)
      : "-";

  // 24h change: safe, colored, with fallback
  const hasChange = typeof category.market_cap_change_24h === "number";
  const changeColor = !hasChange
    ? "text-gray-400"
    : category.market_cap_change_24h >= 0
    ? "text-green-600"
    : "text-red-600";

  // Top 3 coin images (always array or undefined)
  const hasTopCoins =
    Array.isArray(category.top_3_coins) && category.top_3_coins.length > 0;

  // Updated time
  let formattedTime = "-";
  if (category.updated_at) {
    try {
      formattedTime = new Date(category.updated_at).toLocaleString();
    } catch (e) {}
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col p-6 min-h-[220px]">
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 truncate">
        {category.name ?? <span className="italic text-gray-400">No name</span>}
      </h3>

      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        <p>
          Market Cap:{" "}
          <span className="font-semibold">{formattedMarketCap}</span>
        </p>
        <p>
          24h Change:{" "}
          <span className={`${changeColor} font-semibold`}>
            {hasChange ? category.market_cap_change_24h.toFixed(2) + "%" : "-"}
          </span>
        </p>
        <p>
          24h Volume: <span className="font-semibold">{formattedVolume}</span>
        </p>
      </div>

      {hasTopCoins && (
        <div className="mt-auto">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Top 3 Coins:
          </p>
          <div className="flex -space-x-2">
            {category.top_3_coins.slice(0, 3).map((img, i) => (
              <img
                key={i}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-900 bg-gray-200 dark:bg-gray-700"
                src={img}
                alt={`Top_coin_${i + 1}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/32?text=?";
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
        Updated: {formattedTime}
      </div>
    </div>
  );
};

export default CategoryCard;
