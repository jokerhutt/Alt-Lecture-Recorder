type SelectionProps = {
  options: string[];
};
export function Selection({ options }: SelectionProps) {
  return (
    <select className="text-lg border p-1" name="Most Recent">
      {options.map((option) => (
        <option value={option}> {option} </option>
      ))}
    </select>
  );
}
