import React from "react";
import MenuItemComponent from "./MenuItemComponent";

export default function MenuComponent() {
  const menuItems = ["Overview", "Items", "Orders", "Customers", "Settings"];
  return (
    <div className="h-full  w-60 bg-gray-900 rounded-xl flex flex-col items-center gap-2 px-5 py-4">
      <p className="self-start text-gray-400">Menu</p>
      {menuItems.map((item, index) => (
        <MenuItemComponent key={index} item={item} />
      ))}
    </div>
  );
}
