import { FilterSelection } from "./FilterSelection";

export function RecordingSelection() {
  return (
    <div className="w-full flex justify-end gap-12">
      <FilterSelection title="Sort by" options={["Most Recent"]} />
      <FilterSelection title="Filter" options={["All"]} />
    </div>
  );
}
