export default function MarketTable({ cap, volume }) {
  const major = ["usd", "btc", "eth", "bnb", "eur", "inr", "jpy"];
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-900 text-white rounded">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
          </tr>
        </thead>
        <tbody>
          {major.map((cur) => (
            <tr key={cur}>
              <td>{cur.toUpperCase()}</td>
              <td>
                {cap[cur]
                  ? cap[cur].toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })
                  : "-"}
              </td>
              <td>
                {volume[cur]
                  ? volume[cur].toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
