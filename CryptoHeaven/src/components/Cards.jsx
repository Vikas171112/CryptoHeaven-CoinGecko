import React from "react";

function Cards({ cardTitle, items = [] }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs bg-white rounded-xl shadow p-4 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          {cardTitle}
        </h2>
        <div className="divide-y divide-gray-100">
          {items.length === 0 ? (
            <div className="text-sm text-gray-400 text-center py-2">
              No data
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-2 gap-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.label}
                      className="h-7 w-7 rounded-full shadow-sm object-contain"
                      loading="lazy"
                    />
                  )}
                  <span className="truncate font-medium text-sm text-gray-700 leading-none">
                    {item.label}
                  </span>
                  {item.symbol && (
                    <span className="ml-1 uppercase text-xs text-gray-400">
                      {item.symbol}
                    </span>
                  )}
                </div>
                <span className="font-mono text-sm text-gray-700 text-right">
                  {item.value}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
