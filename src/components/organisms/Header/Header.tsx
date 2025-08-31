import { openEditDrawer } from "../../../modals/modalRegistry";
import { HeroIcon } from "../../atoms/HeroIcon";
import { Searchbar } from "../../molecules/SearchBar/Searchbar";
import { Avatar } from "../../atoms/Avatar";
import { useNavigate } from "react-router-dom";

export function Header() {

  const navigate = useNavigate()

  return (
    <div className="bg-leidenBlue px-4 py-2 flex justify-between items-center w-full h-20">
      <div
        onClick={() => openEditDrawer("Edit profile")}
        className="w-full lg:hidden text-white"
      >
        <HeroIcon iconName="Bars3Icon" />
      </div>
      <div onClick={() => navigate("/")} className="text-white lg:flex hidden hover:cursor-pointer items-center gap-2 font-bold">
        <HeroIcon className="h-10 w-10" iconName="HomeIcon" />
        <p className="text-xl">Home</p>
      </div>
      <div className="w-1/2 flex gap-4 items-center justify-end h-full">
        <Avatar userName="DG" />
        <Searchbar />
      </div>
    </div>
  );
}
