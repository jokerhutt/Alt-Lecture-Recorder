import { VideoPlayer } from "../../../components/molecules/VideoPlayer/VideoPlayer";
import { RecordingCard } from "../components/organisms/RecordingCard";
import { mockPresentations } from "../types/recording";

export function RecordingPage() {
  const recordings = mockPresentations;

  return (
    <div className="w-full h-full p-8 flex flex-col">
      <VideoPlayer src="/mockVideoOne.mp4" />
      <div className="w-full flex gap-4">
        <div className="p-4 my-4 border h-fit flex flex-col">
          <h2 className="text-4xl">
            MSc Political Science - Democracy and Representation, Leiden
            University
          </h2>
          <p>Owner: David Glogowski</p>
        </div>
        <div className="flex px-4 my-2 flex-col">
          <h3 className="text-2xl mb-4 font-bold">Up next</h3>
          <div className="flex flex-col gap-4">
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
        </div>
      </div>
    </div>
  );
}
