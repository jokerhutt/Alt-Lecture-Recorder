import { HeroIcon } from "../commons/HeroIcon";
import { mockPresentations } from "../types/recording";
import { RecordingOrganism } from "./RecordingOrganism";

export function PageTemplate() {
  const recordings = mockPresentations;

  return (
    <div className="flex h-full flex-col px-6">
      <div className="h-20 flex justify-center items-center flex-col font-bold">
        <h1 className="text-4xl">Your Presentations</h1>
      </div>
<hr className="w-full text-black my-4" />

      <div className="w-full flex justify-end gap-12">
        <div className="flex flex-col w-50">
          <p className="font-bold text-lg">Sort By</p>
          <select className="text-lg border p-1" name="Most Recent">
            <option value="Most Recent"> Most Recent </option>
          </select>
        </div>
        <div className="flex flex-col w-50">
          <p className="font-bold text-lg">Filter</p>
          <select className="text-lg border p-1" name="Most Recent">
            <option value="All"> All </option>
          </select>
        </div>
      </div>

        <hr className="w-full text-black my-8" />
      <div className="grid grid-cols-2 gap-4">
        {recordings.map((recording) => (
          <RecordingOrganism
            title={recording.title}
            owner={recording.owner}
            course={recording.course}
            description={recording.description}
            image={recording.image}
          />
        ))}
      </div>
    </div>
  );
}
