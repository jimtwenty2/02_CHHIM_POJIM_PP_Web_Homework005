"use client";
import React from "react";
export default function ButtonCancelModalComponent({ setShowModal }) {
  function handleCancel() {
    setShowModal((prev) => !prev);
  }
  return (
    <button
      className="px-4 py-1 font-semibold rounded-lg text-gray-100 border border-gray-600 active:border-gray-400"
      onClick={handleCancel}
    >
      Back
    </button>
  );
}
