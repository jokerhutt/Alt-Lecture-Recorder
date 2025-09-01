import { useNavigate } from "react-router-dom";
import { HeroIcon } from "../../../../components/atoms/HeroIcon";

type RecordingTextContainerProps = {
  title: string;
  owner: string;
  course: string;
  description: string;
};
export function RecordingTextContainer({
  title,
  owner,
  course,
  description,
}: RecordingTextContainerProps) {
  const navigate = useNavigate()
  return (
        <div  className="flex flex-col  gap-2">
          <h2 onClick={() => navigate("/recordings/1")} className="text-3xl font-bold text-leidenBlue hover:cursor-pointer hover:underline">{title}</h2>
          <p>Owner: {owner}</p>
          <div className="flex gap-2 text-leidenBlue font-bold">
            <HeroIcon solid={true} iconName="FolderIcon" />
            <p>{course}</p>
          </div>
          <p>{description}</p>
        </div>
  );
}
