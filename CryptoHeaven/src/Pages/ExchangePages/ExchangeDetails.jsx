import React from "react";
import useFetchExchangeDetails from "../../Hooks/useFetchExchangeDetails";
import { useParams } from "react-router-dom";
import ExchangeCard from "../../components/ExchangeCard";

import ExchangeChart from "../../components/Charts/ExchangeChart";

function ExchangeDetails() {
  const { id } = useParams();
  const { Exchanges } = useFetchExchangeDetails(id);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-2 md:p-6">
      {/* Left: Card */}
      <div className="w-full md:w-1/3">
        <ExchangeCard exchange={Exchanges} />
      </div>
      {/* Right: Chart */}
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 flex-1">
          <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-100">
            Exchange Volume Trend (Dummy Data)
          </h3>
          <div style={{ minHeight: 600 }}>
            <ExchangeChart id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExchangeDetails;
