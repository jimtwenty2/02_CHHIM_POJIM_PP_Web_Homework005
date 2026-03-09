"use client";
import React from "react";

export default function SearchComponent() {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        className="bg-gray-200/10 h-9 rounded-xl border-gray-100 px-5 w-70 	focus:outline-2 focus:outline-offset-1 focus:outline-gray-50"
        placeholder="Search by item name..."
      />
    </div>
  );
}
