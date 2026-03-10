"use client";
import React, { useState } from "react";
import ButtonSaveToBookMark from "./ButtonComponents/ButtonSaveToBookMark";
import ButtonViewComponent from "./ButtonComponents/ButtonViewComponent";
export default function CardItem({
  itemsList,
  setShowModal,
  setItemToShow,
  showSavedOnly,
  setItemList,
}) {
  return (
    <div>
      {showSavedOnly &&
        itemsList
          .filter((item) => item.saved === true)
          .map((item) => (
            <div
              key={item.id}
              className="w-305 h-20 border border-gray-700 rounded-2xl my-3 flex justify-between px-2 py-2 ml-5"
            >
              <div className="flex gap-2">
                <div
                  className="w-30 bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="flex gap-2 items-center justify-center">
                    <span>{item.item_name}</span>
                    <span className="text-gray-400 text-sm">
                      $ {item.item_price}
                    </span>
                    <ButtonSaveToBookMark
                      item={item}
                      setItemList={setItemList}
                      itemsList={itemsList}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">
                    {item.item_description}
                  </p>
                </div>
              </div>
              <ButtonViewComponent
                item={item}
                setShowModal={setShowModal}
                setItemToShow={setItemToShow}
              />
            </div>
          ))}
      {!showSavedOnly &&
        itemsList.map((item) => (
          <div
            key={item.id}
            className="w-305 h-20 border border-gray-700 rounded-2xl my-3 flex justify-between px-2 py-2 ml-5"
          >
            <div className="flex gap-2">
              <div
                className="w-30 bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="flex flex-col items-start justify-center gap-1">
                <div className="flex gap-2 items-center justify-center">
                  <span>{item.item_name}</span>
                  <span className="text-gray-400 text-sm">
                    $ {item.item_price}
                  </span>
                  <ButtonSaveToBookMark item={item} setItemList={setItemList} itemsList={itemsList}/>
                </div>
                <p className="text-gray-400 text-sm">{item.item_description}</p>
              </div>
            </div>
            <ButtonViewComponent
              item={item}
              setShowModal={setShowModal}
              setItemToShow={setItemToShow}
            />
          </div>
        ))}
    </div>
  );
}
