import React, { useState } from "react";

import HomePageView from "./HomePageView";
import { useCurrencyContext } from "../../Hooks/CoontextsWrapper/useCurrencyContext";
import useFetchCoinData from "../../Hooks/useFetchCoinData";
import useFetchTrendingCoinData from "../../Hooks/useFetchTrendingcoins";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader";
function HomePageContainer() {
  const { currency } = useCurrencyContext();
  const {
    TrendingCoinData,
    isLoading: trendingDataLoading,
    isSuccess: trendingDataSuccess,
    isError: trendingDataError,
  } = useFetchTrendingCoinData();

  const [page, setPage] = useState(1);
  const per_page = 10;

  const { coinData, isLoading, isError, error } = useFetchCoinData(
    page,
    per_page
  );

  const navigate = useNavigate();

  const loading = isLoading || trendingDataLoading;

  if (loading) {
    return <Loader />;
  }

  if (isError || trendingDataError) {
    return (
      <div className="text-center text-red-600 p-4">
        Error loading data. Please try again.
      </div>
    );
  }

  const trendingItems = (TrendingCoinData?.coins || []).map(({ item }) => ({
    label: item.symbol,
    value: item.data?.price ? item.data.price.toFixed(3) : "-",
    img: item.small || item.large || item.thumb,
    symbol: item.symbol?.toUpperCase(),
  }));

  const nftItems = (TrendingCoinData?.nfts || []).map((nft) => ({
    label: nft.name,
    value: nft.floor_price_in_native_currency
      ? `$${Number(nft.floor_price_in_native_currency).toFixed(2)}`
      : "-",
    img: nft.thumb || nft.image,
    symbol: nft.symbol?.toUpperCase(),
  }));

  const columns = [
    { header: "Logo", key: "image" },
    { header: "Name", key: "name" },
    { header: "Symbol", key: "symbol" },
    { header: "Price", key: "current_price" },
    { header: "Market Cap", key: "market_cap" },
    { header: "Rank", key: "market_cap_rank" },
    { header: "24h Change (%)", key: "price_change_percentage_24h" },
  ];

  function handleRowClick(row) {
    navigate(`/details/${row.id}`);
  }

  function handleNavigate(key) {
    navigate(`/${key}/list`);
  }

  return (
    <HomePageView
      trendingItems={trendingItems}
      nftItems={nftItems}
      columns={columns}
      coinData={coinData}
      isLoading={isLoading}
      isError={isError}
      error={error}
      onRowClick={handleRowClick}
      page={page}
      setPage={setPage}
      perPage={per_page}
      handleNavigate={handleNavigate}
    />
  );
}

export default HomePageContainer;
