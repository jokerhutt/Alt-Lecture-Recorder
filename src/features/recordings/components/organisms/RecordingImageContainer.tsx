import { HeroIcon } from "../../../../components/atoms/HeroIcon";
import { RecordingImage } from "../molecules/RecordingImage";
import { RecordingLength } from "../molecules/RecordingLength";
import { RecordingViews } from "../molecules/RecordingViews";

type RecordingImageContainerProps = {
  image: string;
  width?: string;
};

export function RecordingImageContainer({
  image,
  width = "w-1/2 max-w-1/2 min-w-1/2"
}: RecordingImageContainerProps) {
  return (
    <div className={`${width} p-2 border flex flex-col justify-between`}>
      <RecordingImage image={image}/>
      <div className="w-full flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <RecordingViews />
        <RecordingLength />
      </div>
      <div className="flex gap-2 items-center">
        <HeroIcon iconName="LockClosedIcon"/> 
      </div>
      </div>

    </div>
  );
}
