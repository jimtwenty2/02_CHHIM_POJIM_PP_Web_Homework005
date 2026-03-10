import React from "react";
import ButtonCancelModalComponent from "./ButtonComponents/ButtonCancelModalComponent";
export default function ModalComponent({ itemToShow, setShowModal }) {
  return (
    <div className="h-screen w-screen bg-black/60 fixed flex flex-col justify-center items-center">
      <div className="w-130 h-80 bg-gray-900 flex rounded-4xl m-10 flex-col p-5 gap-4">
        <div className="flex justify-between">
          <p className="font-semibold text-xl">Product Details</p>
          <ButtonCancelModalComponent setShowModal={setShowModal} />
        </div>
        <div>
          <span className="text-lg font-semibold mr-2 text-gray-300">
            Product ID :
          </span>
          <span>{itemToShow.id}</span>
        </div>
        <div>
          <span className="text-lg font-semibold mr-2 text-gray-300">
            Product :
          </span>
          <span>{itemToShow.item_name}</span>
        </div>
        <div>
          <span className="text-lg font-semibold mr-2 text-gray-300">
            Price :
          </span>
          <span>$ {itemToShow.item_price}</span>
        </div>

        <div>
          <span className="text-lg font-semibold mr-2 text-gray-300">
            Description :
          </span>
          <p>{itemToShow.item_description}</p>
        </div>
      </div>
    </div>
  );
}
