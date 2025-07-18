import React, { useState } from "react";
import useFetchCoinHistoricalData from "../../Hooks/useFetchHistoricalData";
import { useParams } from "react-router-dom";
import CoinDescription from "../../components/CoinDescription";
import PriceChart from "../../components/Charts/PriceChart";
import useFetchCoinDetails from "../../Hooks/useFetchCoinDetails";
import MarketCapChart from "../../components/Charts/MarketCapChart";
import VoulmeChart from "../../components/Charts/VolumeChart";
// ...other imports

function CoinDetailsPage() {
  const { id } = useParams();
  const [days, setDays] = useState(30); // Default: 30 days
  const { currency, isError, isLoading, coin } = useFetchCoinDetails(id);
  const {
    coinHistoricalData,
    isLoading: chartLoading,
    isError: chartError,
  } = useFetchCoinHistoricalData(id, days); // <--- days ab yahan se ayega

  // ...loading/error checks
  console.log(coinHistoricalData);
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-8 p-4 w-full max-w-6xl h-auto mx-auto">
      <CoinDescription coin={coin} currency={currency} />

      <div className="flex-1">
        <div className="mb-4 flex items-center gap-2">
          <span className="font-semibold text-gray-500">Days:</span>
          <select
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value={1}>1 Day</option>
            <option value={7}>7 Days</option>
            <option value={30}>30 Days</option>
            <option value={90}>90 Days</option>
            <option value={180}>180 Days</option>
            <option value={365}>1 Year</option>
            <option value="max">Max</option>
          </select>
        </div>
        {/* Chart section */}
        {chartLoading ? (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex items-center justify-center">
            Loading chart...
          </div>
        ) : chartError ? (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex items-center justify-center text-red-500">
            Chart data error
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2 overflow-auto">
              <PriceChart prices={coinHistoricalData?.prices || []} />
              <MarketCapChart marketCap={coinHistoricalData?.market_caps} />
              <VoulmeChart Volume={coinHistoricalData?.total_volumes} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CoinDetailsPage;
