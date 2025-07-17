// src/components/Table.jsx
import React from "react";

const Table = ({ columns = [], data = [], onRowClick }) => {
  return (
    <div className="overflow-x-auto rounded shadow">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, idx) => (
            <tr
              key={row.id ?? idx}
              className="hover:bg-gray-50"
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-6 py-4 text-blue-700 whitespace-nowrap"
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
                        row[col.key] > 0 ? "text-green-900" : "text-red-600"
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
