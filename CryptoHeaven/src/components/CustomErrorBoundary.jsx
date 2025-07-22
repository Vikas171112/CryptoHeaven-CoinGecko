import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      style={{
        padding: "1rem",
        border: "1px solid red",
        borderRadius: "4px",
        backgroundColor: "#fee",
      }}
    >
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button
        style={{ marginTop: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}

const AppErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default AppErrorBoundary;
