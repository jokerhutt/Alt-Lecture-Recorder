import { HeroIcon } from "../../../../components/atoms/HeroIcon";

type RecordingImageContainerProps = {
    image: string;
}

export function RecordingImageContainer ({image} : RecordingImageContainerProps) {
    return (
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
    )
}