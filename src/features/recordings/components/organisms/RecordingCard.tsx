import { HeroIcon } from "../../../../components/atoms/HeroIcon";

type RecordingOrganismProps = {
  title: string;
  owner: string;
  course: string;
  description: string;
  image: string;
};

export function RecordingCard({
  title,
  owner,
  course,
  description,
  image,
}: RecordingOrganismProps) {
  return (
    <div className="w-full h-full">
      <div className="w-full flex gap-4 h-full">
        <div className="p-2 border w-80 min-w-80 max-w-80 flex flex-col justify-between">
          <img className="object-cover w-full h-40" src={image} />
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-1 py-1 items-center">
              <HeroIcon iconName="EyeIcon" />
              <p>2</p>
            </div>
            <div className="flex gap-1 py-1 items-center">
              <HeroIcon iconName="ClockIcon" />
              <p>130m</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-leidenBlue">{title}</h2>
          <p>Owner: {owner}</p>
          <div className="flex gap-2 text-leidenBlue font-bold">
            <HeroIcon solid={true} iconName="FolderIcon" />
            <p>{course}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
