import { HeroIcon, type IconName } from "../../atoms/HeroIcon";
import { Avatar } from "../../atoms/Avatar";

export function MainNavigation() {
  const tabNames = ["My Presentations", "Browse Courses", "Shared Folders"];

  const icons: IconName[] = ["FilmIcon", "AcademicCapIcon", "FolderIcon"];

  return (
    <div className="h-full w-full lg:p-4 lg:border-r flex flex-col border-r-black">
      <div className="w-full flex gap-3 items-center">
        <Avatar size="h-20 w-20 text-2xl" userName="DG" />
        <div>
          <p className="font-bold text-lg">David Glogowski</p>
          <p>Lecturer</p>
          <p>Leiden University</p>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <hr className="my-4" />
        <div className="flex w-full h-full gap-6 flex-col">
          {tabNames.map((tab, index) => (
            <div className="flex justify-between">
              <div className="flex w-full text-3xl items-center gap-4">
                <HeroIcon className="h-10 w-10" iconName={icons[index]} />
                <p>{tab}</p>
              </div>
              <div className="flex items-center">
                <HeroIcon iconName="ChevronRightIcon" />
              </div>
            </div>
          ))}
        </div>
        <hr className="my-4" />
      </div>
    </div>
  );
}
