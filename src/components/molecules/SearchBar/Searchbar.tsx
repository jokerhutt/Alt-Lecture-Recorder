import { HeroIcon } from "../../atoms/HeroIcon";
import { Input } from "../../atoms/Input";

export function Searchbar() {
  return (
    <div className="w-3/4 bg-white h-10 flex rounded-2xl px-2 gap-2 justify-around items-center text-black max-h-10">
      <HeroIcon iconName="MagnifyingGlassIcon" />
      <Input />
    </div>
  );
}
