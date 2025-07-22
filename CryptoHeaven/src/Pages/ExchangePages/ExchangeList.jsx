import React from "react";

import { useInView } from "react-intersection-observer";
import useFetchExchangeList from "../../Hooks/useFetchExchangeList";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

function ExchangeList() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchExchangeList();

  const exchangeData = data ? data.pages.flat() : [];
  const navigate = useNavigate();

  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return (
      <div className="text-center text-red-500 mt-8">
        "Something went wrong!"
      </div>
    );
  }
  const columns = [
    { header: "Name", key: "name" },
    { header: "Year", key: "year_established" },
    { header: "Country", key: "country" },
    { header: "Trust Score", key: "trust_score" },
    { header: "ID", key: "id" },
  ];
  function handleRowClick(row) {
    navigate(`/exchanges/details/${row.id}`);
  }

  if (isLoading) return <div>Loading exchanges...</div>;
  if (isError) return <div>Error loading exchanges: {error?.message}</div>;

  return (
    <>
      <Table
        columns={columns}
        data={exchangeData}
        onRowClick={handleRowClick}
      />
      {hasNextPage && (
        <div ref={ref} className="text-center py-6 text-gray-400">
          {isFetchingNextPage ? "Loading more..." : "Scroll to load more"}
        </div>
      )}
    </>
  );
}

export default ExchangeList;
