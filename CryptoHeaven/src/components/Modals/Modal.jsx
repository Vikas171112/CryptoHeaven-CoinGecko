// src/components/Modal.jsx
import React from "react";

export default function Modal({
  open,
  onClose,
  children,
  maxWidth = "max-w-lg",
}) {
  if (!open) return null;

  // Escape key handle for accessibility
  React.useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape") onClose && onClose();
    }
    if (open) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      onClick={onClose}
    >
      <div
        className={`bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 w-full ${maxWidth} relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
