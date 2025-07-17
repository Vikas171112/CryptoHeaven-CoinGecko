// src/Pages/CoinDetailsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import useFetchCoinDetails from "../../Hooks/useFetchCoinDetails";
import CoinDescription from "../../components/CoinDescription";
import CoinGraphs from "../../components/CoinGraphs";

function CoinDetailsPage() {
  const { id } = useParams();
  const { currency, isError, isLoading, coin } = useFetchCoinDetails(id);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500 py-10">Error loading data</div>
    );
  if (!coin) return null;

  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-8 p-4 w-full max-w-10xl h-[100vh] mx-auto">
      <CoinDescription coin={coin} currency={currency} />
      <CoinGraphs coin={coin} />
    </div>
  );
}

export default CoinDetailsPage;
