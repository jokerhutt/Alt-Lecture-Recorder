import { LabeledSelection } from "../../../../components/molecules/LabeledSelect/LabeledSelection";

export function RecordingSelection() {
  return (
    <div className="w-full flex justify-end gap-12">
      <LabeledSelection title="Sort by" options={["Most Recent"]} />
      <LabeledSelection title="Filter" options={["All"]} />
    </div>
  );
}
