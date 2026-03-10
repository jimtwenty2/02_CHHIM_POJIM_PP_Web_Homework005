"use client";
import BackButtonComponent from "./components/ButtonComponents/BackButtonComponent";
import ButtonYourBookMarkComponent from "./components/ButtonComponents/ButtonYourBookMarkComponent";
import CardItem from "./components/CardItem";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import ProfileComponent from "./components/ProfileComponent";
import SearchComponent from "./components/SearchComponent";
import ButtonAToZComponent from "./components/ButtonComponents/SortButtonComponents/ButtonAToZComponent";
import ButtonZToAComponent from "./components/ButtonComponents/SortButtonComponents/ButtonZToAComponent";
import ModalComponent from "./components/ModalComponent";
import { useEffect, useState } from "react";
import { items } from "./data";
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [itemsList, setItemList] = useState(items);
  const [itemToShow, setItemToShow] = useState({});
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  return (
    <div className="flex flex-col bg-gray-950 h-screen text-white gap-3">
      <div className="flex w-full bg-gray-900 justify-between px-3">
        <ProfileComponent />
        <SearchComponent />
      </div>
      <div className="flex h-full px-3 mb-4 gap-3">
        <MenuComponent />
        <div className="w-full flex flex-col ">
          <div className="w-305 flex justify-between">
            <BackButtonComponent setShowSavedOnly={setShowSavedOnly} />
            <div className="flex gap-4">
              <ButtonYourBookMarkComponent
                showSavedOnly={showSavedOnly}
                setShowSavedOnly={setShowSavedOnly}
              />
              <ButtonAToZComponent setItemList={setItemList} />
              <ButtonZToAComponent setItemList={setItemList} />
            </div>
          </div>
          <CardItem
            itemsList={itemsList}
            setShowModal={setShowModal}
            setItemToShow={setItemToShow}
            showSavedOnly={showSavedOnly}
            setItemList={setItemList}
          />
        </div>
      </div>
      {showModal && (
        <ModalComponent itemToShow={itemToShow} setShowModal={setShowModal} />
      )}
    </div>
  );
}
