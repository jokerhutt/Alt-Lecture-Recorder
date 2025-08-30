import { RecordingImageContainer } from "./RecordingImageContainer";
import { RecordingTextContainer } from "./RecordingTextContainer";

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
      <div className="w-full flex flex-col lg:flex-row gap-4 h-full">
        <RecordingImageContainer image={image} />
        <RecordingTextContainer
          title={title}
          owner={owner}
          course={course}
          description={description}
        />
      </div>
    </div>
  );
}
