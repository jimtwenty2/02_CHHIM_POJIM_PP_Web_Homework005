import React from "react";
import ButtonSaveToBookMark from "./ButtonSaveToBookMark";
import ButtonViewComponent from "./ButtonViewComponent";

export default function CardItem() {
  return (
    <div className="w-305 h-25 border border-gray-700 rounded-2xl my-3 flex justify-between px-2 py-2 ml-5">
      <div className="flex gap-2">
        <div className="w-30 bg-[url('https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750')] bg-cover bg-center rounded-2xl"></div>
        <div className="flex flex-col items-start justify-center">
          <div className="flex gap-2 items-center justify-center">
            <span>Product name</span>
            <span className="text-gray-400 text-sm">$ 39.99</span>
            <ButtonSaveToBookMark/>
          </div>
          <p className="text-gray-400 text-sm">Product Description asdjfjaslkdfjlkjasdlkfjlkasjdlkfjlkjsdlkfjalk</p>
        </div>
      </div>
      <ButtonViewComponent/>
    </div>
  );
}
