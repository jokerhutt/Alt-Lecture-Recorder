import { Selection } from "../../atoms/Selection";

type LabeledSelectionProps = {
  title: string;
  options: string[];
};

export function LabeledSelection({ title, options }: LabeledSelectionProps) {
  return (
    <div className="flex flex-col w-50">
      <p className="font-bold text-lg">{title}</p>
      <Selection options={options} />
    </div>
  );
}
