import { useNavigate } from "react-router-dom";
import { HeroIcon, type IconName } from "../../atoms/HeroIcon";

type SidebarListProps = {
    listNames: string[];
    navigationPath?: string;
    heading: string
    iconName?: IconName
}

export function SideBarList({listNames, navigationPath, heading, iconName}: SidebarListProps) {

    const navigate = useNavigate()

  const icon = () => iconName ? <HeroIcon className="h-10 w-10" iconName={iconName} /> : null;
  const header = () => heading ? <p>{heading}</p> : null;

  return (
    <div className="flex w-full h-full gap-2 flex-col">
      <div className="flex justify-between">
        <div className="flex w-full text-2xl items-center gap-4">
          {icon()}
          {header()}
        </div>
      </div>
      <div>
      <div className="flex gap-2 items-center">
        <p className="text-xl py-1 px-2 hover:cursor-pointer">Add Course</p>
      </div>
      {listNames.map((name) => (
        <div onClick={() => navigate("/courses/1")}>
          <p className="text-xl py-1 px-2 hover:bg-gray-100 hover:cursor-pointer hover:underline">{name}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
