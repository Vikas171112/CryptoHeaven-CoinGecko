import MarketSharePie from "./MarketSharePie";
import MarketTable from "./MarketTable";
import ICOStatus from "./ICOStatus";
import LastUpdated from "./LastUpdated";
import MarketOverview from "./MarketOverView";
import useFetchGlobalMarketData from "../../Hooks/useFetchGlobalMarketData";

export default function Dashboard({ data }) {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-white">
        Global Crypto Market
      </h1>
      <MarketOverview stats={data} />
      <ICOStatus
        upcoming={data.upcoming_icos}
        ongoing={data.ongoing_icos}
        ended={data.ended_icos}
      />
      <div className="my-8">
        <h2 className="text-xl font-bold text-white mb-2">Market Cap Share</h2>
        <MarketSharePie data={data.market_cap_percentage} />
      </div>
      <div className="my-8">
        <h2 className="text-xl font-bold text-white mb-2">
          Market Cap & 24h Volume
        </h2>
        <MarketTable cap={data.total_market_cap} volume={data.total_volume} />
      </div>
      <LastUpdated timestamp={data.updated_at} />
    </div>
  );
}
