import BackButtonComponent from "./components/BackButtonComponent";
import ButtonYourBookMarkComponent from "./components/ButtonYourBookMarkComponent";
import CardItem from "./components/CardItem";
import MenuComponent from "./components/Menu/MenuComponent";
import ProfileComponent from "./components/ProfileComponent";
import SearchComponent from "./components/SearchComponent";
import AToZComponent from "./components/Sort/AToZComponent";
import ZToAComponent from "./components/Sort/ZToAComponent";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-950 h-screen text-white gap-3">
      <div className="flex w-full bg-gray-900 justify-between px-3">
        <ProfileComponent />
        <SearchComponent/>
      </div>
      <div className="flex h-full px-3 mb-4 gap-3" >
        <MenuComponent/>
        <div className="w-full border border-amber-200 flex flex-col ">
          <div className="w-305 border border-green-500 flex justify-between">
            <BackButtonComponent/>
            <div className="border border-red-400 flex gap-4">
              <ButtonYourBookMarkComponent/>
              <AToZComponent/>
              <ZToAComponent/>
            </div>
          </div>
          <CardItem/>
        </div>
      </div>
    </div>
  );
}
