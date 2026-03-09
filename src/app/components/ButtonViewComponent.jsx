"use client";
import React from "react";

export default function ButtonViewComponent() {
  return (
    <button
      className="mr-2 border border-gray-700 w-20 h-10 rounded-xl self-center bg-purple-950/60"
      onClick={() => {
        alert("You clicked view");
      }}
    >
      View
    </button>
  );
}
