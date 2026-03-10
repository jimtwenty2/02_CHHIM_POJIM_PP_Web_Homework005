"use client";
import React from "react";
export default function ButtonSaveToBookMark({ item, setItemList, itemsList }) {
  const color = item.saved ? "yellow" : "none";
  const strokeColor = item.saved ? "yellow" : "currentColor";
  function handleOnClick() {
    setItemList(
      itemsList.map((it) =>
        it.id === item.id ? { ...item, saved: !item.saved } : it,
      ),
    );
  }
  return (
    <button className="active:text-yellow-300 " onClick={handleOnClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${color}`}
        stroke={`${strokeColor}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-bookmark-icon lucide-bookmark`}
      >
        <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
      </svg>
    </button>
  );
}
