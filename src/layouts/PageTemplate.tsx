import { HeroIcon } from "../components/atoms/HeroIcon";
import { mockPresentations } from "../features/recordings/types/recording";
import { RecordingCard } from "../features/recordings/components/organisms/RecordingCard";
import { LabeledSelection } from "../components/molecules/LabeledSelect/LabeledSelection";
import { RecordingSelection } from "../features/recordings/components/molecules/RecordingsSelection";
import { PageHeader } from "../components/molecules/PageHeader/PageHeader";
import { RecordingsGrid } from "../features/recordings/components/organisms/RecordingsGrid";
import type { JSX, ReactNode } from "react";

type PageTemplateProps = {
  header?: string;
  selections?: string;
  selectionscount?: string;
  children: JSX.Element;
}

export function PageTemplate({children, header, selections, selectionscount}: PageTemplateProps) {


  return (
    <div className="flex h-full flex-col px-6">
      {header && <PageHeader title={header}/>}
      <hr className="w-full text-black my-4" />
      <RecordingSelection />
      <hr className="w-full text-black my-8" />
      {children}
    </div>
  );

}
