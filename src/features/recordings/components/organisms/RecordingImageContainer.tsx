import { HeroIcon } from "../../../../components/atoms/HeroIcon";
import { RecordingImage } from "../molecules/RecordingImage";
import { RecordingLength } from "../molecules/RecordingLength";
import { RecordingViews } from "../molecules/RecordingViews";

type RecordingImageContainerProps = {
  image: string;
};

export function RecordingImageContainer({
  image,
}: RecordingImageContainerProps) {
  return (
    <div className="p-2 border lg:w-80 min-w-80 lg:max-w-80 flex flex-col justify-between">
      <RecordingImage image={image}/>
      <div className="w-full flex justify-between items-center">
        <RecordingViews />
        <RecordingLength />
      </div>
    </div>
  );
}
