import { HeroIcon } from "../components/atoms/HeroIcon";
import { mockPresentations } from "../features/recordings/types/recording";
import { RecordingCard } from "../features/recordings/components/organisms/RecordingCard";
import { LabeledSelection } from "../components/molecules/LabeledSelect/LabeledSelection";
import { RecordingSelection } from "../features/recordings/components/molecules/RecordingsSelection";
import { PageHeader } from "../components/molecules/PageHeader/PageHeader";
import { RecordingsGrid } from "../features/recordings/components/organisms/RecordingsGrid";

export function PageTemplate() {
  const recordings = mockPresentations;

  return (
    <div className="flex h-full flex-col px-6">
      <PageHeader title="Your Presentations" />
      <hr className="w-full text-black my-4" />
      <RecordingSelection />
      <hr className="w-full text-black my-8" />
      <RecordingsGrid recordings={recordings} />
    </div>
  );
}
