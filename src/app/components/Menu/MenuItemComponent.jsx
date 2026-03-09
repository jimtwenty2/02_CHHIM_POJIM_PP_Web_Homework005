import React from "react";

export default function MenuItemComponent({ item }) {
  return (
    <div className="w-53 h-10 bg-gray-800 rounded-xl">
      <p className="px-4 py-2">{item}</p>
    </div>
  );
}
