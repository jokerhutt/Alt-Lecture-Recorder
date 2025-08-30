import { Searchbar } from "./Searchbar";
import { UserProfileIcon } from "./UserProfileIcon";

export function Header () {
    return (
        <div className="bg-leidenBlue px-4 py-2 flex justify-between items-center w-full h-20">
            <div className="w-full">

            </div>
            <div className="w-full flex gap-2 items-center justify-between h-full">
                <UserProfileIcon userName="DG"/>
                <Searchbar/>
            </div>
        </div>
    )
}