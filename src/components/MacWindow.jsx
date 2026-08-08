"use client";
import React from "react";

export function MacWindow({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className="mac-window mx-auto border border-border bg-background rounded-lg shadow-lg"
    >
      <div className="mac-header flex items-center gap-2 px-3 py-2 bg-muted/20 border-b border-border">
        <span className="w-3 h-3 bg-red-500 rounded-full" />
        <span className="w-3 h-3 bg-yellow-500 rounded-full" />
        <span className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <div className={`mac-content ${className}`}>{children}</div>
    </div>
  );
}
