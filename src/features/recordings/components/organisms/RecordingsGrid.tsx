import type { Recording } from "../../types/recording";
import { RecordingCard } from "./RecordingCard";

type RecordingsGridProps = {
  recordings: Recording[];
};

export function RecordingsGrid({ recordings }: RecordingsGridProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {recordings.map((recording) => (
        <RecordingCard
          title={recording.title}
          owner={recording.owner}
          course={recording.course}
          description={recording.description}
          image={recording.image}
        />
      ))}
    </div>
  );
}
