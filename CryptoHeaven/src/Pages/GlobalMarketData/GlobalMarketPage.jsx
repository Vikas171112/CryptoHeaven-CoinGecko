import React from "react";
import Dashboard from "../../components/GlobalMarketData/DashBoard";
import useFetchGlobalMarketData from "../../Hooks/useFetchGlobalMarketData";

function GlobalMarketPage() {
  const { isLoading, isSuccess, error, isError, globalMarketData } =
    useFetchGlobalMarketData();

  if (isLoading) {
    return <div className="text-center text-white mt-8">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-8">
        {error?.message || "Something went wrong!"}
      </div>
    );
  }

  // React Query's response is usually: { data: { ...actualData... } }
  const marketData = globalMarketData?.data;

  if (!marketData) {
    return (
      <div className="text-center text-red-500 mt-8">No market data found!</div>
    );
  }

  return (
    <div>
      <Dashboard data={marketData} />
    </div>
  );
}

export default GlobalMarketPage;
