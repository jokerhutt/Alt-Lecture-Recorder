import { Checkbox } from "../../../../components/atoms/Checkbox";
import { HeroIcon } from "../../../../components/atoms/HeroIcon";
import { Selection } from "../../../../components/atoms/Selection";
import { StatusIcon } from "../../../../components/atoms/StatusIcon";
import { RecordingSelection } from "../../../recordings/components/molecules/RecordingsSelection";
import { RecordingCard } from "../../../recordings/components/organisms/RecordingCard";
import { mockPresentations } from "../../../recordings/types/recording";
import { CourseSettingsBar } from "../molecules/CourseSettingsBar";
import { CourseOverviewCard } from "../organisms/CourseOverviewCard";

export function CoursePage() {
  const recordings = mockPresentations;
  return (
      <div className="border-b p-8 h-full flex flex-col">
        <CourseOverviewCard/>
        <div className="mt-2 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:block hidden">
            <CourseSettingsBar/>
          </div>
          <div className="flex items-center w-full">
            <RecordingSelection />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          {recordings.map((recording) => (
            <div className="flex flex-col lg:flex-row">
              <RecordingCard
                imageWidth="lg:w-1/4 lg:max-w-1/4 lg:min-w-1/4" 
                title={recording.title}
                owner={recording.owner}
                course={recording.course}
                description={recording.description}
                image={recording.image}
              />
              <div className="flex lg:justify-end items-start gap-2">
              <StatusIcon/>
              <Checkbox/>
              </div>  
            </div>
          ))}
        </div>
              </div>  
            
  );
}
