import { HeroIcon } from "../commons/HeroIcon";
import { mockPresentations } from "../types/recording";
import { RecordingCard } from "./RecordingCard";
import { FilterSelection } from "./FilterSelection";
import { RecordingSelection } from "./RecordingsSelection";
import { PageHeader } from "./PageHeader";
import { RecordingsGrid } from "./RecordingsGrid";

export function PageTemplate() {
  const recordings = mockPresentations;

  return (
    <div className="flex h-full flex-col px-6">
        <PageHeader title="Your Presentations"/>
      <RecordingSelection />
      <hr className="w-full text-black my-8" />
      <RecordingsGrid recordings={recordings}/>
    </div>
  );
}
