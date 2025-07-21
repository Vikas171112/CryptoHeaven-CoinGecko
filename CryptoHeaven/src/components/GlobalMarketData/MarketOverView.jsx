import StatCard from "./StatCard";

export default function MarketOverview({ stats }) {
  return (
    <div className="flex flex-wrap gap-2">
      <StatCard
        title="Active Cryptocurrencies"
        value={stats.active_cryptocurrencies}
      />
      <StatCard title="Markets" value={stats.markets} />
      <StatCard
        title="Market Cap 24h Change"
        value={stats.market_cap_change_percentage_24h_usd.toFixed(2) + "%"}
      />
      <StatCard
        title="Market Cap (USD)"
        value={`$${Number(stats.total_market_cap.usd).toLocaleString()}`}
      />
      <StatCard
        title="24h Volume (USD)"
        value={`$${Number(stats.total_volume.usd).toLocaleString()}`}
      />
    </div>
  );
}
