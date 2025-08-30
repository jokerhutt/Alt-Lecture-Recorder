import { HeroIcon, type IconName } from "../commons/HeroIcon";
import { UserProfileIcon } from "../Header/UserProfileIcon";

export function MainNavigation() {
  const tabNames = [
    "My Presentations",
    "Browse Courses",
    "Browse Shared Folders",
  ];

      const icons : IconName[] = ["FilmIcon", "AcademicCapIcon", "FolderIcon"]


  return (
    <div className="h-full w-full px-4 border-r flex flex-col border-r-black">
      <div className="h-40 w-full flex items-center">
        <UserProfileIcon
          size="h-32 w-32 max-h-32 max-w-32 text-2xl"
          userName="DG"
        />
      </div>

      <div className="w-full flex flex-col">
        <hr className="my-4"/>
        <div className="flex w-full h-full gap-6 flex-col">
          {tabNames.map((tab, index) => (
            <div className="flex justify-between">
            <div className="flex w-full text-3xl items-center gap-4">
                <HeroIcon className="h-10 w-10" iconName={icons[index]}/>
              <p>{tab}</p>
            </div>
            <div>
                <HeroIcon  iconName="ChevronRightIcon"/>
            </div>
            </div>
          ))}
        </div>
        <hr className="my-4"/>
        
      </div>
    </div>
  );
}
