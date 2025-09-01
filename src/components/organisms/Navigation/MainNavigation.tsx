import { HeroIcon, type IconName } from "../../atoms/HeroIcon";
import { Avatar } from "../../atoms/Avatar";
import { useNavigate } from "react-router-dom";
import { SideBarList } from "../../molecules/SideBar/SidebarList";

export function MainNavigation() {

  const navigate = useNavigate()

  const tabNames = ["My Presentations"];

  const icons: IconName[] = ["FilmIcon", "AcademicCapIcon", "FolderIcon"];
  const courseNames: string[] = ["Politics", "Economics", "Philosphy of Science", "French 2"]
  const navPaths = ["/recordings", "/courses", "/shared"]

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

      <div className="w-full h-full flex flex-col">
        <hr className="my-4" />
        <div className="flex w-full h-full gap-6 flex-col">
          {tabNames.map((tab, index) => (
            <div className="flex justify-between hover:cursor-pointer" onClick={() => navigate(navPaths[index])}>
              <div className="flex w-full text-2xl items-center gap-4">
                <HeroIcon className="h-10 w-10" iconName={icons[index]} />
                <p>{tab}</p>
              </div>
              <div className="flex items-center">
                <HeroIcon iconName="ChevronRightIcon" />
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-4" />
      </div>
           <div className="w-full flex flex-col">
        <hr className="my-4" />
        <SideBarList listNames={courseNames} iconName="AcademicCapIcon" heading="Courses"/>
        <hr className="my-4" />
      </div> 
    </div>
  );
}
