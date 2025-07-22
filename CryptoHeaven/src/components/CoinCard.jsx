import React, { useState } from "react";
import Button1 from "./Buttons/Button1";
import Modal from "./Modals/Modal";

export default function CoinCard({ coin = {} }) {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);

  if (!coin || Object.keys(coin).length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center min-h-[240px] max-w-[360px]">
        <span className="text-gray-400 dark:text-gray-500">No coin data</span>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center gap-4 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-2">
        <img
          src={coin.image.small}
          alt={coin.name}
          className="h-14 w-14 rounded-full shadow-sm border border-gray-200 dark:border-gray-600 object-contain"
        />
        <span className="ml-2 px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300">
          #{coin.market_cap_rank ?? "-"}
        </span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {coin.name ?? "-"}
        </span>
        <span className="uppercase tracking-wide text-md font-mono text-gray-400 dark:text-gray-300">
          {coin.symbol}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-blue-600 dark:text-amber-200">
          {coin.market_data.current_price != null
            ? `₹${coin.market_data.current_price.inr.toLocaleString("en-IN")}`
            : "-"}
        </span>
        {coin.price_change_percentage_24h != null && (
          <span
            className={`ml-2 px-2 py-0.5 rounded text-sm font-medium ${
              coin.price_change_percentage_24h >= 0
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        )}
      </div>

      <div className="mt-2 flex gap-2">
        <button
          className="px-4 py-1 rounded-full bg-amber-200 dark:bg-gray-700 text-blue-700 dark:text-amber-200 font-semibold text-sm shadow transition hover:bg-amber-300 dark:hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-amber-300"
          title="Add to Watchlist"
        >
          ★ Watchlist
        </button>
      </div>

      <div className="w-full mt-4 flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex justify-between">
          <span>Market Cap</span>
          <span>
            {coin.market_data.market_cap != null
              ? `₹${coin?.market_data?.market_cap.inr}`
              : "-"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Max Supply</span>
          <span>
            {coin.market_data.max_supply != null
              ? coin?.market_data?.max_supply?.toLocaleString()
              : "-"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Total Volume</span>
          <span>
            {coin.market_data.total_volume != null
              ? coin?.market_data?.total_volume?.inr.toLocaleString()
              : "-"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Market Cap Change(%)</span>
          <span>
            {coin.market_data.total_volume != null
              ? coin?.market_data?.market_cap_change_percentage_24h.toLocaleString()
              : "-"}
          </span>
        </div>
      </div>

      <div className="buttton-card flex justify-between">
        <Button1 title="About" onClick={() => setShowAboutModal(true)} />
        <Button1 title="News" onClick={() => setShowNewsModal(true)} />
      </div>

      <Modal
        open={showAboutModal}
        onClose={() => setShowAboutModal(false)}
        maxWidth="max-w-2xl"
      >
        <div className="font-bold text-2xl mb-2">About</div>
        <div>
          {coin.description?.en
            ? coin.description.en.slice(0, 350)
            : "No description available."}
        </div>
      </Modal>

      <Modal
        open={showNewsModal}
        onClose={() => setShowNewsModal(false)}
        maxWidth="max-w-xl"
      >
        <div className="font-bold text-2xl mb-2">News</div>
        <div>Latest news coming soon...</div>
      </Modal>
    </div>
  );
}
