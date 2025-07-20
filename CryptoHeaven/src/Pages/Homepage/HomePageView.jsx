// src/Pages/HomePageView.jsx
import React from "react";
import Cards from "../../components/Cards";
import Table from "../../components/Table";
import Button1 from "../../components/Buttons/Button1";
import CoinDetails from "../CoinDetailsPage/CoinDetails";
import NfTTables from "../../components/NfTTables";

const HomePageView = ({
  trendingItems = [],
  nftItems = [],
  columns = [],
  coinData = [],
  isLoading,
  isError,
  error,
  onRowClick,
  page,
  setPage,
  per_page = 10,
  handleNavigate,
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
    <div className="flex">
      {["nft", "categories", "exchanges"].map((key) => (
        <Button1
          key={key}
          title={key.charAt(0).toUpperCase() + key.slice(1)}
          onClick={() => handleNavigate(key)}
        />
      ))}
    </div>

    {isLoading ? (
      <div className="text-center py-8 text-gray-500">Loading...</div>
    ) : isError ? (
      <div className="text-center py-8 text-red-600">
        Error: {error?.message || "Something went wrong!"}
      </div>
    ) : (
      <>
        {" "}
        <Table columns={columns} data={coinData} onRowClick={onRowClick} />
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50 text-black"
          >
            Prev
          </button>
          <span>
            Page <b>{page}</b>
          </span>
          <button
            onClick={() => setPage(page + 1)}
            // You can disable Next when there is no more data, e.g. coinData.length < per_page
            disabled={coinData.length < per_page}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50 text-black"
          >
            Next
          </button>
        </div>
      </>
    )}
  </>
);

export default HomePageView;
