type SelectionMoleculeProps = {
  title: string;
  options: string[];
};

export function FilterSelection({ title, options }: SelectionMoleculeProps) {
  return (
    <div className="flex flex-col w-50">
      <p className="font-bold text-lg">{title}</p>
      <select className="text-lg border p-1" name="Most Recent">
        {options.map((option) => (
          <option value={option}> {option} </option>
        ))}
      </select>
    </div>
  );
}
