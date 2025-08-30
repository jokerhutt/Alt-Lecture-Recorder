import { openEditDrawer } from "../Card/modalActions";
import { HeroIcon } from "../commons/HeroIcon";
import { Searchbar } from "./Searchbar";
import { UserProfileIcon } from "./UserProfileIcon";

export function Header () {

    return (
        <div className="bg-leidenBlue px-4 py-2 flex justify-between items-center w-full h-20">
            <div onClick={() => openEditDrawer("Edit profile")} className="w-full lg:hidden text-white">
                <HeroIcon iconName="Bars3Icon"/>
            </div>
            <div className="text-white lg:flex hidden items-center w-full gap-2 font-bold">
                <HeroIcon className="h-10 w-10" iconName="HomeIcon"/>
                <p className="text-xl">Home</p>
            </div>
            <div className="w-full flex gap-4 items-center justify-end h-full">
                <UserProfileIcon userName="DG"/>
                <Searchbar/>
            </div>
        </div>
    )
}