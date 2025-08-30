import type { IconName } from "../../../../components/atoms/HeroIcon";
import { HomeCard } from "../molecules/HomeCard";

export function HomeGrid() {
  const mocks = ["Presentations", "Courses", "Archived", "Help"];
  const icons: IconName[] = [
    "FilmIcon",
    "AcademicCapIcon",
    "ArchiveBoxIcon",
    "QuestionMarkCircleIcon",
  ];

  return (
    <div className="h-full w-full p-4 flex md:grid md:grid-cols-2 flex-col hover:cursor-pointer gap-4">
      {mocks.map((mock, index) => (
        <HomeCard name={mock} icon={icons[index]} />
      ))}
    </div>
  );
}
