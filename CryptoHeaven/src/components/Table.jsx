import React from "react";

const Table = ({ columns = [], data = [], onRowClick }) => {
  return (
    <div className="overflow-x-auto rounded shadow bg-gray-900">
      <table className="min-w-full divide-y divide-gray-800 bg-gray-900 text-gray-200">
        <thead className="bg-gray-800">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {data.map((row, idx) => (
            <tr
              key={row.id ?? idx}
              className="hover:bg-gray-800 cursor-pointer"
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-6 py-4 text-blue-200 whitespace-nowrap"
                >
                  {col.key === "image" ? (
                    <img
                      src={row[col.key]}
                      alt={row.name}
                      className="h-7 w-7 rounded-full"
                    />
                  ) : col.key === "price_change_percentage_24h" ? (
                    <span
                      className={
                        row[col.key] > 0 ? "text-green-400" : "text-red-400"
                      }
                    >
                      {row[col.key] == null
                        ? "-"
                        : row[col.key]?.toFixed(2) + "%"}
                    </span>
                  ) : col.key === "current_price" ||
                    col.key === "market_cap" ? (
                    row[col.key] == null ? (
                      "-"
                    ) : (
                      row[col.key]?.toLocaleString()
                    )
                  ) : (
                    row[col.key] ?? "-"
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
