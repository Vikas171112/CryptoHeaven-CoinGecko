import React from "react";
import Table from "./Table";

import useFetchExchangelist from "../Hooks/useFetchExchangeList";

function ExchangeTables() {
  const columns = [
    { header: "Name", key: "name" },
    { header: "Symbol", key: "image" },

    { header: "Trust Score", key: "trust_score" },
    { header: "ID", key: "id" },
    { header: "Trade Volume", key: "trade_volume_24h_btc" },
    { header: "Country", key: "country" },
  ];

  const { exchangeData } = useFetchExchangelist();
  console.log(exchangeData);

  return (
    <div>
      <Table columns={columns} data={exchangeData} />
    </div>
  );
}

export default ExchangeTables;
