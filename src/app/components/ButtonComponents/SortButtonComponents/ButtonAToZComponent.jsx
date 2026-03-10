"use client";
import React from "react";
export default function ButtonAToZComponent({ itemsList,setItemList }) {
  function handleSortFromAToZ() {
    const sortedItems = [...itemsList];
    sortedItems.sort((a, b) => {
      let itemNameA = a.item_name;
      let itemNameB = b.item_name;
      if (itemNameA > itemNameB) return 1;
      else if (itemNameA < itemNameB) return -1;
      return 0;
    });
    setItemList(sortedItems);
  }
  return (
    <button className="hover:text-yellow-300" onClick={handleSortFromAToZ}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-down-az-icon lucide-arrow-down-a-z"
      >
        <path d="m3 16 4 4 4-4" />
        <path d="M7 20V4" />
        <path d="M20 8h-5" />
        <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
        <path d="M15 14h5l-5 6h5" />
      </svg>
    </button>
  );
}
