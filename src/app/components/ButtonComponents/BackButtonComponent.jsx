"use client";
import React from "react";

export default function BackButtonComponent({setShowSavedOnly}) {
  function handleOnClick(){
    setShowSavedOnly(false);
  }
  return (
    <button
      className="w-15 h-6 font-semibold rounded-lg text-black bg-gray-100 hover:bg-yellow-300 "
      onClick={handleOnClick}
    >
      Back
    </button>
  );
}
