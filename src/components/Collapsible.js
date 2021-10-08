import React from "react";

export default function Collapsible({ summary, children }) {
  return (
    <details className="sm">
      <summary className="py-4 sm">{summary}</summary>
      {children}
    </details>
  );
}
