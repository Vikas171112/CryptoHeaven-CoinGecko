import React from "react";

function CoinDescription({ coin, currency }) {
  if (!coin) return null;
  return (
    <div className="flex-1 min-w-[320px] bg-white dark:bg-gray-900 rounded-xl shadow p-6 mb-4 lg:mb-0">
      <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
        {coin.name}{" "}
        <span className="uppercase text-gray-400">({coin.symbol})</span>
      </h2>
      <p className="text-gray-500 dark:text-gray-300 mb-2">
        Market Cap Rank: <b>#{coin.market_cap_rank}</b>
      </p>
      <p className="text-gray-500 dark:text-gray-300 mb-2">
        Current Price: {coin.market_data?.current_price?.[currency] ?? "-"}
      </p>
      <div className="prose max-w-none mt-3 text-gray-600 dark:text-gray-200">
        {/* <div dangerouslySetInnerHTML={{ __html: coin.description?.en }} /> */}
        Coin description or details here...
      </div>
    </div>
  );
}

export default CoinDescription;
