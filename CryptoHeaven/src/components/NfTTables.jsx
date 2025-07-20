import React, { useState } from "react";
import Table from "./Table";
import useFetchNftlist from "../Hooks/useFetchNfts";

function NfTTables() {
  const [page, setPage] = useState(1);
  const per_page = 20;
  const columns = [
    { header: "Name", key: "name" },
    { header: "Symbol", key: "symbol" },

    { header: "Asset Platform", key: "asset_platform_id" },
    { header: "ID", key: "id" },
  ];
  const { nftdata, isLoading, isSuccess, isError } = useFetchNftlist(
    page,
    per_page
  );
  console.log(nftdata);

  if (isError) {
    return (
      <div className="text-red-600 text-center py-6">
        <p>Error loading NFT list.</p>
        <pre className="text-xs text-gray-400"></pre>
      </div>
    );
  }
  return isLoading ? (
    <div>
      <p>Loading ...</p>
    </div>
  ) : (
    <div>
      <Table columns={columns} data={nftdata} />
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
          disabled={nftdata.length < per_page}
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50 text-black"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NfTTables;
