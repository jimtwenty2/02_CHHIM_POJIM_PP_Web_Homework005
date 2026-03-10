"use client";
import React from "react";
export default function ButtonViewComponent({
  item,
  setShowModal,
  setItemToShow,
}) {
  function clickView() {
    setShowModal((prev) => !prev);
    setItemToShow((prev) => (prev = item));
  }
  return (
    <button
      className="mr-2 border border-gray-700 w-20 h-10 rounded-xl self-center bg-purple-950/60 active:border-gray-400"
      onClick={clickView}
    >
      View
    </button>
  );
}
