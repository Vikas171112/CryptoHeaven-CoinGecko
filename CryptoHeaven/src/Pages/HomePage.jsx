// src/Pages/HomePage.jsx
import React from "react";
import { useCurrencyContext } from "../Hooks/CoontextsWrapper/useCurrencyContext";
import useFetchCoinData from "../Hooks/useFetchCoinData";
import Table from "../components/Table";
import useFetchTrendingCoinData from "../Hooks/useFetchTrendingcoins";
import Cards from "../components/Cards";

function HomePage() {
  const { coinData, isLoading, isError, error } = useFetchCoinData();
  const { currency } = useCurrencyContext();
  const { TrendingCoinData } = useFetchTrendingCoinData();
  console.log(TrendingCoinData);
  // Only show these important columns
  const trendingItems = (TrendingCoinData?.coins || []).map(({ item }) => ({
    label: item.symbol,
    value: item.data.price ? item.data.price.toFixed(3) : "-",
    img: item.small || item.large || item.thumb, // image
    symbol: item.symbol?.toUpperCase(),
    // aur bhi kuch chahiye toh yahan add karo!
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

  return (
    <>
      {" "}
      <div className="flex flex-wrap  gap-6 mb-8">
        <Cards cardTitle="Trending Coins" items={trendingItems.slice(0, 5)} />
        <Cards cardTitle="Trending NFTs" items={nftItems.slice(0, 5)} />
        {/* <Cards cardTitle="Top Losers" items={topLoserItems} /> */}
      </div>
      <Table columns={columns} data={coinData} />;
    </>
  );
}

export default HomePage;
