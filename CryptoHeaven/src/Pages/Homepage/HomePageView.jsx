// src/Pages/HomePageView.jsx
import React from "react";
import Cards from "../../components/Cards";
import Table from "../../components/Table";

const HomePageView = ({
  trendingItems = [],
  nftItems = [],
  columns = [],
  coinData = [],
  isLoading,
  isError,
  error,
  onRowClick,
}) => (
  <>
    <div className="flex flex-wrap gap-6 mb-8 justify-center">
      <Cards cardTitle="Trending Coins" items={trendingItems.slice(0, 5)} />
      <Cards cardTitle="Trending NFTs" items={nftItems.slice(0, 5)} />
      <div className="flex flex-col gap-1">
        <Cards cardTitle="Trending Coins" items={trendingItems.slice(0, 2)} />
        <Cards cardTitle="Trending NFTs" items={nftItems.slice(0, 2)} />
      </div>
      <Cards cardTitle="Trending NFTs" items={nftItems.slice(0, 5)} />
    </div>
    {isLoading ? (
      <div className="text-center py-8 text-gray-500">Loading...</div>
    ) : isError ? (
      <div className="text-center py-8 text-red-600">
        Error: {error?.message || "Something went wrong!"}
      </div>
    ) : (
      <Table columns={columns} data={coinData} onRowClick={onRowClick} />
    )}
  </>
);

export default HomePageView;
