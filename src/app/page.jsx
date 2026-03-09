import BackButtonComponent from "./components/ButtonComponents/BackButtonComponent";
import ButtonYourBookMarkComponent from "./components/ButtonComponents/ButtonYourBookMarkComponent";
import CardItem from "./components/CardItem";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import ProfileComponent from "./components/ProfileComponent";
import SearchComponent from "./components/SearchComponent";
import ButtonAToZComponent from "./components/ButtonComponents/SortButtonComponents/ButtonAToZComponent";
import ButtonZToAComponent from "./components/ButtonComponents/SortButtonComponents/ButtonZToAComponent";

export default function Home() {
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
            <BackButtonComponent />
            <div className="flex gap-4">
              <ButtonYourBookMarkComponent />
              <ButtonAToZComponent />
              <ButtonZToAComponent />
            </div>
          </div>
          <CardItem />
        </div>
      </div>
    </div>
  );
}
