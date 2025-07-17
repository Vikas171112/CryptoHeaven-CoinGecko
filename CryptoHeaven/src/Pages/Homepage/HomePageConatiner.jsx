import React from "react";

import HomePageView from "./HomePageView";
import { useCurrencyContext } from "../../Hooks/CoontextsWrapper/useCurrencyContext";
import useFetchCoinData from "../../Hooks/useFetchCoinData";
import useFetchTrendingCoinData from "../../Hooks/useFetchTrendingcoins";
import { useNavigate } from "react-router-dom";

function HomePageContainer() {
  const { coinData, isLoading, isError, error } = useFetchCoinData();
  const { currency } = useCurrencyContext();
  const { TrendingCoinData } = useFetchTrendingCoinData();
  const navigate = useNavigate();

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
    />
  );
}

export default HomePageContainer;
